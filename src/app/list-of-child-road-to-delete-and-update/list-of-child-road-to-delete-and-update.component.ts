import { Component, OnInit } from '@angular/core';
import { child_road_list, fetch_clild_road } from '../../simple_animation/animation';
import { NgFor } from '@angular/common';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-list-of-child-road-to-delete-and-update',
  standalone: true,
  imports: [NgFor,InternalFooterComponent],
  templateUrl: './list-of-child-road-to-delete-and-update.component.html',
  styleUrl: './list-of-child-road-to-delete-and-update.component.css'
})
export class ListOfChildRoadToDeleteAndUpdateComponent implements OnInit {
  constructor(private avtivated : ActivatedRoute,private http : HttpClient) {}
  img : String | undefined;
  child_road_list: child_road_list[] = [];
  ngOnInit(): void {
    // console.log(this.avtivated.snapshot.paramMap.get("id"))
    this.http.get<fetch_clild_road>(`http://localhost:5000/${this.avtivated.snapshot.paramMap.get("id")}/public/way`).subscribe(value=>{
      console.log(value.data)
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
}
