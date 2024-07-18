import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfChildRoadToDeleteAndUpdateComponent } from './list-of-child-road-to-delete-and-update.component';

describe('ListOfChildRoadToDeleteAndUpdateComponent', () => {
  let component: ListOfChildRoadToDeleteAndUpdateComponent;
  let fixture: ComponentFixture<ListOfChildRoadToDeleteAndUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfChildRoadToDeleteAndUpdateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfChildRoadToDeleteAndUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
