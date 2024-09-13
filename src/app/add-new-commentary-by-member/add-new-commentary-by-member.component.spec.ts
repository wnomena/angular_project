import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewCommentaryByMemberComponent } from './add-new-commentary-by-member.component';

describe('AddNewCommentaryByMemberComponent', () => {
  let component: AddNewCommentaryByMemberComponent;
  let fixture: ComponentFixture<AddNewCommentaryByMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewCommentaryByMemberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewCommentaryByMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
