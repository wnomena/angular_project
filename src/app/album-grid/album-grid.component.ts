import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-album-grid',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './album-grid.component.html',
  styleUrl: './album-grid.component.css'
})
export class AlbumGridComponent {

}
