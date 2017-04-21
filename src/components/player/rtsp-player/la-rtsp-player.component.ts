import { Component } from '@angular/core';


// custom imports
import WSPlayer from './assets/js/rtsp_player';


@Component({
    selector: 'la-rtsp-player',
    templateUrl: 'la-rtsp-player.html'
})
export class LaRTSPlayerComponent {
    private wsPlayer: any;


    constructor() {
    }

    private start() {
        this.wsPlayer = new WSPlayer('video1234', {socket: 'ws://' + 'blabla', url: 'rtsp://127.0.0.1/', type: 'rtsp'});
    }


}