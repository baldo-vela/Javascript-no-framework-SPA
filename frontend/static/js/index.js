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

    instanceAdapter.getCampaigns();
})

//Read - Fetch Campaigns