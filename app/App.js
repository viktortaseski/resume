import { useEffect, useState } from "react";
import { html } from "./html.js";
import {
    profile,
    experience,
    projects,
    education,
    skillGroups,
    stack,
    documents,
    metrics,
} from "./data.js";
import { Background } from "./components/Background.js";
import { Cursor } from "./components/Cursor.js";
import { TopNav } from "./components/TopNav.js";
import { Hero } from "./components/Hero.js";
import { Section } from "./components/Section.js";
import { EntryList } from "./components/EntryList.js";
import { Projects } from "./components/Projects.js";
import { Skills } from "./components/Skills.js";
import { Documents } from "./components/Documents.js";
import { Footer } from "./components/Footer.js";

const NAV = [
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "documents", label: "Documents" },
];

const prefersReduced = () =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const isTouch = () =>
    window.matchMedia("(hover: none), (pointer: coarse)").matches;

export function App() {
    const [activeId, setActiveId] = useState("home");

    // Scroll-reveal: fade sections in as they enter the viewport, staggering
    // any [data-reveal-child] elements within for a cascading effect.
    useEffect(() => {
        const els = document.querySelectorAll(".reveal");
        if (prefersReduced() || !("IntersectionObserver" in window)) {
            els.forEach((el) => el.classList.add("is-visible"));
            return;
        }
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("is-visible");
                        io.unobserve(e.target);
                    }
                });
            },
            { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    // Highlight the current section in the top nav.
    useEffect(() => {
        if (!("IntersectionObserver" in window)) return;
        const ids = ["home", ...NAV.map((n) => n.id)];
        const sections = ids
            .map((id) => document.getElementById(id))
            .filter(Boolean);
        const spy = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) setActiveId(e.target.id);
                });
            },
            { rootMargin: "-45% 0px -50% 0px" }
        );
        sections.forEach((s) => spy.observe(s));
        return () => spy.disconnect();
    }, []);

    // Scroll-progress indicator at the very top of the page.
    useEffect(() => {
        const bar = document.querySelector(".scroll-progress");
        if (!bar) return;
        let raf = 0;
        const update = () => {
            raf = 0;
            const h =
                document.documentElement.scrollHeight - window.innerHeight;
            const p = h > 0 ? window.scrollY / h : 0;
            bar.style.transform = `scaleX(${Math.min(1, Math.max(0, p))})`;
        };
        const onScroll = () => {
            if (!raf) raf = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    // Custom cursor + cursor-tracking spotlight. Pointer drives a fast dot
    // and a lerped trailing ring; the spotlight follows via CSS vars.
    useEffect(() => {
        if (prefersReduced() || isTouch()) return;
        const dot = document.querySelector(".cursor-dot");
        const ring = document.querySelector(".cursor-ring");
        const root = document.documentElement;
        if (!dot || !ring) return;

        document.body.classList.add("has-cursor");
        let mx = window.innerWidth / 2;
        let my = window.innerHeight / 2;
        let rx = mx;
        let ry = my;
        let raf = 0;
        let visible = false;

        const onMove = (e) => {
            mx = e.clientX;
            my = e.clientY;
            root.style.setProperty("--mx", mx + "px");
            root.style.setProperty("--my", my + "px");
            dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
            if (!visible) {
                visible = true;
                document.body.classList.add("cursor-on");
            }
            const t = e.target.closest(
                "a, button, [data-magnetic], .doc-item, .tag"
            );
            document.body.classList.toggle("cursor-hot", !!t);
        };
        const onLeave = () => {
            visible = false;
            document.body.classList.remove("cursor-on");
        };
        const loop = () => {
            rx += (mx - rx) * 0.16;
            ry += (my - ry) * 0.16;
            ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
            raf = requestAnimationFrame(loop);
        };
        window.addEventListener("pointermove", onMove, { passive: true });
        document.addEventListener("pointerleave", onLeave);
        loop();
        return () => {
            window.removeEventListener("pointermove", onMove);
            document.removeEventListener("pointerleave", onLeave);
            cancelAnimationFrame(raf);
            document.body.classList.remove("has-cursor", "cursor-on", "cursor-hot");
        };
    }, []);

    // Magnetic pull on [data-magnetic] and 3D tilt on [data-tilt].
    useEffect(() => {
        if (prefersReduced() || isTouch()) return;
        const cleanups = [];

        document.querySelectorAll("[data-magnetic]").forEach((el) => {
            const strength = parseFloat(el.dataset.magnetic) || 0.4;
            const move = (e) => {
                const r = el.getBoundingClientRect();
                const x = e.clientX - (r.left + r.width / 2);
                const y = e.clientY - (r.top + r.height / 2);
                el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
            };
            const reset = () => (el.style.transform = "");
            el.addEventListener("pointermove", move);
            el.addEventListener("pointerleave", reset);
            cleanups.push(() => {
                el.removeEventListener("pointermove", move);
                el.removeEventListener("pointerleave", reset);
            });
        });

        document.querySelectorAll("[data-tilt]").forEach((el) => {
            const max = parseFloat(el.dataset.tilt) || 6;
            const move = (e) => {
                const r = el.getBoundingClientRect();
                const px = (e.clientX - r.left) / r.width - 0.5;
                const py = (e.clientY - r.top) / r.height - 0.5;
                el.style.setProperty("--rx", (-py * max).toFixed(2) + "deg");
                el.style.setProperty("--ry", (px * max).toFixed(2) + "deg");
                el.style.setProperty("--gx", (px * 100 + 50).toFixed(1) + "%");
                el.style.setProperty("--gy", (py * 100 + 50).toFixed(1) + "%");
            };
            const reset = () => {
                el.style.setProperty("--rx", "0deg");
                el.style.setProperty("--ry", "0deg");
            };
            el.addEventListener("pointermove", move);
            el.addEventListener("pointerleave", reset);
            cleanups.push(() => {
                el.removeEventListener("pointermove", move);
                el.removeEventListener("pointerleave", reset);
            });
        });

        return () => cleanups.forEach((fn) => fn());
    }, []);

    return html`
        <${Background} />
        <${Cursor} />
        <div class="scroll-progress" aria-hidden="true"></div>
        <${TopNav} nav=${NAV} activeId=${activeId} name=${profile.name} />
        <main class="page">
            <${Hero} profile=${profile} metrics=${metrics} />

            <${Section} id="experience" index="01" title="Experience">
                <${EntryList} items=${experience} />
            <//>

            <${Section} id="projects" index="02" title="Selected Projects">
                <${Projects} items=${projects} />
            <//>

            <${Section} id="education" index="03" title="Education">
                <${EntryList} items=${education} />
            <//>

            <${Section} id="skills" index="04" title="Skills & Tools">
                <${Skills} groups=${skillGroups} stack=${stack} />
            <//>

            <${Section}
                id="documents"
                index="05"
                title="Document Archive"
                intro="Project reports, Erasmus records, and CV. Select a document to preview it; open or download from the toolbar."
            >
                <${Documents} documents=${documents} />
            <//>

            <${Footer} />
        </main>
    `;
}
