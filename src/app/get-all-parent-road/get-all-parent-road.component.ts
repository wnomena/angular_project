import { NgFor } from '@angular/common';
import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fetch, parent_road_list } from '../../simple_animation/animation';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-get-all-parent-road',
  standalone: true,
  imports: [NgFor,RouterLink,RouterLinkActive],
  templateUrl: './get-all-parent-road.component.html',
  styleUrl: './get-all-parent-road.component.css'
})
export class GetAllParentRoadComponent implements OnInit{
  parent_road_list: parent_road_list[] = [];
  constructor(private http : HttpService,private HttpService : HttpService) {}
  ngOnInit() {
    // this.HttpService.Get_parent_road()
      this.http.get_all_parent_road().subscribe({next : result =>{
        for(let i of result.data) {
          this.parent_road_list?.push(i)
        }
      }})
  } 
  next(el : HTMLDivElement,e:Event) {
    el.scrollTo(el.scrollLeft + el.offsetWidth,0)
  }
  preview(el : HTMLDivElement,e : Event) {
    el.scrollTo(el.scrollLeft - el.offsetWidth,0)
  }
}
