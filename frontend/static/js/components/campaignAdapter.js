//Handles fetching between front and back end

class campaignAdapter {
    constructor(baseURL){
        this.baseCampaignURL = `${baseURL}/api/v1/campaigns`
    }

    getCampaigns(){
        fetch(this.baseCampaignURL)
        .then(resp => resp.json())
        .then(resp => console.log(resp))
        .then(campaigns => {
            campaigns.forEach(campaign => {
                const temp = new Campaign(campaign)
                console.log(temp)
            })
        })
    //Error catching goes here
    .catch(error => console.error(error))
    }

}