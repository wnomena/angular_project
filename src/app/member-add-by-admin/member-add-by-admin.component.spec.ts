import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberAddByAdminComponent } from './member-add-by-admin.component';

describe('MemberAddByAdminComponent', () => {
  let component: MemberAddByAdminComponent;
  let fixture: ComponentFixture<MemberAddByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MemberAddByAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MemberAddByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
