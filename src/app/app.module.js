import { Module } from '../core/module';
import { appComponent } from './app.component';
import { appHeader} from './app-header';
import { appFooter} from './app-footer';
import { routes } from './app-router';
import { menuPageComponent } from '../pages/menu-page';
import { appItems } from './app-items';

class AppModule extends Module {
    constructor(config) {
        super(config);
    }
}


export const appModule = new AppModule({
        components: [
            appHeader,
            appFooter
        ],
        routes: routes,
        parentComponent: appComponent,
        subComponents: [
            appItems
        ]
})