import { Component } from '@angular/core';
import { LoginSubComponentComponent } from '../login-sub-component/login-sub-component.component';

@Component({
  selector: 'app-login-and-subscription',
  standalone: true,
  imports: [LoginSubComponentComponent],
  templateUrl: './login-and-subscription.component.html',
  styleUrl: './login-and-subscription.component.css'
})
export class LoginAndSubscriptionComponent {

}
