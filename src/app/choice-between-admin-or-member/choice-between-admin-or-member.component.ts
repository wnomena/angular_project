import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { bool } from '../../simple_animation/animation';

@Component({
  selector: 'app-choice-between-admin-or-member',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './choice-between-admin-or-member.component.html',
  styleUrl: './choice-between-admin-or-member.component.css'
})
export class ChoiceBetweenAdminOrMemberComponent implements OnInit {
  ngOnInit(): void {
    while (bool.length > 0) {
      bool.pop()
    }
    bool.push(0)
  }
  @ViewChild("member") memberRef: ElementRef | undefined;
  @ViewChild("admin") adminRef: ElementRef | undefined;
  change_color(el:HTMLDivElement,ad:HTMLDivElement): void {
    el.style.backgroundColor = "#076eaa"
    ad.style.backgroundColor = "#383535"
    if(el.className.split(" ").filter((a) => a == "selected").length > 0){
      while (bool.length > 0) {
        bool.pop()
      }
      bool.push(0)
    }else {
      while (bool.length > 0) {
        bool.pop()
      }
      bool.push(1)
    }
    }
}