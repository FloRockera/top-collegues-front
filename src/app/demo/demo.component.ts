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
    this.colFictif.photo = "data:image/jpeg;base64,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"

    const col2 = new Collegue();
    col2.pseudo = "Archer";
    col2.score = +1500;
    col2.photo = "data:image/png;base64,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"

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
