
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup} from '@angular/forms';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
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


  transgender
  female
  male
  gender
  race

  constructor(public navCtrl: NavController, public navParams: NavParams,private formBuilder: FormBuilder) {
    this.student = this.formBuilder.group({
      studNum:[0,[Validators.required]],
      fullname:['',[Validators.required,  Validators.maxLength(50),
        Validators.minLength(1),]],
      lastname:['',[Validators.required,  Validators.maxLength(50),
        Validators.minLength(1),]],
      race: ['', [Validators.required]],
      gender:['',[Validators.required]],
      institution:['',[Validators.required]],
      dob:['',[Validators.required]],
      email:['',[Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password:['',[Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
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



onSubmit() {

  console.log('Inside onSubmit...');

  var databaseKey;
  var uid;
  
  firebase.auth().createUserWithEmailAndPassword(this.student.value.email, this.student.value.password).then(data => {
    // console.log('Data:' + data.user.uid);
    console.log("User email:" + data.user.email)
    console.log('User email = ' + this.student.value.email);

    uid = data.user.uid;

    databaseKey = firebase.database().ref('/Student/' + (data.user.uid)).set(
      {
        fullname: this.student.value.fullname,
        lastname: this.student.value.lastname,
        studNum: this.student.value.studNum,
        race: this.student.value.race,
        institution: this.student.value.institution,
        gender: this.student.value.gender,
        dob: this.student.value.dob,
        email: this.student.value.email
      }
    ).key;
    // console.log("Key " + databaseKey)
    this.navCtrl.push("RoomsPage")
  });


  if (this.gender == "male") {
    this.male = this.student.value.male;
  }
  if (this.gender == "female") {
    this.female = this.student.value.female;
  }


  if (this.gender == "transgender") {
    this.transgender = this.student.value.transgender;
  }

}


  SignIn(){
    this.navCtrl.push('FeedPage'); 
  }

  pushtorooms(){

  }
}
