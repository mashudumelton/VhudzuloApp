import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DataModalPage } from '../data-modal/data-modal';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  myParam = '';

  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {}

  openBasicModal() {
    let myModal = this.modalCtrl.create(DataModalPage);
    myModal.present();
  }
  openModalWithParams() {
    let myModal = this.modalCtrl.create(DataModalPage, { 'myParam': this.myParam }, {cssClass: 'select-modal' });
    myModal.present();
  }
}
