import { AfterViewInit, Component, DoCheck, ElementRef, OnChanges, OnDestroy, OnInit, QueryList, SimpleChange, ViewChild, ViewChildren } from '@angular/core';
import { NgOptimizedImage} from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations} from "@angular/platform-browser/animations"
import { animate, NoopAnimationPlayer, state, style, transition, trigger } from '@angular/animations';
import { delay, interval, of } from 'rxjs';
@Component({
  selector: 'app-slide-component-for-home',
  standalone: true,
  imports: [NgOptimizedImage],
  animations : [
    trigger("OpenClose",[
      state("0",style({
        scrollX : 100 + "vw",
        transition : "0.3s"
      })),
      state("open",style({
        scrollX : 100 + "vw",
        transition : "0.3s"
      })),
      state("2",style({
        scrollX : 200 + "vw",
        transition : "0.3s"
      })),
      state("3",style({
        scrollX : 0 + "vw",
        transition : "0.3s"
      }))
    ])
  ],
  templateUrl: './slide-component-for-home.component.html',
  styleUrl: './slide-component-for-home.component.css'
})
export class SlideComponentForHomeComponent {
  @ViewChild("section") section : ElementRef | undefined
  interval: string | undefined;
  value : string | undefined;

}