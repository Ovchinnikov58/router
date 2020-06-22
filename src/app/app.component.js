import { Component } from '../core/component';

class AppComponent extends Component {
    constructor(config) {
        super(config);
    }
}

export const appComponent = new AppComponent({
    selector: 'app-component',
    template: `
        <app-header></app-header>
        <router-outlet></router-outlet>
        <app-footer></app-footer>
    `
})
