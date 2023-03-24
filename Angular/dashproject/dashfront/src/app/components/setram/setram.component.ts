import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setram',
  templateUrl: './setram.component.html',
  styleUrls: ['./setram.component.css']
})
export class SetramComponent implements OnInit{;
  infos: { numero_ligne: string; nom_arret: string; lien: string;}[];

  constructor(){
    this.infos = [];
  }

  ngOnInit(): void {
      fetch("http://localhost:4000/")
        .then(res => res.json())
        .then(data => {
        var bdd = JSON.parse(JSON.stringify(data));
        bdd.forEach((element:any) => {
          this.infos.push({numero_ligne: element[0], nom_arret: element[1], lien: element[2]});
        });
        console.log(this.infos);
      });
  }

}
