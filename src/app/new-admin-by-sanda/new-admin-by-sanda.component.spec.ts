import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewAdminBySandaComponent } from './new-admin-by-sanda.component';

describe('NewAdminBySandaComponent', () => {
  let component: NewAdminBySandaComponent;
  let fixture: ComponentFixture<NewAdminBySandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewAdminBySandaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewAdminBySandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
