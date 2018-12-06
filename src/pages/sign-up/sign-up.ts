
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  student : FormGroup;

  email
  password
  summary: boolean;




  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder) {
    this.student = this.formBuilder.group({
      studNum:[0,[Validators.required]],
      fullname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      gender:['',[Validators.required]],
      dob:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    });


  



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
  lanadloa(){
    this.navCtrl.push('LandlordsignupPage');
 
  }
  my(){
    this.navCtrl.push('SignUpPage');

  }
  SignIn(){
    this.navCtrl.push('FeedPage'); 
  }
}
