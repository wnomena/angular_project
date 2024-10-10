import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { HoverForMenuPcDirective } from '../hover-for-menu-pc.directive';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inversed_month, Month, parent_road_list } from '../../simple_animation/animation';
import { ActivatedRoute, Router } from '@angular/router';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';
// import { FileSystem } from "@angular/core"
// import { FormData, parent_road_list } from '../../simple_animation/animation';

@Component({
  selector: 'app-add-and-update-parent-road',
  standalone: true,
  imports: [HoverForMenuPcDirective,InternalFooterComponent],
  templateUrl: './add-and-update-parent-road.component.html',
  styleUrl: './add-and-update-parent-road.component.css'
})
export class AddAndUpdateParentRoadComponent implements OnInit{
  value_to_show: parent_road_list | undefined
  constructor(private http : HttpClient,private router : ActivatedRoute,private redirect : Router) {}
  ngOnInit(): void {
    if(this.router.snapshot.paramMap.get("id") !== "0") {
      this.title = "Uptade road"
      this.http.get<{data : parent_road_list[]}>(`http://localhost:5000/public_get/parent_way/one_road/${this.router.snapshot.paramMap.get("id")}`).subscribe({next : a => {
        Array.from(a.data).forEach((b)=> this.value_to_show = b)
      }})
    }
  }
  title:String = "Add new Road"
  form_data = new FormData()
  // headers : HttpHeaders = new HttpHeaders().set("Content-Type","multipart/form-data")
  async validate_road(nom : string,prix : string,period_b:string,period_e:string,img:HTMLInputElement,desc:string,diff : string,confort : string) {
    if(img.files){
      this.form_data.append("image",img.files[0])
    }
    let body = {
        name: nom,
        about_all_road : desc,
        price : prix,
        period : `${Month(parseInt(period_b))} ${Month(parseInt(period_e))}`,
        difficulty : diff,
        confort : confort
      }
      this.form_data.append("body",JSON.stringify(body))
      this.modif_or_add()
    }
    modif_or_add() {
      if(this.router.snapshot.paramMap.get("id") == "0") this.http.post("https://caponmada.com/utilisateurs/add_avant_post/by_user",this.form_data).subscribe({next : a => {
        this.redirect.navigate(["dist/first_project_with_angular/browser//admin/home/list-of-parent"])
        console.log("er")
      },error : b =>  location.reload()})
      else this.http.put(`https://caponmada.com/utilisateurs/update_parent_road/by_user/${this.router.snapshot.paramMap.get("id")}`,this.form_data).subscribe((a)=> {
        this.redirect.navigate(["dist/first_project_with_angular/browser/admin/home/list-of-parent"])
      })
    }
    inversed_month2(a:string | undefined, b : number) {
     return inversed_month(a ? a.split(" ")[b] : "undefined")
    }
    retour() {
      this.redirect.navigate(["dist/first_project_with_angular/browser/admin/home/list-of-parent"])
    }
  }