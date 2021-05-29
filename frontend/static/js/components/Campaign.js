//import AbstractView from "./AbstractView.js";
//Okay lets define a campaign system
//Campaign has a Name, and a Descrip
//A Campaign has many NPC's
class Campaign extends AbstractView {


    constructor({id, name, description }) {
        this.id = id
        this.name = name
        this.description = description
        this.setTitle(`${name}`)
        

        Campaign.all.push(this)

    }

    getHtml() {
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