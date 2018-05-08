import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the ShowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-show',
  templateUrl: 'show.html',
})
export class ShowPage {
  img: any;
  titulo: any;
  nombre: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.img = navParams.get('img');
    this.nombre = navParams.get('nombre');
    this.titulo = navParams.get('titulo');
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowPage');
  }

  regresar(){
    console.log("Hola");
    this.navCtrl.push(HomePage);
  }

}
