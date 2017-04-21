import { NgModule } from '@angular/core';


// custom imports
import { LATouchService } from './la-touch.service';


@NgModule({
    providers: [ LATouchService ]
})
export class LATouchModule { }