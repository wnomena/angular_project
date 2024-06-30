import { Component, OnInit } from '@angular/core';
import { commentary_model } from '../../simple_animation/animation';
import { NgFor } from '@angular/common';
import { ShowStringCommentaryComponent } from '../show-string-commentary/show-string-commentary.component';

@Component({
  selector: 'app-commentary',
  standalone: true,
  imports:  [NgFor,ShowStringCommentaryComponent],
  templateUrl: './commentary.component.html',
  styleUrl: './commentary.component.css'
})
export class CommentaryComponent implements OnInit {
  display:String = "none"
  top : Number | undefined
  list_table : commentary_model[] | undefined
  ngOnInit(): void {
    this.list_table = [{_id : "1", id : 1, mail : "wnomena58@gmail.com" , string_commentary : "ras", created : "today"}]
  }
  assignment_value(e:MouseEvent) {
     console.log(e.pageY)
     console.log(window.screen.height)
  }
}
