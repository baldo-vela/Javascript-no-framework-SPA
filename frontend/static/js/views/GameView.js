import AbstractView from "./AbstractView.js";
//
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.gameId = params.id;
        this.setTitle("Viewing Game");
    }

    async getHtml() {
        return `
            <h1>Post</h1>
            <p>You are viewing post #${this.GameId}.</p>
        `;
    }
}