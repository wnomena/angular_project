import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { HoverForMenuPcDirective } from '../hover-for-menu-pc.directive';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Month } from '../../simple_animation/animation';
import axios  from "axios"
// import { FileSystem } from "@angular/core"
// import { FormData, parent_road_list } from '../../simple_animation/animation';

@Component({
  selector: 'app-add-and-update-parent-road',
  standalone: true,
  imports: [HoverForMenuPcDirective],
  templateUrl: './add-and-update-parent-road.component.html',
  styleUrl: './add-and-update-parent-road.component.css'
})
export class AddAndUpdateParentRoadComponent{
  constructor(private http : HttpClient) {}
  title:String = "Ajout de nouveau circuit parent"
  form_data = new FormData()
  async validate_road(nom : string,confort : string,prix : string,difficult : string,period_b:string,period_e:string,img:HTMLInputElement,desc:string) {
    if(img.files){
      this.form_data.append("image",img.files[0])
    }
    let body = {
        name: nom,
        about_all_road : desc,
        price : prix,
        difficulty : difficult,
        period : `${Month(parseInt(period_b))} ${Month(parseInt(period_e))}`
      }
      this.form_data.append("body",JSON.stringify(body))
      this.form_data.forEach((e)=>{
        console.log(e)
      })
      const config = {
        method: 'POST',
        url: "http://localhost:5000/utilisateurs/add_avant_post/by_user",
        data: this.form_data,
        headers : {
          'Content-Type':'multipart/form-data',
        }
      };
      axios(config).then(a=>{console.log(a)})
      // this.http.post("http://localhost:5000/utilisateurs/add_avant_post/by_user",this.form_data,{headers : headers_http.set("Content-Type","multipart/form-data")}).subscribe((e)=> console.log(e))
    }
  }
// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { Socket } from 'ngx-socket-io';

// @Component({
//   selector: 'app-my-component',
//   templateUrl: './my-component.html',
//   styleUrls: ['./my-component.css']
// })
// export class MyComponent implements OnInit, OnDestroy {

//   constructor(private socket: Socket) { }

//   ngOnInit(): void {
//     // Establish the WebSocket connection
//     this.socket.io().connect('https://your-server-url');

//     // Handle events from the server
//     this.socket.on('message', (message: string) => {
//       console.log('Message received from server:', message);
//     });
//   }

//   ngOnDestroy(): void {
//     // Disconnect from the WebSocket server
//     this.socket.disconnect();
//   }
// }
