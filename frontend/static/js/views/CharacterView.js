import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor() {
        super();
        this.postId = params.id;
        this.setTitle("Viewing Post");
    }

    async getHtml() {
        return `
            <h1>Post</h1>
            <p>You are viewing post #${this.postId}.</p>
        `;
    }
}