import { Component } from '@angular/core';
import { SlideComponentForHomeComponent } from '../slide-component-for-home/slide-component-for-home.component';
import { MadagascarPresentationComponent } from '../madagascar-presentation/madagascar-presentation.component';
import { AlbumGridComponent } from '../album-grid/album-grid.component';
import { GetAllParentRoadComponent } from '../get-all-parent-road/get-all-parent-road.component';
import { FavoriteRoadComponent } from '../favorite-road/favorite-road.component';
import { DevisAndContactComponent } from '../devis-and-contact/devis-and-contact.component';
import { LinkForAllChildRoadComponent } from '../link-for-all-child-road/link-for-all-child-road.component';

@Component({
  selector: 'app-assembly-home',
  standalone: true,
  imports: [
    SlideComponentForHomeComponent,
    MadagascarPresentationComponent,
    AlbumGridComponent,
    GetAllParentRoadComponent,
    FavoriteRoadComponent,
    DevisAndContactComponent,
    LinkForAllChildRoadComponent
  ],
  templateUrl: './assembly-home.component.html',
  styleUrl: './assembly-home.component.css'
})
export class AssemblyHomeComponent {

}
