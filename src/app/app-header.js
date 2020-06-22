import { Component } from '../core/component';

class AppHeader extends Component {
    constructor(config) {
        super(config);
    }
}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
    <nav class="app-header__nav line">  
        <h1 class="app-header__logo">Test-router</h1>
    </nav> 
    `
})
