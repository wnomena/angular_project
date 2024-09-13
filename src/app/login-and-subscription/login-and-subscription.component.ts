import { Component, OnInit } from '@angular/core';
import { LoginSubComponentComponent } from '../login-sub-component/login-sub-component.component';
import { bool } from '../../simple_animation/animation';
import { InternalFooterComponent } from '../internal-footer/internal-footer.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-and-subscription',
  standalone: true,
  imports: [LoginSubComponentComponent,InternalFooterComponent],
  templateUrl: './login-and-subscription.component.html',
  styleUrl: './login-and-subscription.component.css'
})
export class LoginAndSubscriptionComponent {
}
