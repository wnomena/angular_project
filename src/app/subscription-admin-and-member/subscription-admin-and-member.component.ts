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
export class SubscriptionAdminAndMemberComponent {
  err : string | undefined;
  constructor(private router : Router) {}
  validate(complet_name :string, mail : string,e : Event) {
    let c = mail.split("@").length
    let d = complet_name.split(" ").length
    if(d > 1 && c > 1) {
      this.router.navigate([`confirmation/${complet_name}/${mail}`])
    e.preventDefault()
    }else {
      this.err = "Required field"
    }
  }
}
