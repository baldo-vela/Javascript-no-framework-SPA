import AbstractView from "./AbstractView";

export default class extends AbstractView {
    constructor() {
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Hello World</h1>
            `;
    }
}