import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionAdminAndMemberComponent } from './subscription-admin-and-member.component';

describe('SubscriptionAdminAndMemberComponent', () => {
  let component: SubscriptionAdminAndMemberComponent;
  let fixture: ComponentFixture<SubscriptionAdminAndMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubscriptionAdminAndMemberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubscriptionAdminAndMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
