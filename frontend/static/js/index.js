console.log("Index.JS Loaded!")

import Dashboard from "./views/Dashboard.js";
//slight bit of sanitization on incoming path requests
const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

//Uses the 'history' API to enable user navigation to previously acccesed resources without regen.
const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        // Root
        { path: "/",            view: Dashboard },
        // Characters
        //{ path: "/characters",  view: () => console.log("Viewing Characters")   },
        // Settings
        //{ path: "/settings",    view: () => console.log("Viewing Settings")     },

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
    //Console ouput the match for debugging
    console.log(match);
    //Route Defaulting
    if (!match) {
        match = {
            route: routes[0], 
            result: [location.pathname]
        };
    }
    //Creates a new instance of the view at the matched route
    const view = new match.route.view();
    //Takes the view instance, and injects the returned HTML into the div tagged "app"
    document.querySelector("#app").innerHTML = await view.getHtml();
};

window.addEventListener("popstate", router);

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
})