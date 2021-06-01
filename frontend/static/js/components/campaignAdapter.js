//Handles fetching between front and back end

class campaignAdapter {
    constructor(baseURL){
        this.baseCampaignURL = `${baseURL}/api/v1/campaigns`
    }
    //Read the index of Campaigns and itterate the NPC's
    getCampaigns(){
        fetch(this.baseCampaignURL)
        .then(res => res.json())
        .then(campaigns => {
           campaigns.forEach(campaign =>{
                console.log("Rails object:", campaign)
                let c = new Campaign(campaign)
                console.log("JS object:", c)
                c.addToDom();
            })
        })
        //Error catching
        .catch(error => console.error(error))
    }

    //Detail View of a campaign and it's associated NPC's
    viewCampaign(){

    }

    //Create New Campaign
    createCampaign(params){
        //take params from form, user params to 
        //run a fetch with post method
        fetch(this.baseCampaignURL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(params)
        })
        .then(resp => resp.json())
        .then(params =>{
            let c = new Campaign(params)
            c.renderCampaign();
        })

    }
    //Update existing
    editCampaign(){
        //take a Boolean and some params
        //Run a fetch with patch method

    }

}