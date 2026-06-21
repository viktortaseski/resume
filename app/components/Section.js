import { html } from "../html.js";

export function Section({ id, index, title, intro, children }) {
    return html`
        <section class="section reveal" id=${id}>
            <div class="section-head">
                <span class="section-index">${index}</span>
                <h2 class="section-title">${title}</h2>
                <span class="section-rule" aria-hidden="true"></span>
            </div>
            <div class="section-body">
                ${intro
                    ? html`<p class="section-intro">${intro}</p>`
                    : null}
                ${children}
            </div>
        </section>
    `;
}
