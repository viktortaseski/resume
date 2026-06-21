import { html } from "../html.js";

// Layered atmosphere: an animated dot-grid, drifting amber glow blobs, a
// cursor-tracking spotlight, and a fine film grain over the top.
export function Background() {
    return html`
        <div class="bg" aria-hidden="true">
            <div class="bg-grid"></div>
            <div class="bg-blob bg-blob-a"></div>
            <div class="bg-blob bg-blob-b"></div>
            <div class="bg-spotlight"></div>
            <div class="bg-grain"></div>
        </div>
    `;
}
