import { Component, OnInit } from '@angular/core';
import { bool } from '../../simple_animation/animation';
import { HttpClient } from '@angular/common/http';
import { RedirectCommand, Route, Router } from '@angular/router';

@Component({
  selector: 'app-login-sub-component',
  standalone: true,
  imports: [],
  templateUrl: './login-sub-component.component.html',
  styleUrl: './login-sub-component.component.css'
})
export class LoginSubComponentComponent implements OnInit {
  private bool : number = bool[0]
  constructor(private http: HttpClient,private router : Router) {}
  ngOnInit(): void {
     let verfi : string | null = localStorage.getItem("id")
     if(verfi !== null) RedirectCommand
  }
  validate(email : string, pass : string, e : Event):void {
      if(email.length <= 2 || email.length <= 2) {
        console.log("peut être vide")
        e.preventDefault()
      }else {
        console.log({email : email, password : pass})
        if(bool[bool.length - 1] == 0) {
          this.http.post<{message : string}>("http://localhost:5000/login/login_member",{ mail : email, mot_de_passe : pass}).subscribe((a)=> {
            if(a.message == "Connexion reussi") this.bool == 0 ? this.router.navigate(["/"]) : this.router.navigate(["/"])
            else console.log("tsy mande")
          })
        }
        else console.log("admin")
        e.preventDefault()
      }
  }
 }
// mbola tsy ay