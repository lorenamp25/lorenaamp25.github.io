import { Component } from '@angular/core';
import { CardComponent } from "../card/card.component";
import { CardvideoComponent } from "../cardvideo/cardvideo.component";
import { CarruselComponent } from "../carrusel/carrusel.component";

@Component({
  selector: 'app-tabs',
  imports: [CardComponent, CardvideoComponent, CarruselComponent],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {

}
