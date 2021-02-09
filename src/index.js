import { lite } from './scripts/lite.js';
import { routes } from './scripts/routes.js';

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
            onHashChange : function(hash, value) {
                if(typeof(value) === 'function') { return value(); }
                
                import(value)
                    .then(file => {  
                        new file.page().attach(document.getElementById('content'));
                    });
            }
        });

        window.onhashchange()
    }
}

initializer.init();