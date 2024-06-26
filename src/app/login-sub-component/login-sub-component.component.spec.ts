import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSubComponentComponent } from './login-sub-component.component';

describe('LoginSubComponentComponent', () => {
  let component: LoginSubComponentComponent;
  let fixture: ComponentFixture<LoginSubComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginSubComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginSubComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
