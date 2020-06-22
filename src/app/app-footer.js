import { Component } from '../core/component';

class AppFooter extends Component {
    constructor(config) {
        super(config);
    }
}

export const appFooter = new AppFooter({
    selector: 'app-footer',
    template: `
    <nav class="app-footer__nav line">  
        <h1>Footer</h1>
    </nav> 
    `
})
