import AbstractView from "./AbstractView.js";
//
class extends AbstractView {
    constructor(params) {
        super(params);
        this.campaignId = params.id;
        this.setTitle("Viewing Campaign");
    }

    getHtml() {
        return `
            <h1>Post</h1>
            <p>You are viewing post #${this.CampaignId}.</p>
        `;
    }
}