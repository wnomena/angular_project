import { Component, OnInit } from '@angular/core';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { bool } from '../../simple_animation/animation';

@Component({
  selector: 'app-pass-component-for-subsxription',
  standalone: true,
  imports: [InternalFooterComponent],
  templateUrl: './pass-component-for-subsxription.component.html',
  styleUrl: './pass-component-for-subsxription.component.css'
})
export class PassComponentForSubsxriptionComponent implements OnInit {
  err : string | undefined;
  bool : number = bool[bool.length - 1]
  constructor(private params : ActivatedRoute,private router : Router,private http : HttpClient) {}
  ngOnInit(): void {
    if(!this.params.snapshot.paramMap.get("complet_name") || !this.params.snapshot.paramMap.get("mail")) this.router.navigate(["login/subscription/subscription"]) 
  }
  validate(mot_de_passe:string, confirmation : string,e : Event) {
    if(!mot_de_passe || !confirmation) {
        this.err = "required field"
    }else if(mot_de_passe !== confirmation){
        this.err = "incosistent passwords"
    }else if(mot_de_passe === confirmation) {
      if(this.bool == 1) {
        this.http.post<{message : string}>("http://localhost:5000/utilisateurs/Login_and_subscription_and_log_out/subsscription",{mail : this.params.snapshot.paramMap.get("mail"), nom_complet : this.params.snapshot.paramMap.get("complet_name"),mot_de_passe : mot_de_passe}).subscribe({next : a => {
          this.err = a.message
          this.router.navigate(["login/subscription/login"])
        },
        error : error => this.err = error.error.re
      })
      } else {
        this.http.post<{message : string}>("http://localhost:5000/subscription_member",{mail : this.params.snapshot.paramMap.get("mail"), nom_complet : this.params.snapshot.paramMap.get("complet_name"),mot_de_passe : mot_de_passe}).subscribe({next : a => {
          this.err = a.message
          this.router.navigate(["login/subscription/login"])
        },
        error : error => this.err = error.error.re
      })
      }
    }
  }

}
