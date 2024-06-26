import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { model_parent_road } from '../../all_model_ts/model_parent_road';

@Component({
  selector: 'app-get-all-parent-road',
  standalone: true,
  imports: [NgFor],
  templateUrl: './get-all-parent-road.component.html',
  styleUrl: './get-all-parent-road.component.css'
})
export class GetAllParentRoadComponent implements OnInit{
  parent_road_list: model_parent_road[] | undefined;
  ngOnInit(): void {
    
  }

}
