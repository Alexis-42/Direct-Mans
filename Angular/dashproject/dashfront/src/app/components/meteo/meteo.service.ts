import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import cle from '../../../../cle.json';

@Injectable({
  providedIn:'root'
})
export class MeteoService {
  private urlMeteo = 'https://api.meteo-concept.com/api/forecast/daily?insee=';
  private token;
  private insee;
  private parametres;

  constructor(private http: HttpClient) {
    this.token = "&token="+cle.CleMeteoConcept;
    this.insee = "72181";
    this.parametres = "&start=0&end=1";
  }
  getMeteo(){
    return this.http.get(this.urlMeteo+this.insee+this.parametres+this.token);
  }
}

