import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AgmCoreModule} from '@agm/core';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {HttpServe} from "./http.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD5DJeyJE5c7ILw7smBg73PWWNstTUBYss'
    }),
    RouterModule.forRoot([
      {
        path: '',
        component: AppComponent
      },
    ]),
    HttpClientModule
  ],
  providers: [HttpServe],
  bootstrap: [AppComponent]
})
export class AppModule { }
