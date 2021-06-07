class Npc {
    static all = []

    constructor(params){
        this.id = params.id
        this.name = params.name
        this.notes = params.notes
        this.campaignId = params.campaign_id

        Npc.all.push(this)
    }

    renderNpc(){
        return (`
                <card id="npc-${this.id}" data-id=${this.id}>
                    <span><h4>${this.name}</h4></span>
                    <p>${this.notes}<br></p>
                </card>
        `)
    }

}