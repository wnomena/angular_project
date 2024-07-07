import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfParentRoadUpdateAndDeleteComponent } from './list-of-parent-road-update-and-delete.component';

describe('ListOfParentRoadUpdateAndDeleteComponent', () => {
  let component: ListOfParentRoadUpdateAndDeleteComponent;
  let fixture: ComponentFixture<ListOfParentRoadUpdateAndDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfParentRoadUpdateAndDeleteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfParentRoadUpdateAndDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
