import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { IonicErrorHandler, IonicApp, IonicModule } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


// custom imports
import { MyApp } from './app.component';


// custom modules
import { LATouchModule } from '../directives/drag-and-drop/la-touch.module';


// custom providers


@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule,
        HttpModule,
        LATouchModule,
        IonicModule.forRoot(MyApp, {
            preloadModules: true
        })
    ],
    bootstrap: [
        IonicApp
    ],
    entryComponents: [
        MyApp
    ],
    providers: [
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        StatusBar,
        SplashScreen
    ]
})
export class AppModule {}