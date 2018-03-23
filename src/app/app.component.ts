import { NgModule, Component } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import {HttpServe} from "./http.service";
import { saveAs } from 'file-saver/FileSaver';

import 'rxjs/Rx';
@Component({
  selector: 'app-root',
  styles: [`
    agm-map {
      height: 640px;
    }
  `],
  templateUrl: './appComponent.html',
  providers:[HttpServe]
})
export class AppComponent {
  lat = 51.678418;
  lng = 7.809007;
  newLat= this.lat;
  newLng= this.lng;
  zoom= 8;
  constructor(private http: HttpServe){

  }
  changelat(event) {
    this.newLat = event.lat;
    this.newLng = event.lng;
  }

  zoomChange(event) {
  this.zoom = event;
  }
  getMap() {
    const data = {
      center:{
        lat: this.newLat,
        lng: this.newLng
      },
      zoom:this.zoom
    };
    this.http.getStatic(data).subscribe(  ( data: any) => {
      saveAs(data, "OfflineMap.png");
  });
  }

}
