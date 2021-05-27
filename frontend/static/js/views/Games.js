import AbstractView from "./AbstractView.js";
//Okay lets define a game system
//Game has a Name, and a Descrip
//A Game has many NPC's
export default class extends AbstractView {
    constructor(params) {
        // Need the super constructor to override the parent class
        super(params);
        this.setTitle("Games");
    }

    async getHtml() {
        return `
            <h1>Scope out your Games</h1>
        `;
    }
}