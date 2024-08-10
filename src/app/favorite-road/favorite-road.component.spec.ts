import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteRoadComponent } from './favorite-road.component';

describe('FavoriteRoadComponent', () => {
  let component: FavoriteRoadComponent;
  let fixture: ComponentFixture<FavoriteRoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavoriteRoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavoriteRoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
