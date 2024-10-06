import { Component, OnInit } from '@angular/core';
import { ChoiceBetweenAdminOrMemberComponent } from '../choice-between-admin-or-member/choice-between-admin-or-member.component';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';
import { bool } from '../../simple_animation/animation';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-subscription-admin-and-member',
  standalone: true,
  imports: [InternalFooterComponent],
  templateUrl: './subscription-admin-and-member.component.html',
  styleUrl: './subscription-admin-and-member.component.css'
})
export class SubscriptionAdminAndMemberComponent implements OnInit {
  
  err : string | undefined;
  constructor(private router : Router,private http : HttpService) {}
  ngOnInit(): void {
    console.log(typeof location.href)
  }
  validate(complet_name :string, mail : string,e : Event) {
    if(location.href == "http://localhost:4200/login/subscription/subscription") {
      let c = mail.split("@").length
    let d = complet_name.split(" ").length
    if(d > 1 && c > 1) {
      this.router.navigate([`confirmation/${complet_name}/${mail}`])
    e.preventDefault()
    }else {
      this.err = "Required field"
    }
    }
    else {
        let bosy = {
          mail :  mail,
          nom_complet : complet_name,

        }
        this.http.add_new_member(bosy).subscribe({next :a => {
          this.router.navigate(["/admin/home/list-of-parent"])
          e.preventDefault()
        },
        error : err => {
          this.err = err.error.message
          e.preventDefault()
        }
      })

    }
  }
}
