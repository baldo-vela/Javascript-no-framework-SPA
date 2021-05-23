console.log("Index.JS Loaded!")

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
};

document.addEventListener("DOMContentLoaded", () => {
    console.log("Document Loaded");
    router();
})