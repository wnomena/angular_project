import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndUpdateParentRoadComponent } from './add-and-update-parent-road.component';

describe('AddAndUpdateParentRoadComponent', () => {
  let component: AddAndUpdateParentRoadComponent;
  let fixture: ComponentFixture<AddAndUpdateParentRoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAndUpdateParentRoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAndUpdateParentRoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
