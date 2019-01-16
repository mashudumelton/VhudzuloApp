import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';

/**
 * Generated class for the LandlordloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-landlordlogin',
  templateUrl: 'landlordlogin.html',
})
export class LandlordloginPage {
  email;
   password;
   human={
    
     email:"",
     password:"",
   }
   login: FormGroup;
   loginError: string;


  constructor(public navCtrl: NavController, public navParams: NavParams, private fb : FormBuilder) {
    this.login = this.fb.group({
    
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandlordloginPage');
  }
  forgotpassword(){
    this.navCtrl.push("ResetPage");
  }
  submit(){
    this.navCtrl.push("LandlordfeedPage");
  }
}
