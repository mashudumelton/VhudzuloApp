import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '../../../node_modules/@angular/forms';
import { MapPageModule } from './../map/map.module';
import { IfObservable } from 'rxjs/observable/IfObservable';

/**
 * Generated class for the LandlordsignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;

@IonicPage()
@Component({
  selector: 'page-landlordsignup',
  templateUrl: 'landlordsignup.html',
})
export class LandlordsignupPage {
  student : FormGroup;

  email
  password
  summary: boolean;

  transgender
  female
  male
  gender
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder : FormBuilder) {
    this.student = this.formBuilder.group({
    
      fullname:['',[Validators.required]],
      lastname:['',[Validators.required]],
      contact:['',[Validators.required]],
      address:['',[Validators.required]],
      gender:['',[Validators.required]],
      dob:['',[Validators.required]],
      email:['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandlordsignupPage');
  }

  forgotpassword(){
    this.navCtrl.push("ResetPage");
  }

  onSubmit(){
    firebase.auth().createUserWithEmailAndPassword(this.student.value.email, this.student.value.password).then(user => {
      this.navCtrl.push("LandlordfeedPage")
    });


    if(this.gender == "male"){
        this.male = this.student.value.male;
    }
        if(this.gender == "female"){
          this.female = this.student.value.female;  }
  

  if(this.gender == "transgender"){
    this.transgender = this.student.value.transgender;}

}

pu(){

  

}
}
