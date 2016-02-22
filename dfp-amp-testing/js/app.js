// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
// except 'app' ones, 
requirejs.config({
    "baseUrl": "js/lib",
    "paths": {
      "app": "../app",
      "html": "../../html"
    },
    "shim": {
        "jquery.easing": {
        	"deps": ["jquery"]
        },
        "bootstrap": {
          "deps": ["jquery"]
        },
        "grayscale": {
            "deps": [
              "jquery.easing"
            ]
        },
        "adcloud": {
          "deps": [
            "//adcloud-api.googleplex.com/adcloud.js"
          ],
          "exports": "AdCloud"
        }
    }
});

// Load the main app module to start the app
requirejs(["app/main"]);