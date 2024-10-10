import { Component, OnInit } from '@angular/core';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';
import { ActivatedRoute, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { bool } from '../../simple_animation/animation';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-pass-component-for-subsxription',
  standalone: true,
  imports: [InternalFooterComponent,RouterLink,RouterLinkActive],
  templateUrl: './pass-component-for-subsxription.component.html',
  styleUrl: './pass-component-for-subsxription.component.css'
})
export class PassComponentForSubsxriptionComponent implements OnInit {
  err : string | undefined;
  bool : number = bool[bool.length - 1]
  constructor(private params : ActivatedRoute,private router : Router,private http : HttpService) {}
  ngOnInit(): void {
    if(!this.params.snapshot.paramMap.get("complet_name") || !this.params.snapshot.paramMap.get("mail")) this.router.navigate(["login/subscription/subscription"]) 
  }
  validate(mot_de_passe:string, confirmation : string,e : Event) {
    if(!mot_de_passe || !confirmation) {
        this.err = "required field"
    }else if(mot_de_passe !== confirmation){
        this.err = "incosistent passwords"
    }else if(mot_de_passe === confirmation) {
       this.http.subscription_method({mail : this.params.snapshot.paramMap.get("mail"), nom_complet : this.params.snapshot.paramMap.get("complet_name"),mot_de_passe : mot_de_passe}).subscribe({next : a => {
          this.err = a.message
          this.router.navigate(["dist/first_project_with_angular/browser/login/subscription/login"])
        },
        error : error => this.err = error.error.re
      })
      // this.err = "Please contact our team"
    }
  }
}
