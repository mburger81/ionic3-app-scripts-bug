import { Component, ViewChild } from '@angular/core';
import { IonicPage, Nav } from 'ionic-angular';


// custom providers


@IonicPage()
@Component({
    templateUrl: 'main.html'
})
export class MainPage {
    @ViewChild(Nav) nav: Nav;
    public dashboards: any[];


    constructor() {
    }

    ionViewDidLoad() {
        this.nav.setRoot('Page1Page');
    }


    goToPage(pageName :string) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(pageName);
    }
}
