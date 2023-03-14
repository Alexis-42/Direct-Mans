import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import cle from '../../../../cle.json';

let map: google.maps.Map, infoWindow: google.maps.InfoWindow;

const loader = new Loader({
  apiKey: cle.CleGoogleMaps,
  version: "weekly",
  libraries: ["places"]
});

let mapOptions = {
  center: {
    lat: 48.00746072080193,
    lng: 0.19740114421013952
  },
  zoom: 14
};

function initMap(){
  // Promise
loader.load().then((google) => {
  map = new google.maps.Map(document.getElementById("map") as HTMLElement, mapOptions); // Creer la map
  });
  }


declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;

@Component({
  selector: 'app-maps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.css']
})

export class GooglemapsComponent implements OnInit {
  ngOnInit(): void {
    initMap();
  }
}

