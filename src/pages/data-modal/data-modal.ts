import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DataModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-data-modal',
  templateUrl: 'data-modal.html',
})
export class DataModalPage {
  myParam: string;

  constructor(public navCtrl: NavController, public viewCtrl: ViewController,public navParams: NavParams) {
    this.myParam = navParams.get('myParam');
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DataModalPage');
  }

}
