//Campaign has a Name, and a Descrip
//A Campaign has many NPC's
class Campaign {
    static all = []

    constructor(params) {
        //We have to call this method to override the parent class constructor
        
        this.id = params.id
        this.name = params.name
        this.description = params.description
        console.log("npcs", params.npcs)
        this.npcs = params.npcs.map(n => new Npc(n))
        //this.setTitle(`${name}`)

        Campaign.all.push(this)

    }

    getHtml() {
        return `
            <h1>Scope out your Campaigns</h1>
            <ul id="campaigns-container"></ul> 
        `;
    }
    renderCampaign(){
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
        campaignsContainer.innerHTML += this.renderCampaign();
    }


}