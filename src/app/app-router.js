import { menuPageComponent as menu } from '../pages/menu-page';
import { itemsPageComponent as itemsPage } from '../pages/items-page';
import { aboutPageComponent as aboutPage } from '../pages/about-page';
import { notFoundPageComponent as notFound } from '../pages/notFound-page';

export const routes = {
    '': menu, // 'путь навигации': 'страница'
    'items': itemsPage,
    'about': aboutPage,
    'notFound': notFound
}