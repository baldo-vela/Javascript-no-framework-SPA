import AbstractView from "./AbstractView.js";
//Okay lets define a campaign system
//Campaign has a Name, and a Descrip
//A Campaign has many NPC's
export default class Campaign extends AbstractView {


    constructor(params) {
        // Need the super constructor to override the parent class
        super(params);
        this.setTitle("Campaigns");
        this.id = params.id
        this.name = params.name
        this.description = params.description
        //this.npcs = nps.map()

        Campaign.all.push(this)

    }

    async getHtml() {
        return `
            <h1>Scope out your Campaigns</h1>
            <ul id="campaigns-container"></ul> 
        `;
    }
    render(){
        return(
            `<li id="campaign-${this.id}" data-id=${this.id}>
                <span><strong>${this.name}</strong></span>
                <p><span>${this.description}</span></p>
            </li>
            `
        )
    }

    addToDom(){
        const campaignsContainer = document.getElementById("campaigns-container");
        console.log(this)
        campaignsContainer.innerHTML += this.render()
    }


}