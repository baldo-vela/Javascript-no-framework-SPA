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
};