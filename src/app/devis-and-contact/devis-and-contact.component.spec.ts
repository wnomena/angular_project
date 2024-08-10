import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevisAndContactComponent } from './devis-and-contact.component';

describe('DevisAndContactComponent', () => {
  let component: DevisAndContactComponent;
  let fixture: ComponentFixture<DevisAndContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DevisAndContactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevisAndContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
