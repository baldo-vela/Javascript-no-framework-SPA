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
})



//Create New Campaigns with a form
function addCreateForm(){
    const formContainer = document.getElementById("form-container");
    const form = document.createElement('form');
    form.innerHTML = 
        `   <h2>Create a New Campaign</h2>
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

function handleCampaignDelete(e){
    //Intercept the delete button event 
    //Pass a Fetch to the campaignAdapter #delete method
    //
    e.preventDefault()

}

function handleCampaignView(e){
    //Expand the selected campaign and perform full CRUD for NPC's
    e.preventDefault()

}