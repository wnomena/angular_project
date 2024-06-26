import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllParentRoadComponent } from './get-all-parent-road.component';

describe('GetAllParentRoadComponent', () => {
  let component: GetAllParentRoadComponent;
  let fixture: ComponentFixture<GetAllParentRoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllParentRoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllParentRoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
