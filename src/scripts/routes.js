
/* Need static import statements for bundler to pick up the files.
    Later we may adjust this as we learn more about it. */
export let routes = [
    { hash : '', value : () => import('../pages/landing/landing.js').then(view => new view.page().attach(document.getElementById('content'))) },
    { hash : 'random-characters', value : () => import('../pages/random-characters/random-characters.js').then(view => new view.page().attach(document.getElementById('content'))) },
    { hash : 'character-groups', value : () => import('../pages/character-groups/character-groups.js').then(view => new view.page().attach(document.getElementById('content'))) },
]