import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { child_road_list, fetch_clild_road_2 } from '../../simple_animation/animation';
import { NgFor } from '@angular/common';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';

@Component({
  selector: 'app-text-component-for-child-road',
  standalone: true,
  imports: [NgFor,InternalFooterComponent],
  templateUrl: './text-component-for-child-road.component.html',
  styleUrl: './text-component-for-child-road.component.css'
})
export class TextComponentForChildRoadComponent implements OnInit {
  value_to_show: child_road_list | undefined
  constructor(private http : HttpClient,private useParams : ActivatedRoute) {}
  ngOnInit(): void {
    this.http.get<fetch_clild_road_2>(`http://localhost:5000/public_get/one_road/${this.useParams.snapshot.paramMap.get("name")}`).subscribe((res)=> {
      console.log(res.data)
      this.value_to_show = res.data
      let i:string;
      console.log(this.value_to_show?.period)
    })
  }
}
