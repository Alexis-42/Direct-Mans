import { Component, OnInit } from '@angular/core';
import { loader } from '../googlemaps/googlemaps.component';

// distance à laquelle on affiche les lignes (en mètres)
const distanceAffichageLigne = 300;
export const utiliserPositionFictive = true;
@Component({
  selector: 'app-setram',
  templateUrl: './setram.component.html',
  styleUrls: ['./setram.component.css']
})


export class SetramComponent implements OnInit{;
  infos: { numero_ligne: string; nom_arret: string; lien: string; distance: number}[];

  constructor(){
    this.infos = [];
  }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(
       (position) => {
      fetch("http://localhost:4000/")
        .then(res => res.json())
        .then(data => {
        loader.load().then((google) => {
          var bdd = JSON.parse(JSON.stringify(data));
          var positionDeLaPersonne = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
          var positionFictive = new google.maps.LatLng(48.00746072080193,0.19740114421013952);
          bdd.forEach((element:any) => {
            var destination = new google.maps.LatLng(element[3],element[4]);
            if(utiliserPositionFictive)
              var distanceCalc = google.maps.geometry.spherical.computeDistanceBetween(positionFictive, destination);
            else
              var distanceCalc = google.maps.geometry.spherical.computeDistanceBetween(positionDeLaPersonne, destination);
            if(distanceCalc < distanceAffichageLigne){
                this.infos.push({numero_ligne: element[0], nom_arret: element[1], lien: element[2], distance: Math.floor( distanceCalc )});
            }
          });
          this.infos.sort((a,b) => a.distance - b.distance);
          //console.log(this.infos);
        });
      });

    },
    function errorCallback(error) {
       console.log(error)
    }
 );
  }

}
