import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllChildRoadWithIdComponent } from './get-all-child-road-with-id.component';

describe('GetAllChildRoadWithIdComponent', () => {
  let component: GetAllChildRoadWithIdComponent;
  let fixture: ComponentFixture<GetAllChildRoadWithIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetAllChildRoadWithIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllChildRoadWithIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
