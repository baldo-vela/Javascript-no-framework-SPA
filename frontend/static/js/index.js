console.log("Index.JS Loaded!")

import Campaigns from "./views/Campaigns.js";
import CampaignView from "./views/CampaignView.js";
import Dashboard from "./views/Dashboard.js";
import Settings from "./views/Settings.js";
//slight bit of RegEx processing and sanitization on incoming path requests, pushes incoming ID to a capture object [/object/id][id]
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

//Uses the 'history' API to enable user navigation to previously acccesed resources without regen.
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const getParams = match => {
    //grabs the keys and values for the incoming path
    const values = match.result.slice(1);
    //#matchAll is an itterator, so we chew through the path, and build an array that we can pull the first value from to specify the ID of our page object
    const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

    return Object.fromEntries(keys.map((key, i) => {
        return [key, values[i]];
    }));
};

const router = async () => {
    const routes = [
        // Root
        { path: "/",            view: Dashboard },
        // Ideally View all Campaigns
        { path: "/campaigns",       view: Campaigns     },
        //OH snap we need a specific campaign view route
        { path: "/campaignss/:id",  view: CampaignView  },
        // Settings
        { path: "/settings",    view: Settings  },

    ];

    // Okay here we test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
            //uses #pathToRegex to interpret the browser request, to compare versus the paths in router
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

    //Route Defaulting
    if (!match) {
        match = {
            route: routes[0], 
            result: [location.pathname]
        };
    }
    //Creates a new instance of the view at the matched route
    const view = new match.route.view(getParams(match));
    //Takes the view instance, and injects the returned HTML into the div tagged "app"
    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

const instanceAdapter = new campaignAdapter("http://localhost:3000")

document.addEventListener("DOMContentLoaded", () => {
    console.log("Document Loaded");

    //Listens for interaction with 'data-link' tagged hrefs to override default behavior, and pass it to the specified target, but without a page refresh
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });

    router();
    instanceAdapter.getCampaigns();
})