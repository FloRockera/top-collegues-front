import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Vote, Avis } from '../model';

@Component({
  selector: 'app-historique-votes',
  templateUrl: './historique-votes.component.html',
  styleUrls: ['./historique-votes.component.css']
})
export class HistoriqueVotesComponent implements OnInit {

  //liste de votes
  @Input() voteTab:Vote[]


  constructor() {

  const col1 = new Collegue();
  col1.pseudo = "Cyril Figgis";
  col1.score = 950;
  col1.photo = "https://static.tvtropes.org/pmwiki/pub/images/figgis_cyril_8946.jpg"


    const col2 = new Collegue();
    col2.pseudo = "Archer";
    col2.score = 1000;
    col2.photo = "https://vignette.wikia.nocookie.net/p__/images/c/cd/Sterling_Archer_8057.jpeg/revision/latest?cb=20130406193713&path-prefix=protagonist"

    const vote1 = new Vote();
    vote1.avis = Avis.AIMER;
    vote1.coll = col2;

    const vote2 = new Vote();
    vote2.avis = Avis.DETESTER;
    vote2.coll = col1;

    this.voteTab = [vote1, vote2];

   }

  clicDelete() {
    //Supprimer le vote
  }
  

  ngOnInit() {
  }

}