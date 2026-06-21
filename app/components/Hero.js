import { useEffect, useRef, useState } from "react";
import { html } from "../html.js";
import { Link } from "./Link.js";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ/\\<>[]{}=+*#%@&";

// Decode-from-noise effect: the text resolves out of random glyphs.
function useScramble(target, ref, delay = 0) {
    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;
        if (reduced) {
            el.textContent = target;
            return;
        }
        let frame = 0;
        let raf = 0;
        let timer = 0;
        const run = () => {
            const settled = Math.floor(frame / 2);
            let out = "";
            for (let i = 0; i < target.length; i++) {
                if (target[i] === " ") out += " ";
                else if (i < settled) out += target[i];
                else out += GLYPHS[(Math.random() * GLYPHS.length) | 0];
            }
            el.textContent = out;
            frame++;
            if (settled <= target.length) raf = requestAnimationFrame(run);
            else el.textContent = target;
        };
        timer = setTimeout(() => (raf = requestAnimationFrame(run)), delay);
        return () => {
            clearTimeout(timer);
            cancelAnimationFrame(raf);
        };
    }, [target, delay]);
}

// Live local time at the profile's location — a small monitor detail.
function useClock(timezone) {
    const [time, setTime] = useState("");
    useEffect(() => {
        const fmt = new Intl.DateTimeFormat("en-GB", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
            timeZone: timezone,
        });
        const tick = () => setTime(fmt.format(new Date()));
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, [timezone]);
    return time;
}

export function Hero({ profile, metrics }) {
    const roleRef = useRef(null);
    useScramble(profile.role, roleRef, 450);
    const time = useClock(profile.timezone);

    return html`
        <section class="hero reveal" id="home">
            <div class="hero-grid">
                <div class="hero-main">
                    <p class="hero-status">
                        <span class="status-dot" aria-hidden="true"></span>
                        <span class="status-loc">${profile.location}</span>
                        <span class="status-sep" aria-hidden="true">/</span>
                        <span class="status-now">${profile.now}</span>
                        <span class="status-time" aria-hidden="true"
                            >${time}</span
                        >
                    </p>

                    <h1 class="hero-name">
                        <span class="hero-name-line">Viktor</span>
                        <span class="hero-name-line hero-name-accent"
                            >Taseski</span
                        >
                    </h1>

                    <p class="hero-role" ref=${roleRef}>${profile.role}</p>
                    <p class="hero-lead">${profile.lead}</p>
                    <p class="hero-bio">${profile.bio}</p>

                    <div class="hero-contact">
                        ${profile.contact.map(
                            (c, i) => html`
                                <span class="magnet-wrap" key=${i} data-magnetic="0.4">
                                    <${Link}
                                        className="hero-link"
                                        href=${c.href}
                                        >${c.text}<//
                                    >
                                </span>
                            `
                        )}
                    </div>
                </div>

                <figure class="hero-portrait" data-tilt="7">
                    <div class="portrait-frame">
                        <img
                            src="assets/profile.jpg"
                            alt=${"Portrait of " + profile.name}
                            width="640"
                            height="800"
                        />
                        <span class="portrait-corner tl"></span>
                        <span class="portrait-corner tr"></span>
                        <span class="portrait-corner bl"></span>
                        <span class="portrait-corner br"></span>
                        <figcaption class="portrait-cap">
                            <span>VT — 2026</span>
                        </figcaption>
                    </div>
                </figure>
            </div>

            <dl class="hero-metrics" aria-label="Highlights">
                ${metrics.map(
                    (m, i) => html`
                        <div class="metric" key=${i}>
                            <dt class="metric-value">
                                ${m.value}<span class="metric-suffix"
                                    >${m.suffix}</span
                                >
                            </dt>
                            <dd class="metric-label">${m.label}</dd>
                        </div>
                    `
                )}
            </dl>
        </section>
    `;
}
