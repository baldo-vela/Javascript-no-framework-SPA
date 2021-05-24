console.log("Index.JS Loaded!")
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
        { path: "/",        view: () => console.log("Viewing Dashboard")    },
        // Characters
        { path: "/characters",   view: () => console.log("Viewing Characters")        },
        // Settings
        { path: "/settings",view: () => console.log("Viewing Settings")     },

    ];

    // Okay here we test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            result: location.pathname.match(pathToRegex(route.path))
            //uses pathToRegex to interpret the browser request, to compare versus the paths in router
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);
    //Console ouput the match for debugging
    console.log(match);
    //Route Defaulting
    if (!match) {
        match = {
            route: routes[0], 
            isMatch: true
        };
    }

    //Output the result, refactor later with a class
    console.log(match.route.view());
};

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