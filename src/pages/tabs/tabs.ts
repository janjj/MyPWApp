import {Component} from '@angular/core';

import {ContactPage} from '../contact/contact';
import {HomePage} from '../home/home';

@Component({
    templateUrl: 'tabs.html'
})
export class TabsPage {

    tab1Root = ContactPage;
    tab2Root = HomePage;

    constructor() {

    }
}
