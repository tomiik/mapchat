import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputMutter: string = '';
  inputTime: number = 0;
  inputLongitude: number = 0;
  inputLatitude: number = 0;
  inputAccuracy: number = 0;
  position;
  items: FirebaseListObservable<any>;

  constructor(af: AngularFire) {
    this.items = af.database.list('/mutters');
    navigator.geolocation.getCurrentPosition(position => this.setPosition(position));
  }
  setPosition(position){
    this.position = position;
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
    this.inputLongitude = this.position.coords.longitude;
    this.inputLatitude = this.position.coords.latitude;
    this.inputAccuracy = this.position.coords.accuracy;

    if ( this.inputMutter !== '') {
      this.items.push(
        {
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
