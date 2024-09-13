import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewMemberByAdminComponent } from './add-new-member-by-admin.component';

describe('AddNewMemberByAdminComponent', () => {
  let component: AddNewMemberByAdminComponent;
  let fixture: ComponentFixture<AddNewMemberByAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewMemberByAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewMemberByAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
