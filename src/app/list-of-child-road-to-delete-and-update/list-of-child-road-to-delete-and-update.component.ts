import { Component, OnInit } from '@angular/core';
import { child_road_list, fetch_clild_road } from '../../simple_animation/animation';
import { NgFor } from '@angular/common';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list-of-child-road-to-delete-and-update',
  standalone: true,
  imports: [NgFor,InternalFooterComponent],
  templateUrl: './list-of-child-road-to-delete-and-update.component.html',
  styleUrl: './list-of-child-road-to-delete-and-update.component.css'
})
export class ListOfChildRoadToDeleteAndUpdateComponent implements OnInit {
  constructor(private avtivated : ActivatedRoute,private http : HttpClient,private router : Router) {}
  img : String | undefined;
  child_road_list: child_road_list[] = [];
  ngOnInit(): void {
    this.http.get<fetch_clild_road>(`https://caponmada.com/${this.avtivated.snapshot.paramMap.get("id")}/public/way`).subscribe(value=>{
      for(let i = 0; i < value.data.length; i++) {
        this.child_road_list.push(value.data[i])
        if(i == 0) {
          this.img = value.data[i].presentation_image
        }
      }
    })
  }
  change_image(image:String):void {
    this.img = image
  }
  add_new() {
    this.router.navigate([`dist/first_project_with_angular/browser/admin/home/update/child-road/0/${this.avtivated.snapshot.paramMap.get("id")}`])
  }
  update(name : string) {
    this.router.navigate([`dist/first_project_with_angular/browser/admin/home/update/child-road/${name}/${this.avtivated.snapshot.paramMap.get("id")}`])
  }
}
//migere bouton de navigation pour effacement sy modification sisa fa efa vita ny design
