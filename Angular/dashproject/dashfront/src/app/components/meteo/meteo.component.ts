import { Component, OnInit } from '@angular/core';
import { MeteoService } from './meteo.service';

@Component({
  selector: 'app-meteo',
  templateUrl: './meteo.component.html',
  styleUrls: ['./meteo.component.css']
})
export class MeteoComponent implements OnInit{
  //constructor(private service: MeteoService){}

  ngOnInit(): void {
      var data;
      console.log("test");
      /*this.service.getMeteo().subscribe(reponse=>{
        console.log("rep",reponse);
        data = JSON.parse(JSON.stringify(reponse));
      })*/
  }
}
