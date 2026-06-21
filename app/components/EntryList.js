import { html } from "../html.js";
import { Link } from "./Link.js";

// Shared timeline-style list used by both Experience and Education.
export function EntryList({ items }) {
    return html`
        <div class="entries">
            ${items.map(
                (it, i) => html`
                    <article class="entry" key=${i}>
                        <p class="entry-date">
                            <span class="entry-node" aria-hidden="true"></span>
                            ${it.date}
                        </p>
                        <div class="entry-main">
                            <h3 class="entry-role">
                                ${it.role}${it.org
                                    ? html`<span class="entry-org">
                                          — ${it.org}</span
                                      >`
                                    : null}
                            </h3>
                            ${it.points && it.points.length
                                ? html`<ul class="entry-points">
                                      ${it.points.map(
                                          (p, pi) =>
                                              html`<li key=${pi}>${p}</li>`
                                      )}
                                  </ul>`
                                : null}
                            ${it.links && it.links.length
                                ? html`<div class="link-row">
                                      ${it.links.map(
                                          (l, li) => html`
                                              <${Link}
                                                  key=${li}
                                                  className="action-link"
                                                  href=${l.href}
                                                  >${l.text}<//
                                              >
                                          `
                                      )}
                                  </div>`
                                : null}
                        </div>
                    </article>
                `
            )}
        </div>
    `;
}
