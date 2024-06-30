import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStringCommentaryComponent } from './show-string-commentary.component';

describe('ShowStringCommentaryComponent', () => {
  let component: ShowStringCommentaryComponent;
  let fixture: ComponentFixture<ShowStringCommentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowStringCommentaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowStringCommentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
