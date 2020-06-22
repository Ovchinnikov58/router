import { Component } from '../core/component';

class AboutPageComponent extends Component {
    constructor(config) {
        super(config);
    }
}

export const aboutPageComponent = new AboutPageComponent({
    selector: 'about-page-component',
    template: `
    <div class="about">
        <h1 class="about__item title">О нас!</h1>
        <div class="about__item about__text">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae, magni quam perspiciatis 
            fugiat mollitia cupiditate obcaecati temporibus neque dolorum deleniti porro. Ducimus quibusdam doloribus 
            maiores vitae perferendis amet voluptatum, eum deserunt debitis odio consectetur placeat doloremque esse, 
            cumque vel sunt provident magnam dolores dolorem enim laborum ipsum aliquid. Ea, qui.
        </div>
        <a href="#" class="about__item btn">Назад</a>
    </div>
    `
})
