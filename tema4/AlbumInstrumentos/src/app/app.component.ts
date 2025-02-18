import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarruselComponent } from "./carrusel/carrusel.component";
import { TabsComponent } from "./tabs/tabs.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CarruselComponent, TabsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AlbumInstrumentos';
}
