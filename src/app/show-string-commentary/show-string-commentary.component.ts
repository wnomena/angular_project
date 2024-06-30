import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-show-string-commentary',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './show-string-commentary.component.html',
  styleUrl: './show-string-commentary.component.css'
})
export class ShowStringCommentaryComponent {
  @Input() display : "none" | "flex" | undefined;
  @Input() content : String | undefined;
  @Input() top : String | undefined;
  @Input() left : String | undefined;
}
