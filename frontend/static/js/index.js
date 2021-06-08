console.log("Index.JS Loaded!")
let editMode = false
let currentCampaign = false

const BASE_URL = "http://localhost:3000"

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
    listenSearch();
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

    console.log("Passing this to creation:", params)
    instanceAdapter.createCampaign(params)
}

//Listen for User interaction with App injected content
function listenInteraction(){
    const campaignsContainer = document.getElementById("campaigns-container");
    campaignsContainer.addEventListener("click", this.handleInteraction)
}
function handleInteraction(e){
    //Interaction with the campaign container feeds into this routing function that reads the 'data-action' css tag of an object
    e.preventDefault()
    const card = e.target.parentElement.parentElement
    const action = e.target.dataset.action
    console.log("Action:", action)
    switch (action) {
        case "delete":
            console.log("Deleting ID:", card.dataset.id)
            handleCampaignDelete(card)
            break;
        case "view":
            if (currentCampaign) currentCampaign.remove()
            console.log("Viewing", card.dataset.id)
            const c = Campaign.all.find(c => c.id == card.dataset.id)
            c.renderNpcs()

            break;
        case "edit":
            //WIP
            console.log("Editing", card.dataset.id)
            // editmode -> card
            //editMode = card
            // button change to update campaign
            //document.getElementById('').value = "Update Campaign"
            // populate input fields appropriately with name of campaign, and description
            // submit edit button, update campaign with #handleEditCampaign
            break;
        default:
            break;
    }

}
function handleCampaignDelete(card){
    //Intercept the delete button event 
    //Ideally throws a confirm window
    //Pass a Fetch to the campaignAdapter #delete method
    console.log("Propmting to Delete Card:", card)
    if (confirm('Are you Sure you wish to delete this campaign?')){
        console.log("User Confirmed Deletion.")
        instanceAdapter.deleteCampaign(card)
        //this.location.reload()
    } else {
        console.log("User Declined Deletion.")
    } 
    

}
//Expand View on a Campaign
function handleCampaignView(e){
    //Expand the selected campaign and perform full CRUD for NPC's
    //Collapse all other campaigns
    //STRETCH goal: Show CRUD buttons for NPC's
    e.preventDefault()

}

//Campaign Edit
function handleEditCampaign(card) {

}

//Campaign Searching
function listenSearch(){
    const searchContainer = document.getElementById('searchBar')
    console.log('Listening for SearchContainer', searchContainer)
    searchContainer.addEventListener('submit', handleCampaignSearch)

}

function handleCampaignSearch(e){
    e.preventDefault()
    console.log('Firing Search', e)
    let searchContents = document.getElementById('searchContents').value.toLowerCase();
    console.log('Search Contents:', searchContents)
    let x = document.getElementsByClassName('campaign')

    for (i = 0; i < x.length; i++){
        if (!x[i].innerHTML.toLowerCase().includes(searchContents)) {
            x[i].style.display="none";
        }
        else {
            x[i].style.display="list-item";                 
        }
    }
}