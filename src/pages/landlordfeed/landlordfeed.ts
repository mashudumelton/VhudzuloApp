import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController, LoadingController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
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
  address : string = "";
  description : string = "";
  price : string = "";
  numberofrooms: string = "";

  uid : any;
  imageUri : any = null;
  loading: any;
  pictures = [];
  details : string = null;
  constructor(public toastCtrl: ToastController,public navCtrl: NavController, public navParams: NavParams, private camera: Camera, public loadingCtrl: LoadingController) {
 
 
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LandlordfeedPage');
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
