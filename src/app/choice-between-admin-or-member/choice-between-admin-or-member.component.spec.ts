import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceBetweenAdminOrMemberComponent } from './choice-between-admin-or-member.component';

describe('ChoiceBetweenAdminOrMemberComponent', () => {
  let component: ChoiceBetweenAdminOrMemberComponent;
  let fixture: ComponentFixture<ChoiceBetweenAdminOrMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChoiceBetweenAdminOrMemberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoiceBetweenAdminOrMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
