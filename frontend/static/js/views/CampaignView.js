import AbstractView from "./AbstractView.js";
//
export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.campaignId = params.id;
        this.setTitle("Viewing Campaign");
    }

    async getHtml() {
        return `
            <h1>Post</h1>
            <p>You are viewing post #${this.CampaignId}.</p>
        `;
    }
}