import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';


@Injectable()
export class LATouchService {

    public touchstart() {
        if (1 === 1) {
        } else {
            Observable
                .interval(300)
                .take(1)
                .subscribe(() => {
                    console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
                });
        }
    }
}