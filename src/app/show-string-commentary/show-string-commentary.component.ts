import { NgIf, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-string-commentary',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './show-string-commentary.component.html',
  styleUrl: './show-string-commentary.component.css'
})
export class ShowStringCommentaryComponent implements OnInit {
  @Input() string : String  = ""

  ngOnInit(): void {
  }
}
