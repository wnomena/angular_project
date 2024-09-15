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
    localStorage.removeItem("-1")
    console.log(a,b,c)
    let i :String[] =  [a,b,c]
    for(let e of i) if(e == "" || e == undefined) this.alert = "Veuillez vérifier les informations que vous avez saisi"
    if(b !== c) this.alert = "Les nouveaux mots de passe ne sont pas identiques"
    else if( b == c) {
      let mail = localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site") 
      let body = {
        old_pass : a,
        new_pass : b
      }
      this.http.put(`http://localhost:5000/utilisateurs/update/password/member/${mail}/${localStorage.getItem(mail !== null? mail : "")}`,body).subscribe({next : res => {
        console.log(res)
      },error : err => {
        console.log(err)
      }})
      }
    }
    
  }