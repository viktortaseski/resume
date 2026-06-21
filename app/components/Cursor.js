import { html } from "../html.js";

// Two-part custom cursor: a precise dot plus a lerped trailing ring.
// App.js drives both; CSS hides them on touch / reduced-motion.
export function Cursor() {
    return html`
        <div class="cursor-ring" aria-hidden="true"></div>
        <div class="cursor-dot" aria-hidden="true"></div>
    `;
}
