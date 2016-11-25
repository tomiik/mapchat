import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
//import { Subject } from 'rxjs/Subject';
//import { SebmGoogleMapInfoWindow } from 'angular2-google-maps/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputMutter: string = '';
  inputTime: number = 0;
  inputLongitude: number = 7.809007;
  inputLatitude: number = 51.678418;
  inputAccuracy: number = 0;
  position;
  items: FirebaseListObservable<any>;
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor(af: AngularFire) {
    this.items = af.database.list('/mutters');
    navigator.geolocation.getCurrentPosition(position => this.setPosition(position));
  }
  setPosition(position){
    this.position = position;
    this.inputLongitude = this.position.coords.longitude;
    this.inputLatitude = this.position.coords.latitude;
    this.inputAccuracy = this.position.coords.accuracy;

    console.log('setPosition()');
  }
  delete(key: string) {
    this.items.remove(key);
  }
  enterkey() {
    this.save();
  }
  save(){
    this.addMutter();
  }
  addMutter() {
    this.inputTime = Date.now();

    if ( this.inputMutter !== '') {
      this.items.push(
        {
          username: 'USERNAME',
          mutter: this.inputMutter,
          time: this.inputTime,
          position: {
            longitude: this.inputLongitude,
            latitude: this.inputLatitude,
            accuracy: this.inputAccuracy,
          }
    })};
    this.inputMutter = '';
  }
}
