import { Component, OnInit } from '@angular/core';
import { MeteoService } from './meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit{
  weatherToday: number = 0;
  weatherTomorrow: number = 0;
  affiche: boolean;
  imagePathToday: string = "";
  imagePathTomorrow: string = "";
  tempsMinToday: number = 0;
  tempsMinTomorrow: number = 0;
  tempsMaxToday: number = 0;
  tempsMaxTomorrow: number = 0;

  constructor(private service: MeteoService){
    this.affiche = false;
  }

  ngOnInit(): void {
      var data;
      this.service.getMeteo().subscribe(reponse=>{
        data = JSON.parse(JSON.stringify(reponse));
        this.weatherToday = data.forecast[0].weather;
        this.tempsMinToday = data.forecast[0].tmin;
        this.tempsMaxToday = data.forecast[0].tmax;
        this.imagePathToday = this.changeIcone(this.weatherToday);

        this.weatherTomorrow = data.forecast[1].weather;
        this.tempsMinTomorrow = data.forecast[1].tmin;
        this.tempsMaxTomorrow = data.forecast[1].tmax;
        this.imagePathTomorrow = this.changeIcone(this.weatherTomorrow);
        this.affiche = true;
      })
  }

  changeIcone(weather: number) : string{
    switch(true){
      case weather == 0:
        return "../../../assets/icones/sun.svg";
      case weather < 8:
        return "../../../assets/icones/cloudy.svg";
      case weather < 17:
        return "../../../assets/icones/rainy.svg";
      case weather < 23:
        return "../../../assets/icones/snowy.svg";
      case weather < 49:
        return "../../../assets/icones/rainy.svg";
      case weather < 69:
        return "../../../assets/icones/snowy.svg";
      case weather < 79:
        return "../../../assets/icones/rainy.svg";
      case weather < 143:
        return "../../../assets/icones/thunder.svg";
      default:
        return "../../../assets/icones/rainy.svg";
    }
  }
}
