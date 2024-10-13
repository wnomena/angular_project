import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { child_road_list, fetch_clild_road_2 } from '../../simple_animation/animation';
import { NgFor } from '@angular/common';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-text-component-for-child-road',
  standalone: true,
  imports: [NgFor,InternalFooterComponent],
  templateUrl: './text-component-for-child-road.component.html',
  styleUrl: './text-component-for-child-road.component.css'
})
export class TextComponentForChildRoadComponent implements OnInit {
  value_to_show: child_road_list[] | undefined
  constructor(private http : HttpService,private useParams : ActivatedRoute) {}
  ngOnInit(): void {
    this.http.get_some_child_road(this.useParams.snapshot.paramMap.get("name")).subscribe((res)=> {
      this.value_to_show = res.data
      let i:string;
    })
  }
}
