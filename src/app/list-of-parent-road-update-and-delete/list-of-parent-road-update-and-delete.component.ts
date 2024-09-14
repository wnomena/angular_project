import { Component, OnInit } from '@angular/core';
import { confirmation_deletion, fetch, parent_road_list } from '../../simple_animation/animation';
import { HttpClient } from '@angular/common/http';
import { NgFor } from '@angular/common';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-parent-road-update-and-delete',
  standalone: true,
  imports: [NgFor,InternalFooterComponent],
  templateUrl: './list-of-parent-road-update-and-delete.component.html',
  styleUrl: './list-of-parent-road-update-and-delete.component.css'
})
export class ListOfParentRoadUpdateAndDeleteComponent implements OnInit {
  constructor(private http:HttpClient,private navigate2 : Router){}
  parent_road: parent_road_list[] = []
  template : confirmation_deletion = { display : false, value : 0}
  ngOnInit(): void {
    this.http.get<fetch>("http://localhost:5000/get_all/parent_circuit").subscribe((a)=> {
      for(let i of a.data) {
        this.parent_road.push(i)
      }
    })
    console.log(this.template)
  }
  navigate(id : Number) {
    this.navigate2.navigate([`admin/home/update/parent-road/${id}`])
  }
  delete_road(a:Number) {
    this.template = {display : true,value : a }
    
    // this.http.delete(`http://localhost:5000/utilisateurs/${localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site")}/user/deleter/${a}`).subscribe({next : a => console.log(a)})
  }
  modification_road(a:Number) {
    this.navigate2.navigate([`admin/home/update/parent-road/${a}`])
  }
  next(a : Number) {
    this.navigate2.navigate([`admin/home/list-of-child/${a}`])
  }
  send_api() {
    this.http.delete(`http://localhost:5000/utilisateurs/${localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site")}/user/deleter/${this.template.value}`).subscribe({next : a => console.log(a)})
  }
}
