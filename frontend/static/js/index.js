console.log("Index.JS Loaded!")

const BASE_URL = "http://localhost:3000"

//import campaignAdapter from "./components/campaignAdapter.js";

const instanceAdapter = new campaignAdapter(BASE_URL)

document.addEventListener("DOMContentLoaded", () => {
    console.log("Document Loaded");

    //Listens for interaction with 'data-link' tagged hrefs to override default behavior, and pass it to the specified target, but without a page refresh
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    //Read - Fetch Campaigns
    instanceAdapter.getCampaigns();
    //Pull in the form for a new campaign
    addCreateForm();
    listenInteraction();
})



//Create New Campaigns with a form
function addCreateForm(){
    const formContainer = document.getElementById("form-container");
    const form = document.createElement('form');
    form.innerHTML = 
        `   <span><h2>Create a New Campaign</h2></span>
            <label for="newCampaignName">Name Your New Campaign:</label><br>    
            <input placeholder='New Campaign' type='text' required='true' id='newCampaignName' maxlength = '40'/><br>
            <label for="newCampaignDescription">Describe your New Campaign:</label><br>
            <textarea type='input' rows='10rem' cols='50rem' name='newCampaignDescription'id='newCampaignDescription' maxlength='500' wrap='true'>Once upon a time...</textarea><br>
            <input id="new-campaign-submit" value='Create Campaign' type='Submit'/>
        `
    formContainer.append(form)

    form.addEventListener("submit", handleCampaignSubmit)
}

function handleCampaignSubmit(e){
    e.preventDefault()
    let newName = document.getElementById("newCampaignName").value
    let newCampaignDescription = document.getElementById("newCampaignDescription").value

    let params = {
        name: newName,
        description: newCampaignDescription
    }

    console.log(params)
    instanceAdapter.createCampaign(params)
}

//Listen for User interaction with App injected content
function listenInteraction(){
    const campaignsContainer = document.getElementById("campaigns-container");
    campaignsContainer.addEventListener("click", this.handleInteraction)
}
function handleInteraction(e){
    //Interaction with the campaign container feeds into a switch that reads the 'data-action' css tag of an object
    e.preventDefault()
    console.log("Target:", e.target)
    const card = e.target.parentElement.parentElement
    const action = e.target.dataset.action
    console.log("Action:", action)
    switch (action) {
        case "delete":
            console.log("Deleting", card)
            handleCampaignDelete(e)
            break;
        case "view":
            
            console.log("Viewing", card)

            break;
        case "edit":
            console.log("Editing", card)
            break;
        default:
            break;
    }

}
function handleCampaignDelete(e){
    //Intercept the delete button event 
    //Ideally throws a confirm window
    //Pass a Fetch to the campaignAdapter #delete method
    console.log("Delete Event:", e)
    if (confirm('Are you Sure you wish to delete this campaign?')){
        console.log("User Confirmed Deletion.")
        instanceAdapter.deleteCampaign(e.target.dataset)
        //this.location.reload()
    } else {
        console.log("User Declined Deletion.")
    } 
    

}
//Expand View on a Campaign
function handleCampaignView(e){
    //Expand the selected campaign and perform full CRUD for NPC's
    //Collapse all other campaigns
    //Show CRUD buttons for NPC's
    //
    e.preventDefault()

}