import AbstractView from "./AbstractView.js";
//Okay lets define a game system
export default class extends AbstractView {
    constructor() {
        // Need the super constructor to override the parent class
        super();
        this.setTitle("Games");
    }

    async getHtml() {
        return `
            <h1>Scope out your Games</h1>
        `;
    }
}