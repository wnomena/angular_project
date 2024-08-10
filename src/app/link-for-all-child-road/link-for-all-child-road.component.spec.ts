import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkForAllChildRoadComponent } from './link-for-all-child-road.component';

describe('LinkForAllChildRoadComponent', () => {
  let component: LinkForAllChildRoadComponent;
  let fixture: ComponentFixture<LinkForAllChildRoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinkForAllChildRoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkForAllChildRoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
