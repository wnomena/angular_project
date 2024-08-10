import { NgFor } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { model_parent_road } from '../../all_model_ts/model_parent_road';
import { HttpClient } from '@angular/common/http';
import { fetch, parent_road_list } from '../../simple_animation/animation';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-get-all-parent-road',
  standalone: true,
  imports: [NgFor,RouterLink],
  templateUrl: './get-all-parent-road.component.html',
  styleUrl: './get-all-parent-road.component.css'
})
export class GetAllParentRoadComponent implements OnInit{
  parent_road_list: parent_road_list[] = [];
  constructor(private http : HttpClient) {}
  ngOnInit() {
      this.http.get<fetch>("http://localhost:5000/get_all/parent_circuit").subscribe((result)=>{
        for(let i of result.data) {
          console.log(i)
          this.parent_road_list?.push(i)
        }
        console.log(this.parent_road_list)
      })
  }
}
