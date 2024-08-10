import { Component } from '@angular/core';
import { ChoiceBetweenAdminOrMemberComponent } from '../choice-between-admin-or-member/choice-between-admin-or-member.component';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';

@Component({
  selector: 'app-subscription-admin-and-member',
  standalone: true,
  imports: [InternalFooterComponent],
  templateUrl: './subscription-admin-and-member.component.html',
  styleUrl: './subscription-admin-and-member.component.css'
})
export class SubscriptionAdminAndMemberComponent {}
