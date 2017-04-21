import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicPageModule } from 'ionic-angular';


// custom imports
import { Page4Page } from './page4';
import { LaPlayerModule } from '../../components/player/la-player.module';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        LaPlayerModule,
        IonicPageModule.forChild(Page4Page)
    ],
    declarations: [
        Page4Page
    ],
    entryComponents: [
        Page4Page
    ]
})
export class Page4PageModule { }