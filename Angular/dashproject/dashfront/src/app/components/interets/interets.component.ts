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
        var lien = {rest: '../../../assets/img/cutlery.png',mag: '../../../assets/img/shopping-cart.png', mus: '../../../assets/img/pantheon.png', lieux: '../../../assets/img/parc.png', hotel: '../../../assets/img/hotel.png'};
        var noms = ['Auberge des 7 Plats','Le Capitole','Bacchus cantine caviste','le nez rouge','ERNEST INN','Audioprothésiste','marché des jacobins','Artmonde','Librairie Bulle','Centre commercial Jacobins','musée Jean-Claude Boulard','musée de Tessé','maison du drapier','parc de tessé','le jardin des plantes','parc Victor Hugo','Hotel ibis budget','Appart hôtel Odalys','The Originals City'];
        var images = [lien.rest,lien.rest,lien.rest,lien.rest,lien.rest,lien.mag,lien.mag,lien.mag,lien.mag,lien.mag,lien.mus,lien.mus,lien.mus,lien.lieux,lien.lieux,lien.lieux,lien.hotel,lien.hotel,lien.hotel];
        loader.load().then((google) => {
            // donne la distance entre la mairie et les coord passées en paramètre
          function donneDist(lat: any,lng: any){
            return google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(48.00746072080193,0.19740114421013952),new google.maps.LatLng(lat,lng));
          }

          const distances = [donneDist(48.00765989731564, 0.19616234965890514),donneDist(48.007185899373646, 0.19890360188552483),donneDist(48.005943528933095, 0.19461391433720324),donneDist(48.006982276354776, 0.19536817137213708),donneDist(48.0067995337914, 0.1981172577676252),
          donneDist(48.00748666327155, 0.19867868838816552),donneDist(48.00833365449015, 0.19865723071227911),donneDist(48.00595784787943, 0.19745294620119058),donneDist(48.005842997135915, 0.19712571675537105),donneDist(48.00677673945903, 0.19888445882544292),
          donneDist(48.007244104325615, 0.19816494483573383),donneDist(48.010290886421394, 0.2033875742994522),donneDist(48.00898104919382, 0.19771550494014903),donneDist(48.009777430743185, 0.20352571269067132),donneDist(48.0055028780218, 0.2096417849094509),donneDist(48.00084827791243, 0.20136413001575704),
          donneDist(48.00187760039828, 0.20344879871890903),donneDist(48.004208546126186, 0.19375666558310498),donneDist(47.99833789552971, 0.192796602713131)] ;

          for(var i = 0; i < noms.length; i++){
            this.lieux.push({nom: noms[i], image: images[i], distance: Math.floor(distances[i])});
          }

        }, function errorCallback(error) {
          console.log(error)
       });
    }

}
