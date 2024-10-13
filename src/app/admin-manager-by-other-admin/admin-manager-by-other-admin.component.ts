import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { member_model } from '../../simple_animation/animation';
import { NgFor } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-admin-manager-by-other-admin',
  standalone: true,
  imports: [NgFor,RouterLink,RouterLinkActive],
  templateUrl: './admin-manager-by-other-admin.component.html',
  styleUrl: './admin-manager-by-other-admin.component.css'
})
export class AdminManagerByOtherAdminComponent implements OnInit {
  token_display : { display : boolean, value : String} = {display :false, value : ""}
  data : member_model[] | undefined
  constructor(private http : HttpService,private router : Router){}
  ngOnInit(): void {
    this.http.get_all_admin_all_member().subscribe((a) => {
      console.log(a)
        this.data = [...a.data]
        console.log(this.data)
    })
  }
    change_display(mail : String) {
      this.token_display = {display : true, value : mail}
    }
    deletion() {
      let body = {
        user_mail : localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site"),
        member_mail : this.token_display.value
      }
      this.http.delete_member(body.member_mail).subscribe({next : a => {
        this.router.navigate(["dist/first_project_with_angular/browser/admin/home/list-admin"])
      },
      error : err => {
        alert(err.error.message)
        this.router.navigate(["dist/first_project_with_angular/browser/admin/home/list-admin"])
      }
    })
    }
}
