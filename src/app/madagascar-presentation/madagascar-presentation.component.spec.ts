import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadagascarPresentationComponent } from './madagascar-presentation.component';

describe('MadagascarPresentationComponent', () => {
  let component: MadagascarPresentationComponent;
  let fixture: ComponentFixture<MadagascarPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MadagascarPresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MadagascarPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
