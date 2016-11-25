import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

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
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
