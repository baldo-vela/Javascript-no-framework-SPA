//Handles fetching between front and back end
class campaignAdapter {
    constructor(rootURL){
        this.rootStoreURL = `${rootURL}/api/v1/campaigns`
    }

    getCampaigns(){
        fetch(this.rootStoreURL)
        .then(res => res.json()
        .then(campaigns =>{
            campaigns.forEach(campaign => {
                const temp = new Campaign(campaign)
                temp.addToDom()
            })
        }))
    //Error catching goes here
    }

}