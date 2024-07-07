import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../app.component';
import { AddAndUpdateParentRoadComponent } from '../add-and-update-parent-road/add-and-update-parent-road.component';
import { SocketIoConfig, SocketIoModule } from 'ngx-socket-io';
import { BrowserModule } from '@angular/platform-browser';


const config : SocketIoConfig = {url : "http://localhost:5000",options : {}}
@NgModule({
  declarations: [AddAndUpdateParentRoadComponent],
  imports: [
    CommonModule,
    BrowserModule,
    SocketIoModule.forRoot(config)
  ]
})
export class WebSocketModule { }
