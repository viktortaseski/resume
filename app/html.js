// Bind htm to React.createElement so components can use tagged-template
// markup instead of JSX — no build step or transpiler required.
import React from "react";
import htm from "htm";

export const html = htm.bind(React.createElement);
export { React };
