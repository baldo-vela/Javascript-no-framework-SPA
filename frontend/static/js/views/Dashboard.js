import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        // Need the super constructor to override the parent class
        super();
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
            <h1>Hello World</h1>
        `;
    }
}