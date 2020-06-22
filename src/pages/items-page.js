import { Component } from '../core/component';
//import { appItems } from '../app/app-items';

class ItemsPageComponent extends Component {
    constructor(config) {
        super(config);
    }
}

export const itemsPageComponent = new ItemsPageComponent({
    selector: 'items-page-component',
    template: `
    <div class="items">
        <h1 class="title items__item">Товары</h1>
        <app-items></app-items>
        <a href="#" class="btn">Назад</a>
    </div>
    `
})
