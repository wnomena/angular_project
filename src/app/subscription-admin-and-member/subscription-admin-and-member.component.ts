import { Component, OnInit } from '@angular/core';
import { ChoiceBetweenAdminOrMemberComponent } from '../choice-between-admin-or-member/choice-between-admin-or-member.component';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';
import { HttpClient } from '@angular/common/http';
import { bool } from '../../simple_animation/animation';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscription-admin-and-member',
  standalone: true,
  imports: [InternalFooterComponent],
  templateUrl: './subscription-admin-and-member.component.html',
  styleUrl: './subscription-admin-and-member.component.css'
})
export class SubscriptionAdminAndMemberComponent implements OnInit {
  
  err : string | undefined;
  constructor(private router : Router,private http : HttpClient) {}
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
      if( bool[0] == 0) {
        // let mail : string | null = localStorage.getItem("id_for_admin_or_member_in_cap_sur_mada_web_site")
        // let type : string | undefined = mail !== null ? mail : undefined
        let bosy = {
          mail :  mail,
          nom_complet : complet_name,

        }
        this.http.post<{message: string}>("http://localhost:5000/utilisateurs/by_admin/create/new_member",bosy).subscribe({next :a => {
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
}
