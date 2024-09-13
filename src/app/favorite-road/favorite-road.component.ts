import { Component, OnInit } from '@angular/core';
import { child_road_list } from '../../simple_animation/animation';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-favorite-road',
  standalone: true,
  imports: [NgFor],
  templateUrl: './favorite-road.component.html',
  styleUrl: './favorite-road.component.css'
})
export class FavoriteRoadComponent implements OnInit {
  value_to_show:child_road_list[] = [];
  constructor(private http : HttpClient) {}   
  ngOnInit(): void {
    this.http.get<{data : child_road_list[]}>("http://localhost:5000/get_all/favorite_road").subscribe((a)=> {
      for(let i of a.data) {
        this.value_to_show.push(i)
      }
    })
  }


}
