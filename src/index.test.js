import { expect } from "chai";
import jsdom from "jsdom";
import fs from "fs";

describe( 'Our first test', () => {
    it('should pass', () => {
        expect(true).to.equal(false);
    });
});

describe('index.html', () => {
    it('should say hello', () => {
        const index = fs.readFileSync("./src/index.html", "utf-8");
        const { JSDOM } = jsdom;
        const h1 = dom.window.document.getElementByTagName("h1") [0];
        expect(h1.innerHTML).to.equal("Hello World!");
        dom.window.close();
    });
});