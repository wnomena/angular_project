import { Component, OnInit } from '@angular/core';
import { bool } from '../../simple_animation/animation';
import { RedirectCommand, Route, Router, RouterLink } from '@angular/router';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';
import { HttpClient } from '@angular/common/http';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-login-sub-component',
  standalone: true,
  imports: [InternalFooterComponent,RouterLink],
  templateUrl: './login-sub-component.component.html',
  styleUrl: './login-sub-component.component.css'
})
export class LoginSubComponentComponent implements OnInit {
  value_show : string | undefined;
  private bool : number = bool[0]
  constructor(private http: HttpService,private router : Router) {}
  ngOnInit(): void {
    let a : string | undefined | null;
     let verfi : string | null = localStorage.getItem("-1") !== null ? localStorage.getItem("-1") : localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site") 
     if(verfi !== null) a = localStorage.getItem(verfi)
    if(a == "-1") this.router.navigate(["change_pass"])
    else if(a == "1") this.router.navigate(["admin/home/list-of-parent"])
    else if( a == "0") this.router.navigate(["/"])
  }
  validate(email : string, pass : string, e : Event):void {
      if(email.length <= 2 || email.length <= 2) {
        e.preventDefault()
      }else {
          if(bool[bool.length - 1] == 0) {
            this.http.login_member({ mail : email, mot_de_passe : pass}).subscribe({next : a => {
              if(a.message == "-1") localStorage.setItem("-1","-1")
              localStorage.setItem("id_for_admin_or_member_in_cap_sur_mada_web_site",email)
              localStorage.setItem(`${email}`,"0")
              localStorage.setItem("token",a.token)
              location.reload()
            },
            error : b => {
              this.value_show =  b.error.message
            }
          })
          }
          else {
              this.http.login_admin({ mail : email, mot_de_passe : pass}).subscribe({next : a => {
                console.log(a.message)
                localStorage.setItem("id_for_admin_or_member_in_cap_sur_mada_web_site",email)
                localStorage.setItem(`${email}`,"1")
                localStorage.setItem("token",a.token)
                location.reload()
              },
              error : b => {
                this.value_show =  b.error.message
              }
            })        
      }}
  }
 }
// mbola tsy ay