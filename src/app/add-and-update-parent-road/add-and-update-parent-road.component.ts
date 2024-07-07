import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { HoverForMenuPcDirective } from '../hover-for-menu-pc.directive';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SocketCOnfig } from '../web-socket/injectable';
// import { FormData, parent_road_list } from '../../simple_animation/animation';

@Component({
  selector: 'app-add-and-update-parent-road',
  standalone: true,
  imports: [HoverForMenuPcDirective],
  templateUrl: './add-and-update-parent-road.component.html',
  styleUrl: './add-and-update-parent-road.component.css'
})
export class AddAndUpdateParentRoadComponent implements OnInit{
  constructor(private http : HttpClient,@Inject(SocketCOnfig) private SocketConfig : SocketCOnfig) {}
  ngOnInit(): void {
    this.SocketConfig.socket.connect("http://localhost:5000",{path : "/"})
  }

  title:String = "Ajout de nouveau circuit parent"
  form_data = new FileReader()
  async validate_road(nom : string,confort : string,prix : string,difficult : string,period_b:string,period_e:string,img:HTMLInputElement,desc:string) {
    console.log(img.files ? img.files[0] : undefined)
    this.form_data.onload = (e) => {
      console.log(e);
      
      let body = {
        name: nom,
        about_all_road : desc,
        price : prix,
        presentation_image : e ? JSON.stringify(e.target?.result) : undefined,
        difficulty : difficult,
        period : `${period_b} ${period_e}`
      }
      // const headers = new HttpHeaders({
      //   'Content-Type': 'application/json',
      // });
      console.log(body)
      // this.http.post("http://localhost:5000/utilisateurs/add_avant_post/by_user",body).subscribe(request =>{console.log(request)})
      new Promise(resolve=>{
        resolve(this.SocketConfig.socket.emit("connection",body))
      }).then((a)=>{
        console.log(a)
      })
    }
    if(img.files) this.form_data.readAsDataURL(img.files[0])
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
