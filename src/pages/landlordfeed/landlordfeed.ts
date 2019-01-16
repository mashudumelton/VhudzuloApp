import { landlord } from './../../landlord';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ImagePicker } from '@ionic-native/image-picker';
import { File } from '@ionic-native/file';
import { Crop } from '@ionic-native/crop';
/**
 * Generated class for the LandlordfeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var firebase;
@IonicPage()
@Component({
  selector: 'page-landlordfeed',
  templateUrl: 'landlordfeed.html',
})
export class LandlordfeedPage {
  city:string="";
  address : string = "";
  description : string = "";
  price : string = "";
  numberofrooms: string = "";

  numberofsinglerooms:number;
  numberofdoublerooms:number;
  uid : any;
  imageUri : any = null;
  loading: any;
  pictures = [];
  details : string = null;

  lord: FormGroup;
  constructor(private crop: Crop,private file: File,private imagePicker: ImagePicker,public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public loadingCtrl: LoadingController,
    private formBuilder: FormBuilder) {
 
    this.lord = this.formBuilder.group({
      city :['', [Validators.required]],
      address: ['', [Validators.required]],
      description: ['', [Validators.required]],
      price: ['', [Validators.required]],
      numberofrooms: ['', [Validators.required]],
      numberofsinglerooms: ['', [Validators.required]],
      numberofdoublerooms: ['', [Validators.required]],
      });
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandlordfeedPage');
  }

  upload(){
    var databaseKey;
      databaseKey = firebase.database().ref('/landlords/').push(
      {
        city: this.lord.value.city,
        address: this.lord.value.address,
        description: this.lord.value.description,
        price: this.lord.value.price,
        numberofrooms: this.lord.value.numberofrooms,
        numberofsinglerooms: this.lord.value.numberofsinglerooms,
        numberofdoublerooms: this.lord.value.numberofdoublerooms,
      }
    ).key;
    console.log("Rooms Available:" + this.lord.value.numberofrooms);
    console.log("Address:" + this.lord.value.address);
  }
  
 takePicture(){
       
    let options: CameraOptions = {
      quality: 25,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      saveToPhotoAlbum : false,
      cameraDirection : 0,
      targetWidth : 640,
      targetHeight : 640,
      allowEdit : true

    };

    this.camera.getPicture(options).then((imageData) => {
      
      this.imageUri = 'data:image/jpeg;base64,' + imageData;
      this.details =  "img" + Date.now().toString() + ".jpeg";
      this.loading = this.loadingCtrl.create({
        content: 'Optimizing image. please wait...'
      });
    
      this.loading.present();
      

      if(this.pictures.length <= 4){
        this.pictures.push({
          name :this.details,
          uri : this.imageUri
        });
        this.loading.dismiss();
      }else{
        this.presentToast("You can only add 6 images");
        this.loading.dismiss();
      }
      console.log(this.pictures);
      
     }, (err) => {
      
      console.log(err);
      this.loading.dismiss();
     });
    
  }
  
  openGallery(){

    let options = {maximumImagesCount: 1, outputType : 0};
    this.imagePicker.getPictures(options).then( results => {
      for (var i = 0; i < results.length; i++) {

        this.crop.crop(results[i], {quality: 25, targetWidth : 640, targetHeight : 640})
        .then(
        newImage => {
          console.log('new image path is: ' + newImage);

          let path = newImage.substring(0, newImage.lastIndexOf('/')+1);
          let file = newImage.substring(newImage.lastIndexOf('/') + 1, newImage.lastIndexOf('?'));

          console.log(path);
          console.log(file);

          this.loading = this.loadingCtrl.create({
            content: 'Optimizing image. please wait...'
          });
        
          this.loading.present();
          
          this.file.readAsDataURL(path, file).then(
            uri =>{
              this.imageUri = uri ;
              this.details =  "img" + Date.now().toString() + ".jpeg";

              if(this.pictures.length <= 5){
                this.pictures.push({
                  name :this.details,
                  uri : this.imageUri
                });
                this.loading.dismiss();
              }else{
                this.presentToast("You can only add 6 images");
                this.loading.dismiss();
              }
              
            }
          ).catch( error =>{
              console.log(error);
              
            }
          );
          
        },
        error => console.error('Error cropping image', error)
        );
      }
    }, err => { console.log(err);
     });
  }



  uploadImage(){
    
    let counter = 0;
    this.loading = this.loadingCtrl.create({
      content: 'Uploading files, Please wait...'
    });
  
    this.loading.present();

    // for(let i = 0 ; i < this.pictures.length; i++){

    //   var ref = this.firebaseStorage.ref('pictures/' + this.uid  + '/' + this.pictures[i].name );
    //   ref.putString(
    //   this.pictures[i].uri, 'data_url').then(
    //     resp =>{
    //       counter++;

    //       if(counter == this.pictures.length){
    //         this.getUrls();
    //       }
    //     }
    //   ).catch(
    //     err => {

    //       this.loading.dismiss();
    //     }
    //   );
    // }
    
  }
  
  presentToast(message) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 4000,
      position: 'top',
      showCloseButton : true,
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
