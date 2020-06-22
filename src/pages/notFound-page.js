import { Component } from '../core/component';

class NotFoundPageComponent extends Component {
    constructor(config) {
        super(config);
    }
}

export const notFoundPageComponent = new NotFoundPageComponent({
    selector: 'notfound-page-component',
    template: `
    <div class="not-found">
        <h1 class="title ">Cтранца не найдена</h1>
        <a href="#" class="btn not-found__item">На главную</a>
    </div>
    `
})
