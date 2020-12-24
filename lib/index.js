import { jsx as _jsx } from "../runtime/jsx-runtime";
import { JSDOM } from "jsdom";
import { render } from "../runtime/jsx-runtime";
import App from "./App"; // our jsdom document

const dom = new JSDOM(`<!DOCTYPE html><body><div id='root'/></body>`);
const {
  document
} = dom.window;
const rootElement = document.getElementById("root");
render(_jsx(App, {}), rootElement);
console.log(document.body.innerHTML);