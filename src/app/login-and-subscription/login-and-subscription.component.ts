import { Component, OnInit } from '@angular/core';
import { LoginSubComponentComponent } from '../login-sub-component/login-sub-component.component';
import { bool } from '../../simple_animation/animation';

@Component({
  selector: 'app-login-and-subscription',
  standalone: true,
  imports: [LoginSubComponentComponent],
  templateUrl: './login-and-subscription.component.html',
  styleUrl: './login-and-subscription.component.css'
})
export class LoginAndSubscriptionComponent implements OnInit{
  ngOnInit(): void {
    console.log(bool)
  }
//0 member -- 1 admin

}
