import { NgModule } from '@angular/core';
import { IonicModule, IonicPageModule } from 'ionic-angular';


// custom imports
import { MainPage } from './main';


@NgModule({
    imports: [ IonicModule, IonicPageModule.forChild(MainPage) ],
    declarations: [ MainPage ],
    entryComponents: [
        MainPage
    ]
})
export class MainPageModule { }