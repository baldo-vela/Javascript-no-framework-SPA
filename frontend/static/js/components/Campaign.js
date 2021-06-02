//Campaign has a Name, and a Descrip
//A Campaign has many NPC's
class Campaign {
    static all = []

    constructor(params) {
        //We have to call this method to override the parent class constructor
        
        this.id = params.id
        this.name = params.name
        this.description = params.description
        //By default, the Front end will not be passing in any npc's in the params json, only the Rails seeding file does this
        //TO DO: Add conditional logic to handle this
            //     Uncaught (in promise) TypeError: Cannot read property 'map' of undefined
            //      at new Campaign (Campaign.js:13)
            //      at campaignAdapter.js:42
        console.log("npcs", params.npcs)
        this.npcs = params.npcs.map(n => new Npc(n))
        //this.setTitle(`${name}`)

        Campaign.all.push(this)

    }

    getCampaignHeader() {
        return `
            <h1>Scope out your Campaigns</h1> 
        `;
    }
    renderCampaign(){
        return(
            `<card id="campaign-${this.id}" data-id=${this.id}>
                <span><h3>${this.name}</h3></span>
                <p><span>${this.description}</span><br>
                <button class="view-campaign-bttn" data-id=${this.id}>View Campaign</button>
            
                <button class="delete-campaign-bttn" data-id=${this.id}>Delete</button>
                <button class="edit-campaign-bttn" data-id=${this.id}>Edit</button>
                
                </p>
            </card>
            `
        )
    }

    addToDom(){
        const campaignsContainer = document.getElementById("campaigns-container");
        console.log(this)
        campaignsContainer.innerHTML += this.renderCampaign();
    }

    renderNpcs(){
        const li = document.getElementById(`campaign-${this.id}`)
        const ul = document.createElement('ul')

        this.npcs.forEach(n => ul.innerHTML += n.render())
        li.append(ul)
    }


}