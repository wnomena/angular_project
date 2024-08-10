import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeImageComponent } from './some-image.component';

describe('SomeImageComponent', () => {
  let component: SomeImageComponent;
  let fixture: ComponentFixture<SomeImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SomeImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SomeImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
