import { useState, useEffect } from "react";
import { html } from "../html.js";

export function TopNav({ nav, activeId, name }) {
    const [open, setOpen] = useState(false);
    const close = () => setOpen(false);

    // While the menu is open: lock background scroll and close on Escape.
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKey);
        document.body.style.overflow = "hidden";
        return () => {
            document.removeEventListener("keydown", onKey);
            document.body.style.overflow = "";
        };
    }, [open]);

    return html`
        <header class="nav">
            <div class="nav-inner">
                <a class="nav-brand" href="#home" onClick=${close}>
                    <img
                        class="nav-logo"
                        src="assets/logo.png"
                        alt=""
                        width="32"
                        height="32"
                    />
                    <span class="nav-name">${name}</span>
                </a>

                <nav class="nav-links" aria-label="Sections">
                    ${nav.map(
                        (n) => html`
                            <a
                                key=${n.id}
                                href=${"#" + n.id}
                                class=${"nav-link" +
                                (activeId === n.id ? " is-active" : "")}
                                aria-current=${activeId === n.id
                                    ? "true"
                                    : "false"}
                                ><span class="nav-link-i" aria-hidden="true"
                                    >${String(nav.indexOf(n) + 1).padStart(
                                        2,
                                        "0"
                                    )}</span
                                >${n.label}</a
                            >
                        `
                    )}
                </nav>

                <button
                    type="button"
                    class=${"nav-toggle" + (open ? " is-open" : "")}
                    aria-label=${open ? "Close menu" : "Open menu"}
                    aria-expanded=${open ? "true" : "false"}
                    aria-controls="mobile-menu"
                    onClick=${() => setOpen((v) => !v)}
                >
                    <span></span><span></span><span></span>
                </button>
            </div>

            <div
                class=${"nav-overlay" + (open ? " is-open" : "")}
                onClick=${close}
                aria-hidden="true"
            ></div>

            <nav
                id="mobile-menu"
                class=${"mobile-menu" + (open ? " is-open" : "")}
                aria-label="Mobile navigation"
            >
                ${nav.map(
                    (n) => html`
                        <a
                            key=${n.id}
                            href=${"#" + n.id}
                            class=${"mobile-link" +
                            (activeId === n.id ? " is-active" : "")}
                            aria-current=${activeId === n.id ? "true" : "false"}
                            onClick=${close}
                            >${n.label}</a
                        >
                    `
                )}
            </nav>
        </header>
    `;
}
