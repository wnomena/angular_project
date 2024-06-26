import { Component ,OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OtherComponentsComponent } from './other-components/other-components.component';
// import "bootstrap-icons/icons/telephone.svg"

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,OtherComponentsComponent],
  templateUrl: './app.component.html',
  styleUrl: "./app.component.css"
})
export class AppComponent {

}

