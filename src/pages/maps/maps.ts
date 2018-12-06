import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { AboutPage } from '../about/about';
;



declare var L;

@IonicPage()
@Component({
  selector: 'page-maps',
  templateUrl: 'maps.html',
})
export class MapsPage {

  marker
  constructor(public navCtrl: NavController, public navParams: NavParams,private modal: ModalController) {

    
    let view = this.navCtrl.getActive();
    //this.markerClicked = true;

    console.log(view);
      
  }
  

  markerClicked = false;

  ionViewDidLoad() {
    var mymap = L.map('map').setView([	-25.7069, 28.2294], 14);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiYW5kYW5pOTQiLCJhIjoiY2pqeWF2enVoMXZlNTNwbzZ1M2xsNGQzNCJ9.YpiV5hfq178_7MlFvVQIPQ', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 14,
        id: 'mapbox.streets',
        accessToken: 'your.mapbox.access.token'
    }).addTo(mymap);



    this.marker = L.marker([-25.7069, 28.2294]).addTo(mymap)


    var circle = L.circle([-25.7069, 28.2294], {
      color: 'red',
      fillColor: '#f03',
      fillOpacity: 0.5,
      radius: 20
    }).addTo(mymap);


    this.marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup().on('click', this.navigate);


    

    mymap.on('click', this.onMapClick);


    var popup = L.popup()
        .setLatLng([-25.7069, 28.2294])
        .setContent("I am a standalone popup.")
        .openOn(mymap);


        if(this.markerClicked == true){

          this.navCtrl.push('AboutPage');

        }
  }

  onMapClick(e) {
    console.log("It works...")
    //this.navCtrl.push("AboutPage")


  }


  navigate(e)
  {

    //let view = this.navCtrl.getActive();
    //this.markerClicked = true;




    
      
  }

}
