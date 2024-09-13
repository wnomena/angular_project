import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuForAllMemberOrAdminActionComponent } from './menu-for-all-member-or-admin-action.component';

describe('MenuForAllMemberOrAdminActionComponent', () => {
  let component: MenuForAllMemberOrAdminActionComponent;
  let fixture: ComponentFixture<MenuForAllMemberOrAdminActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuForAllMemberOrAdminActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuForAllMemberOrAdminActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
