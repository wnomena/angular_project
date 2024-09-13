import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminManagerByOtherAdminComponent } from './admin-manager-by-other-admin.component';

describe('AdminManagerByOtherAdminComponent', () => {
  let component: AdminManagerByOtherAdminComponent;
  let fixture: ComponentFixture<AdminManagerByOtherAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminManagerByOtherAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminManagerByOtherAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
