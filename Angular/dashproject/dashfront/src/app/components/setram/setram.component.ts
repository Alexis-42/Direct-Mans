import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setram',
  templateUrl: './setram.component.html',
  styleUrls: ['./setram.component.css']
})
export class SetramComponent implements OnInit{;
  nom: String[];

  constructor(){
    this.nom = [];
  }
 
  ngOnInit(): void {
      fetch("http://localhost:4000/")
        .then(res => res.json())
        .then(data => {
        var bdd = JSON.parse(JSON.stringify(data));
        bdd.forEach((element:any) => {
          this.nom.push(element.name);
        });
        console.log(bdd);
      });
  }

}
