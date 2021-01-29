import { lite } from './scripts/lite.js.js';
import { routes } from './scripts/routes.js.js';

export function main() { 
    initializer.init();
}

let initializer = {
    init : function() {
        this.initializeRouter();
    },
    initializeRouter : function() {
        window.lite = lite;
 
        lite.router = new lite.Router({
            paths : routes, 
            onHashChange : function(hash, filePath) {
                hash = hash.substr(1);
                if(!filePath) {
                    // Default path behavior if not found in routes: 
                        // #hash/url/path looks for file ../site/hash/url/path/path.js
                    filePath = hash + '/' + hash.split('/').slice(-1)[0] + '.js';
                }
                let route = './pages/' + filePath;

                import(route)
                    .then(file => {                        
                        new file.page().attach(document.getElementById('content'));
                    });
            }
        });

        window.onhashchange()
    }
}
    