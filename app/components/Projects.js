import { html } from "../html.js";
import { Link } from "./Link.js";

export function Projects({ items }) {
    return html`
        <div class="projects">
            ${items.map(
                (p, i) => html`
                    <article class="project" key=${i} data-tilt="4">
                        <div class="project-glow" aria-hidden="true"></div>
                        <div class="project-body">
                            <div class="project-top">
                                <span class="project-index"
                                    >${String(i + 1).padStart(2, "0")}</span
                                >
                                <h3 class="project-name">${p.name}</h3>
                                <span class="project-when">${p.when}</span>
                            </div>
                            <p class="project-desc">${p.desc}</p>
                            ${p.points && p.points.length
                                ? html`<ul class="project-points">
                                      ${p.points.map(
                                          (pt, pi) =>
                                              html`<li key=${pi}>${pt}</li>`
                                      )}
                                  </ul>`
                                : null}
                            <ul class="tags">
                                ${p.stack.map(
                                    (s, si) =>
                                        html`<li class="tag" key=${si}>
                                            ${s}
                                        </li>`
                                )}
                            </ul>
                            <div class="link-row">
                                ${p.links.map(
                                    (l, li) => html`
                                        <${Link}
                                            key=${li}
                                            className="action-link"
                                            href=${l.href}
                                            >${l.text}<//
                                        >
                                    `
                                )}
                            </div>
                        </div>
                    </article>
                `
            )}
        </div>
    `;
}
