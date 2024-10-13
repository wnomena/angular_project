import { Component, OnInit } from '@angular/core';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';
import { HttpClient } from '@angular/common/http';
import { bool } from '../../simple_animation/animation';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { LowerCasePipe } from '@angular/common';
import { HttpService } from '../http.service';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [InternalFooterComponent,RouterLink,RouterLinkActive],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})  
export class ChangePasswordComponent implements OnInit{
  constructor(private http : HttpService,private router : Router,private localStorage : LocalStorageService) {}
  alert:string | undefined;
  err : string | undefined
  ngOnInit(): void {
    let a = this.localStorage.getValueFormSessionStorage("id_for_admin_or_member_in_cap_sur_mada_web_site")
    if(this.localStorage.getValueFormSessionStorage("id_for_admin_or_member_in_cap_sur_mada_web_site") == null || this.localStorage.getValueFormSessionStorage(a !== null ? a : "") == null) {
      this.router.navigate(["dist/first_project_with_angular/browser/"])
    }
  }
  validate_and_send(a:String,b:String,c:String,e:Event) {
    this.localStorage.removeValueFormSessionStorage("-1")
    console.log(a,b,c)
    let i :String[] =  [a,b,c]
    for(let e of i) if(e == "" || e == undefined) this.alert = "Veuillez vérifier les informations que vous avez saisi"
    if(b !== c) this.alert = "Les nouveaux mots de passe ne sont pas identiques"
    else if( b == c) {
      let mail = this.localStorage.getValueFormSessionStorage("id_for_admin_or_member_in_cap_sur_mada_web_site") 
      let body = {
        old_pass : a,
        new_pass : b
      }
      this.http.update_member_password(mail,body).subscribe({next : res => {
        console.log(res)
      },error : err => {
        console.log(err)
      }})
      }
    }
    
  }