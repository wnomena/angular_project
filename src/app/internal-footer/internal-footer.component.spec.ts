import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InternalFooterComponent } from './internal-footer.component';

describe('InternalFooterComponent', () => {
  let component: InternalFooterComponent;
  let fixture: ComponentFixture<InternalFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InternalFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InternalFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
