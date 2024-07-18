import { Component, OnInit } from '@angular/core';
import { fetch, parent_road_list } from '../../simple_animation/animation';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';

@Component({
  selector: 'app-list-of-parent-road-update-and-delete',
  standalone: true,
  imports: [NgFor,InternalFooterComponent],
  templateUrl: './list-of-parent-road-update-and-delete.component.html',
  styleUrl: './list-of-parent-road-update-and-delete.component.css'
})
export class ListOfParentRoadUpdateAndDeleteComponent implements OnInit {
  constructor(private http:HttpClient){}
  parent_road: parent_road_list[] = []
  ngOnInit(): void {
    this.http.get<fetch>("http://localhost:5000/get_all/parent_circuit").subscribe((a)=> {
      for(let i of a.data) {
        console.log(i)
        this.parent_road.push(i)
      }
    })
  }
}
