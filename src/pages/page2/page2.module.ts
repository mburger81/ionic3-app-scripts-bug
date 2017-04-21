import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicPageModule } from 'ionic-angular';


// custom imports
import { Page2Page } from './page2';
import { LaPlayerModule } from '../../components/player/la-player.module';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        LaPlayerModule,
        IonicPageModule.forChild(Page2Page)
    ],
    declarations: [
        Page2Page
    ],
    entryComponents: [
        Page2Page
    ]
})
export class Page2PageModule { }