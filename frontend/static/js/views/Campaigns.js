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
        this.id = params.id
        this.name = params.name

    }

    async getHtml() {
        return `
            <h1>Scope out your Campaigns</h1>
            <ul id="campaigns-container"></ul> 
        `;
    }
    render(){
        return(
            `<li id="campaign-${this.id}" data-link=${this.id}>`
        )
    }

    addToDom(){
        const campaignsContainer = document.getElementById("campaigns-container");
        console.log(this)
        campaignsContainer.innerHTML += this.render()
    }


}