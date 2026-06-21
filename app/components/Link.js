import { html } from "../html.js";

// Opens external URLs and PDFs in a new tab; internal links navigate in place.
export function Link({ href, className, children }) {
    const blank = /^https?:\/\//.test(href) || /\.pdf(#|$)/.test(href);
    if (blank) {
        return html`<a
            class=${className}
            href=${href}
            target="_blank"
            rel="noopener noreferrer"
            >${children}</a
        >`;
    }
    return html`<a class=${className} href=${href}>${children}</a>`;
}
