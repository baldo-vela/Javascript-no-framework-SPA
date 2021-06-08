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
    //Search Bar, locally cross-references Campaign Descriptions, and modifies the dom to display campaigns that contain that word
    searchCampaignsDescriptions(params)
    {
        
        //inject the bar's html into the dom
        //handle user interaction, probably seperate function
        //search through each campaign object locally
        //modify the dom, to output the list of search returned campaigns
        /*
            <div class="search-container">
                <form action="">
                <input type="text" placeholder="Search.." name="search">
                <button type="submit"><></i></button>
                </form>
            </div> 
        */
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
        .then(data =>{
            console.log("API Create response:", data)
            if (data.status === 201){
                let c = new Campaign(data.store)
                c.addToDom();       
            } else {
                console.log("Presenting User with Error from API resp.")
                alert(data.errors)
            }
            
        })
        .catch(err => console.error("API resp. an error:", err))

    }
    //Update existing
    editCampaign(){
        //take a Boolean and some params
        //Run a fetch with patch method

    }

    //Delete Campaign
    deleteCampaign(card){
        console.log("Deleting Campaign Given:", card)
        
        fetch(`${this.baseCampaignURL}/${card.dataset.id}/`,{
            method: 'DELETE'
        })
        .then(resp => {
            console.log("Deletion Remainder:", resp)
            return resp.json()
        })
        .then(data => {
            if (data.message === "Successfully Deleted"){
                //Delete the entry from the Dom
                //Find the element in the front end, and then .remove it
                //.find( (c) => c.id==2) 
                //const removeMe = Campaign.all.find( c => c.id == params.id)
                
                card.remove();
                console.log("Deletion Succeded!")
                
            } else {
                console.log('Deletion Error:',data.message)
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
        
    }

}