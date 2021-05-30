class Npc {
    static all = []

    constructor(params){
        this.id = params.id
        this.name = params.name
        this.campaignId = params.campaign_id

        Npc.all.push(this)
    }

    renderNpc(){
        return `
            <strong>Test</strong>
        `
    }

}