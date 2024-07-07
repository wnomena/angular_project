import { Component, OnInit } from '@angular/core';
import { fetch, parent_road_list } from '../../simple_animation/animation';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-list-of-parent-road-update-and-delete',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-of-parent-road-update-and-delete.component.html',
  styleUrl: './list-of-parent-road-update-and-delete.component.css'
})
export class ListOfParentRoadUpdateAndDeleteComponent implements OnInit {
  constructor(private http:HttpClient){}
  parent_road_list: parent_road_list[] | undefined
  ngOnInit(): void {
      this.http.get<fetch>("http://localhost:5000/get_all/parent_circuit").subscribe((parent_road)=>{
        console.log(parent_road.data)
        this.parent_road_list = parent_road.data
      })
  }
}
