import { Component, signal } from '@angular/core';
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Mi coleccion de juegos';
  figutitas = [
    {nombre: 'Super Smash Bros. Ultimate', favorito: true},
    {nombre: 'The Legend of Zelda: Breath of the Wild', favorito: false},
    {nombre: 'Mario Kart 8 Deluxe', favorito: true},
    {nombre: 'Animal Crossing: New Horizons', favorito: false},
    {nombre: 'Splatoon 2', favorito: false}
  ];
  nuevoJuego = '';
  //trim elimina los espacios en blanco al inicio y al final de la cadena de texto
  //entonces si es verdad que hay algo aparte de los espacios
  agregarJuego() {
    if (this.nuevoJuego.trim() !== '') {
      this.figutitas.push({nombre: this.nuevoJuego, favorito: false});
      this.nuevoJuego = '';
    }
   }
   eliminarJuego(index: number) {
    this.figutitas.splice(index, 1);
   }
}
//Jaziel Sergio Mengoa Pacheco - 2023-06-19