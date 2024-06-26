import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAndUpdateChildRoadComponent } from './add-and-update-child-road.component';

describe('AddAndUpdateChildRoadComponent', () => {
  let component: AddAndUpdateChildRoadComponent;
  let fixture: ComponentFixture<AddAndUpdateChildRoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddAndUpdateChildRoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAndUpdateChildRoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
