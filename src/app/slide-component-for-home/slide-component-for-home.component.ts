import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { array_string } from '../model';
@Component({
  selector: 'app-slide-component-for-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './slide-component-for-home.component.html',
  styleUrl: './slide-component-for-home.component.css'
})
export class SlideComponentForHomeComponent {
  slide : array_string[] = [{name : "bekopaka", src : "bekopaka.jpg"},{name : "ankavandra",src : "../../assets/ankavandra.jpg"},{name : "baobab", src : "../../assets/baobab_lena.jpg"}]


}
