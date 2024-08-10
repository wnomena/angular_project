import { AfterViewInit, Component, OnInit } from '@angular/core';
import { child_road_list, fetch_clild_road } from '../../simple_animation/animation';
import { NgFor } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';

@Component({
  selector: 'app-get-all-child-road-with-id',
  standalone: true,
  imports: [NgFor,InternalFooterComponent],
  templateUrl: './get-all-child-road-with-id.component.html',
  styleUrl: './get-all-child-road-with-id.component.css'
})
export class GetAllChildRoadWithIdComponent implements OnInit {
  value_to_show: child_road_list[] = []
  constructor(private http:HttpClient,private link : ActivatedRoute) {}
  ngOnInit(): void {
    console.log(this.link.snapshot.paramMap.get("id"))
    this.http.get<fetch_clild_road>(`http://localhost:5000/${this.link.snapshot.paramMap.get("id")}/public/way`).subscribe((res)=> {
      for(let i of res.data) {
        this.value_to_show.push(i)
      }
      console.log(this.value_to_show)
    })
  }
}
