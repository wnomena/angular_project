import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAndSubscriptionComponent } from './login-and-subscription.component';

describe('LoginAndSubscriptionComponent', () => {
  let component: LoginAndSubscriptionComponent;
  let fixture: ComponentFixture<LoginAndSubscriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginAndSubscriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginAndSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
