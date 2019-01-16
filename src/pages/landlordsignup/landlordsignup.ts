import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, LoadingController, AlertController } from 'ionic-angular';
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
  student: FormGroup;

  email
  password
  summary: boolean;

  transgender
  female
  male
  gender
  race

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    public loadingCtrl: LoadingController, public alertCtrl: AlertController, public menuCtrl: MenuController) {
    this.student = this.formBuilder.group({

      fullname: ['', [Validators.required,  Validators.maxLength(50),
        Validators.minLength(1),]],
      lastname: ['', [Validators.required,  Validators.maxLength(50),
        Validators.minLength(1),]],
      contact: ['', [Validators.required, Validators.maxLength(10),Validators.minLength(10),]],
      address: ['', [Validators.required]],
      race: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: ['', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandlordsignupPage');
  }

  forgotpassword() {
    this.navCtrl.push("ResetPage");
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

      databaseKey = firebase.database().ref('/rentals/' + (data.user.uid)).set(
        {
          fullname: this.student.value.fullname,
          lastname: this.student.value.lastname,
          contact: this.student.value.contact,
          race: this.student.value.race,
          address: this.student.value.address,
          gender: this.student.value.gender,
          dob: this.student.value.dob,
          email: this.student.value.email
        }
      ).key;
      // console.log("Key " + databaseKey)
      this.navCtrl.push("LandlordfeedPage")
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

}
