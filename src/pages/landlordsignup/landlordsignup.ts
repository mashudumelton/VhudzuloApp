import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

/**
 * Generated class for the LandlordsignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landlordsignup',
  templateUrl: 'landlordsignup.html',
})
export class LandlordsignupPage {

  human : Person;
  person : FormGroup
  constructor(public navCtrl: NavController, public navParams: NavParams, private fb : FormBuilder) {
    this.person = this.fb.group({
      name: ['',Validators.required],
      surname :['',Validators.required],
      username :['',Validators.required],
       city:['',Validators.required],
       address:['',Validators.required],
      gender : ['',Validators.required],
      contact:['',Validators.required],
      email:['',Validators.required],
      password :['',Validators.required],
      confirmpassword :['',Validators.required],
    }); 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandlordsignupPage');
  }
  onSubmit({value,valid}:{value:  Person,valid:boolean}){
    console.log(value);

  }

}
