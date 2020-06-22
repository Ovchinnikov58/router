import { Component } from '../core/component';

class MenuPageComponent extends Component {
    constructor(config) {
        super(config);
    }
}

export const menuPageComponent = new MenuPageComponent({
    selector: 'menu-page-component',
    template: `
    <ul class="menu">
        <li class="menu__item btn"><a href="#items">Товары</a></li>
        <li class="menu__item btn"><a href="#about">О нас</a></li>
    </ul>
    `
})
