import AbstractView from "./AbstractView.js";
//Okay lets define a campaign system
//Campaign has a Name, and a Descrip
//A Campaign has many NPC's
export default class Campaign extends AbstractView {
    //Static container
    static all = []

    constructor(params) {
        // Need the super constructor to override the parent class
        super(params);
        this.setTitle("Campaigns");
    }

    async getHtml() {
        return `
            <h1>Scope out your Campaigns</h1>
        `;
    }

    addToDom(){
        const campaignsContainer = document.getElementById("campaign-container");
        campaignsContainer.innerHTML += this.getHtml()
    }


}