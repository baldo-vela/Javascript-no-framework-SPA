import AbstractView from "./AbstractView.js";

class extends AbstractView {
    constructor(params) {
        // Need the super constructor to override the parent class
        super(params);
        this.setTitle("Settings");
    }

    getHtml() {
        return `
            <h1>Settings Menu!</h1>
        `;
    }
}