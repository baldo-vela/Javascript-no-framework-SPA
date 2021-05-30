//Handles fetching between front and back end

class campaignAdapter {
    constructor(baseURL){
        this.baseCampaignURL = `${baseURL}/api/v1/campaigns`
    }

    getCampaigns(){
        fetch(this.baseCampaignURL)
        .then(res => res.json())
        //.then(res => console.log("json object:", res))
        .then(campaigns => {
           campaigns.forEach(campaign =>{
                console.log("Rails object:", campaign)
                let c = new Campaign(campaign.id, campaign.name, campaign.description)
                console.log("JS object:", c)
            })
        })
        //Error catching goes here
        .catch(error => console.error(error))
    }

}