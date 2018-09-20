import { Component, OnInit } from '@angular/core';
import { Collegue, Avis, Vote } from '../model';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  //liste de collègues
  colFictif:Collegue;
  collegues:Collegue[];



  constructor() {
    this.colFictif = new Collegue();
    this.colFictif.pseudo = "Lana Kane";
    this.colFictif.score = 850;
    this.colFictif.photo = "https://vignette.wikia.nocookie.net/loveinterest/images/9/9f/Lana_kane.jpg/revision/latest?cb=20140519224029"

    const col2 = new Collegue();
    col2.pseudo = "Archer";
    col2.score = +1500;
    col2.photo = "https://vignette.wikia.nocookie.net/p__/images/c/cd/Sterling_Archer_8057.jpeg/revision/latest?cb=20130406193713&path-prefix=protagonist"

    this.collegues = [this.colFictif, col2];

   }




//masquer les sections inutiles
masquerSection=true;

//traiter l'évènement
avisRecu:string;

  traiter($event:Avis){
    if ($event == Avis.AIMER)
    this.avisRecu = "Vous avez cliqué sur 'J'aime'";
    if  ($event == Avis.DETESTER)
    this.avisRecu = "Vous avez cliqué sur 'Je déteste'";

   // this.avisRecu = $event;
  }

  ngOnInit() {
  }

}