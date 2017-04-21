import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicPageModule } from 'ionic-angular';


// custom imports
import { Page5Page } from './page5';
import { LaPlayerModule } from '../../components/player/la-player.module';


@NgModule({
    imports: [
        CommonModule,
        IonicModule,
        LaPlayerModule,
        IonicPageModule.forChild(Page5Page)
    ],
    declarations: [
        Page5Page
    ],
    entryComponents: [
        Page5Page
    ]
})
export class Page5PageModule { }