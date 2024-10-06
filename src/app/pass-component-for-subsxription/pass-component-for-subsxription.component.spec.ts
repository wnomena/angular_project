// import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PassComponentForSubsxriptionComponent } from './pass-component-for-subsxription.component';

describe('PassComponentForSubsxriptionComponent', () => {
  let component: PassComponentForSubsxriptionComponent;
  let fixture: ComponentFixture<PassComponentForSubsxriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PassComponentForSubsxriptionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassComponentForSubsxriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
