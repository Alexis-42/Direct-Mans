import { HttpClient } from '@angular/common/http';
import cle from '../../../../cle.json';

export class MeteoService {
  private urlMeteo = 'https://api.meteo-concept.com/api/forecast/nextHours?insee=';
  private token;
  private insee;
  private parametres;

  constructor(private http: HttpClient) {
    this.token = "&token="+cle.CleMeteoConcept;
    this.insee = "72181";
    this.parametres = "&hourly=true&world=false";
  }
  getMeteo(){
    return this.http.get(this.urlMeteo+this.insee+this.parametres+this.token);
  }
}
