import { Component, OnInit } from '@angular/core';
import { member_model } from '../../simple_animation/animation';
import { NgFor } from '@angular/common';
import { HttpService } from '../http.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-member-manager',
  standalone: true,
  imports: [NgFor,RouterLink,RouterLinkActive],
  templateUrl: './member-manager.component.html',
  styleUrl: './member-manager.component.css'
})
export class MemberManagerComponent implements OnInit{
  constructor(private Fetch : HttpService,private localStorage : LocalStorageService) {}
  list_table: member_model[] | undefined
  ngOnInit(){
    
    this.Fetch.get_all_member().subscribe((e) => {
      this.list_table = [...e.data]
    })
     }
  
  deletion_of_member_by_id(member_mail:string) {
    this.Fetch.delete_one_member(member_mail,this.localStorage.getValueFormSessionStorage("id_for_admin_or_member_in_cap_sur_mada_web_site")).subscribe({next : res => location.reload(),error : err => alert(err)})
  }

}
