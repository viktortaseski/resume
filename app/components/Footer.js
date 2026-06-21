import { html } from "../html.js";

export function Footer() {
    return html`
        <footer class="footer reveal">
            <div class="footer-cta">
                <p class="footer-kicker">Let's build something</p>
                <a class="footer-mail" href="mailto:vtaseski24@gmail.com"
                    >vtaseski24@gmail.com</a
                >
            </div>
            <div class="footer-row">
                <span>Designed &amp; built by Viktor Taseski — 2026</span>
                <span class="footer-links">
                    <a href="https://github.com/viktortaseski" target="_blank" rel="noopener noreferrer">GitHub ↗</a>
                    <span aria-hidden="true">·</span>
                    <a href="https://linkedin.com/in/viktor-taseski-247a9b324" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
                    <span aria-hidden="true">·</span>
                    <a href="#home">Back to top ↑</a>
                </span>
            </div>
        </footer>
    `;
}
