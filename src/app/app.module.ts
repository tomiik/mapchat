import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

import { AgmCoreModule } from 'angular2-google-maps/core';


export const firebaseConfig = {
  apiKey: 'AIzaSyDWL6Tm8w2IziPpVRO0xohPEqwQw8EQhc4',
  authDomain: 'mutter-347a3.firebaseapp.com',
  databaseURL: 'https://mutter-347a3.firebaseio.com',
  storageBucket: 'mutter-347a3.appspot.com',
  messagingSenderId: '194559638524'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDUXLSkMhsn7k-rL0UOCq4-YRa1qOa0itE'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
