import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  // Lista de imágenes que se van a usar en las tarjetas
  private images = [
    'img/grizi.png',
    'img/danddy.jpg',
    'img/asta.jpg'
  ];

  // Variable para almacenar la imagen asignada
  imgSrc: string = '';
  title: string = 'Card title';
  text: string = 'Some quick example text to build on the card title and make up the bulk of the card\'s content.';

  // Contador para hacer una asignación cíclica de las imágenes
  private currentIndex = 0;

  ngOnInit() {
    // Asignar la primera imagen al cargar el componente
    this.imgSrc = this.images[this.currentIndex];

    // Cambiar la imagen cíclicamente con un intervalo
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
      this.imgSrc = this.images[this.currentIndex];
    }, 3000); // Cambia la imagen cada 3 segundos (3000 ms)
  }
}