import { html } from "../html.js";

export function Skills({ groups, stack }) {
    // Duplicate the list so the marquee can scroll seamlessly.
    const loop = [...stack, ...stack];

    return html`
        <div class="skills">
            <div class="skill-grid">
                ${groups.map(
                    (g, i) => html`
                        <div class="skill-cat" key=${i}>
                            <h4>${g.label}</h4>
                            <p>${g.items}</p>
                        </div>
                    `
                )}
            </div>

            <p class="chips-label">Stack &amp; Toolchain</p>
            <div
                class="marquee"
                aria-label=${"Technology stack: " + stack.join(", ")}
            >
                <ul class="marquee-track" aria-hidden="true">
                    ${loop.map(
                        (s, i) => html`<li class="tag" key=${i}>${s}</li>`
                    )}
                </ul>
            </div>

            <p class="meta-facts"><strong>Driving licence</strong> — B</p>
        </div>
    `;
}
