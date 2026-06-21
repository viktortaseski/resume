import { useState } from "react";
import { html } from "../html.js";

export function Documents({ documents }) {
    const [active, setActive] = useState(0);
    const doc = documents[active];

    // Build a grouped, clickable index while keeping flat indices.
    const rows = [];
    let group = null;
    documents.forEach((d, i) => {
        if (d.group !== group) {
            group = d.group;
            rows.push(
                html`<p class="doc-group" key=${"g" + i}>${group}</p>`
            );
        }
        rows.push(html`
            <button
                type="button"
                key=${i}
                class=${"doc-item" + (i === active ? " is-active" : "")}
                aria-current=${i === active ? "true" : "false"}
                onClick=${() => setActive(i)}
            >
                <span class="doc-item-mark" aria-hidden="true"></span>
                ${d.title}
            </button>
        `);
    });

    return html`
        <div class="doc-browser">
            <nav class="doc-index" aria-label="Document list">${rows}</nav>
            <div class="doc-stage">
                <div class="doc-toolbar">
                    <span class="doc-dots" aria-hidden="true">
                        <i></i><i></i><i></i>
                    </span>
                    <p class="doc-title">${doc.filename}</p>
                    <div class="doc-actions">
                        <a
                            href=${doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            >Open ↗</a
                        >
                        <a href=${doc.url} download=${doc.filename}
                            >Download ↓</a
                        >
                    </div>
                </div>
                <object
                    class="pdf-viewer"
                    type="application/pdf"
                    data=${doc.url}
                    key=${doc.url}
                >
                    <p class="pdf-fallback">
                        Preview unavailable in this browser.${" "}
                        <a
                            href=${doc.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            >Open the document ↗</a
                        >
                    </p>
                </object>
            </div>
        </div>
    `;
}
