import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ShowPage } from '../show/show';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  personajes = [];
  constructor(public navCtrl: NavController) {
    this.personajes = [
      {
        'img': '../../assets/imgs/han-solo.jpg',
        'nombre': 'Han Solo',
        'titulo': 'Cazarrecompensas',
        
      },
      {
        'img': '../../assets/imgs/rey.jpg',
        'nombre': 'Rey',
        'titulo': 'Recolectora',
        
      },
      {
        'img': '../../assets/imgs/leia.jpg',
        'nombre': 'Leia',
        'titulo': 'Princesa',
        
      },
      {
        'img': '../../assets/imgs/finn.jpg',
        'nombre': 'Finn',
        'titulo': 'Piloto',
        
      },
    ]
  }

  call(img, nombre, titulo){
    console.log(img);
    console.log(nombre);
    console.log(titulo);
    this.navCtrl.push(ShowPage, {img: img, nombre: nombre, titulo: titulo});

  }
}
