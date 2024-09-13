import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { child_road_list, fetch_clild_road, fetch_clild_road_2, inversed_month } from '../../simple_animation/animation';
import { HttpClient } from '@angular/common/http';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';

@Component({
  selector: 'app-add-and-update-child-road',
  standalone: true,
  imports: [InternalFooterComponent],
  templateUrl: './add-and-update-child-road.component.html',
  styleUrl: './add-and-update-child-road.component.css'
})
export class AddAndUpdateChildRoadComponent implements OnInit {
  title:String = "Ajout de circuit enfant"
  value_to_show:child_road_list | undefined;
  constructor(private link : ActivatedRoute,private http : HttpClient,private router : Router) {}
  ngOnInit(): void {
    if(this.link.snapshot.paramMap.get("name") == "0") {
    }else {
      this.title = "Modification d'une route enfant"
      this.http.get<fetch_clild_road_2>(`http://localhost:5000/public_get/one_road/${this.link.snapshot.paramMap.get("name")}`).subscribe(result=>{
        this.value_to_show = result.data
        //impossible de convertir certaines valuers selon angular, a revoir demain.

      })
    }
  }
  retour() {
    this.router.navigate(["admin/home/list-of-parent"])
  }
}
