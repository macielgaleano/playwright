import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();
await page.goto(
  "http://localhost:6006/?path=/story/inswitch-components-action-button-group--default"
);

page.setViewportSize({ width: 1920, height: 1080 });
page.pdf({ path: "storybook.pdf" });

const id = "storybook-explorer-menu";
const listComponents = await page.$(`#${id}`, (elements) => elements.map((el) => el));

console.log(listComponents);
