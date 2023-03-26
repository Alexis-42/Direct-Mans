import { Component, OnInit } from '@angular/core';
import { loader } from '../googlemaps/googlemaps.component';

@Component({
  selector: 'app-interets',
  templateUrl: './interets.component.html',
  styleUrls: ['./interets.component.css']
})

export class InteretsComponent implements OnInit{
    lieuxSelect: { nom: string; image: string; distance: number}[];
    lieux: { nom: string; image: string; distance: number}[];

    constructor(){
      this.lieuxSelect = [];
      this.lieux = [];
    }

    ngOnInit(): void {
        var lien = {rest: '../../../asset/img/cutlery.png',mag: '../../../asset/img/shopping-cart.png', mus: '../../../asset/img/pantheon.png', lieux: '../../../asset/img/parc.png', hotel: '../../../asset/img/hotel.png'};
        var noms = ['Auberge des 7 Plats','Le Capitole','Bacchus cantine caviste','le nez rouge'];
        var images = [lien.rest,lien.rest,lien.rest,lien.rest];
        loader.load().then((google) => {
              // donne la distance entre la mairie et les coord passées en paramètre
          function donneDist(lat: any,lng: any){
            return google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(48.00746072080193,0.19740114421013952),new google.maps.LatLng(lat,lng));
          }
          const distances = [donneDist(48.00765989731564, 0.19616234965890514),donneDist(48.007185899373646, 0.19890360188552483),donneDist(48.005943528933095, 0.19461391433720324),donneDist(48.006982276354776, 0.19536817137213708)];
          for(var i = 0; i < noms.length; i++){
            this.lieuxSelect.push({nom: noms[i], image: images[i], distance: Math.floor(distances[i])});
          }

        }, function errorCallback(error) {
          console.log(error)
       });
    }

}
