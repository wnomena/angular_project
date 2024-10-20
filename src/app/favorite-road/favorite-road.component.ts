import { Component, OnInit } from '@angular/core';
import { child_road_list } from '../../simple_animation/animation';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-favorite-road',
  standalone: true,
  imports: [NgFor,RouterLink,RouterLinkActive],
  templateUrl: './favorite-road.component.html',
  styleUrl: './favorite-road.component.css'
})
export class FavoriteRoadComponent implements OnInit {
  value_to_show:child_road_list[] = [];
  constructor(private http : HttpService) {}   
  ngOnInit(): void {
    this.http.get_all_favorite().subscribe((a)=> {
      if(typeof a.data == typeof child_road_list) for(let i of a.data) {
        this.value_to_show.push(i)
      }
    })
  }


}
