import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';


// custom imports
import { LaPlayerComponent } from './la-player.component';
import { LaRTSPlayerComponent } from './rtsp-player/la-rtsp-player.component';


@NgModule({
    imports: [ CommonModule, IonicModule ],
    declarations: [ LaPlayerComponent, LaRTSPlayerComponent ],
    exports: [ LaPlayerComponent ]
})
export class LaPlayerModule { }