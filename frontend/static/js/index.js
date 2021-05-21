console.log("Index.JS Loaded!")

const router = async () => {
    const routes = [
        // Root
        { path: "/",        view: () => console.log("Viewing Dashboard")    },
        // Posts
        { path: "/posts",   view: () => console.log("Viewing Posts")        },
        // Settings
        { path: "/settings",view: () => console.log("Viewing Settings")     },

    ];

    // Okay here we test each route for potential match
    const potentialMatches = routes.map(route =>{
        return {
            route: route,
            isMatch: location.pathname === route.path

        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    console.log(match);
};

document.addEventListener("DOMContentLoaded", () => {
    console.log("Document Loaded");
    router();
})