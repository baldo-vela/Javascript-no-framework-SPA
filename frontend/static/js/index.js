console.log("Index.JS Loaded!")


//import campaignAdapter from "./components/campaignAdapter.js";

//const instanceAdapter = new campaignAdapter("http://localhost:3000")

document.addEventListener("DOMContentLoaded", () => {
    console.log("Document Loaded");

    //Listens for interaction with 'data-link' tagged hrefs to override default behavior, and pass it to the specified target, but without a page refresh
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    //instanceAdapter.getCampaigns();
})