import { NgFor, NgOptimizedImage } from '@angular/common';
import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { observable, presentation_image } from '../../simple_animation/animation';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-some-image',
  standalone: true,
  imports: [NgFor,NgOptimizedImage],
  templateUrl: './some-image.component.html',
  styleUrl: './some-image.component.css'
})
export class SomeImageComponent {
  
}
