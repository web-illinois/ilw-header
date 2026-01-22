import { expect, test } from "vitest";
import { render } from "vitest-browser-lit";
import { html } from "lit";
import "../src/ilw-header";

const content = html`
    <ilw-header>
        <a slot="primary-unit" href="https://example.edu/">Campus Header Component</a>
        <a slot="site-name" href="https://example.edu/">Sample Header</a>
    </ilw-header>`;

test("renders slotted content", async () => {
    const screen = render(content);
    const element = screen.getByText("Campus Header Component");
    await expect.element(element).toBeInTheDocument();
    const elementSite = screen.getByText("Sample Header");
    await elementSite.element(element).toBeInTheDocument();
});