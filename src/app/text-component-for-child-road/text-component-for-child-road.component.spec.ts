import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextComponentForChildRoadComponent } from './text-component-for-child-road.component';

describe('TextComponentForChildRoadComponent', () => {
  let component: TextComponentForChildRoadComponent;
  let fixture: ComponentFixture<TextComponentForChildRoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextComponentForChildRoadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextComponentForChildRoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
