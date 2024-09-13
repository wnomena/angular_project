import { Component, OnInit } from '@angular/core';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';
import { HttpClient } from '@angular/common/http';
import { bool } from '../../simple_animation/animation';
import { Router } from '@angular/router';
import { LowerCasePipe } from '@angular/common';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [InternalFooterComponent],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})  
export class ChangePasswordComponent implements OnInit{
  constructor(private http : HttpClient,private router : Router) {}
  alert:string | undefined;
  err : string | undefined
  ngOnInit(): void {
    let a = localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site")
    if(localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site") == null || localStorage.getItem(a !== null ? a : "") == null) {
      this.router.navigate(["/"])
    }
  }
  validate_and_send(a:String,b:String,c:String,e:Event) {
    let i :String[] =  [a,b,c]
    for(let e of i) if(e == "" || e == undefined) this.alert = "Veuillez vérifier les informations que vous avez saisi"
    if(b !== c) this.alert = "Les nouveaux mots de passe ne sont pas identiques"
    else if( b == c) {
      let mail = localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site") !== null ? localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site") : ""
        if(localStorage.getItem(mail !== null ? mail : "") == "0") this.http.put(`http://localhost:5000/utilisateurs/update/password/member/${localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site")}`,{old_pass : a,new_pass : b}).subscribe({next : a => {
          console.log(a)
          let ze:string | null =  localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site") !== null ? localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site") : null
          localStorage.removeItem(ze !== null ? ze : "" )
          localStorage.removeItem("id_for_admin_or_member_in_cap_sur_mada_web_site")
          this.router.navigate(["login/subscription/login"])
        },
          error : error => {
            console.log(error)
            this.err =  error.error.message
            e.preventDefault()
          }
        })
        else if(localStorage.getItem(mail !== null ? mail : "") == "1") this.http.put(`http://localhost:5000/utilisateurs/update/password/${localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site")}`,{old_pass : a,new_pass : b}).subscribe({next : a => {
          console.log(a)
          let ze:string | null =  localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site") !== null ? localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site") : null
          localStorage.removeItem(ze !== null ? ze : "" )
          localStorage.removeItem("id_for_admin_or_member_in_cap_sur_mada_web_site")
          this.router.navigate(["login/subscription/login"])
        },
          error : error => {
            this.err =  error.error.message
            e.preventDefault()
          }
        })
      }
    }
    
  }
  // /utilisateurs/update/password/member/:client_mail_for_updating