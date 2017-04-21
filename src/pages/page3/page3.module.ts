import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicPageModule } from 'ionic-angular';


// custom imports
import { Page3Page } from './page3';
import { LaPlayerModule } from '../../components/player/la-player.module';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        LaPlayerModule,
        IonicPageModule.forChild(Page3Page)
    ],
    declarations: [
        Page3Page
    ],
    entryComponents: [
        Page3Page
    ]
})
export class Page3PageModule { }