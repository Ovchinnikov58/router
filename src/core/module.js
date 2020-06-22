export class Module {

    constructor(config) {
        this.components = config.components;
        this.routes = config.routes;
        this.parentComponent = config.parentComponent;
        this.subComponents = config.subComponents;
    }

    init() {
        this.parentComponent.render();
        this.components.forEach(c => c.render());
        if (this.routes) this.initRoutes();
    }

    getUrl () {
        return window.location.hash.slice(1);
    }

    initRoutes() {
        window.addEventListener('hashchange', this.router.bind(this, this.routes));
        this.router(this.routes);
    }

    renderRoute(tag, route) {
        document.querySelector(tag).innerHTML = route.template;
        this.subComponents.forEach( c => {
            //console.log(typeof c.selecor);
            c.render()
        });  //?
    }

    router(routes) {
        let url = this.getUrl();

        let route = {};
        
        for (let key of Object.entries(routes))
        {
            if (key[0] === url) {
                route = key[1];
                //console.log(route);
                this.renderRoute('router-outlet', route);
            } 
        }
 
        if (this.isEmpty(route)) {
            route = routes.notFound;
            this.renderRoute('router-outlet', route);
        }

        if (typeof route === 'undefined') {
            route = routes.notFound;
            this.renderRoute('router-outlet', route);
        }

    }

    isEmpty(obj) {
        for (let key in obj) {
          return false;
        }
        return true;
    }
}

