import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicPageModule } from 'ionic-angular';


// custom imports
import { Page1Page } from './page1';
import { LaPlayerModule } from '../../components/player/la-player.module';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        LaPlayerModule,
        IonicPageModule.forChild(Page1Page)
    ],
    declarations: [
        Page1Page
    ],
    entryComponents: [
        Page1Page
    ]
})
export class Page1PageModule { }