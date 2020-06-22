import { Component } from '../core/component';

class AppItems extends Component {
    constructor(config) {
        super(config);
        this.data = {
            name1: "Тостер",
            quantity1: 1,
            price1: 20,

            name2: "Чайник",
            quantity2: 5,
            price2: "5",

            name3: "Нож",
            quantity3: 3,
            price3: 30,
        }
    }
}

export const appItems = new AppItems({
    selector: 'app-items',
    template: `
        <div class ="goods__item">Наименование товара: {{ name1 }}; количество: {{ quantity1 }}; цена: {{ price1 }}</div>
        <div class ="goods__item">Наименование товара: {{ name2 }}; количество: {{ quantity2 }}; цена: {{ price2 }}</div>
        <div class ="goods__item">Наименование товара: {{ name3 }}; количество: {{ quantity3 }}; цена: {{ price3 }}</div>
    `
})

