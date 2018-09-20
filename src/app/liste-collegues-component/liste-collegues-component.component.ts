import { Component, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../model';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-liste-collegues-component',
  templateUrl: './liste-collegues-component.component.html',
  styleUrls: ['./liste-collegues-component.component.css']
})
export class ListeColleguesComponentComponent implements OnInit {
  // on récupère le tableau de collègues du composant
  @Input()
  colleguesTab: Collegue[];

  err: string;

  // on va communiquer avec le service
  constructor(private _colSrv: CollegueService) {}


   

  ngOnInit() {
    // on passe une promesse avec then :
    // le tableau de collègues récupéré dans le service va alimenter
    // le tableau de collègues du composant

    this._colSrv
      .listerCollegues()
      .then(tabCollServ => (this.colleguesTab = tabCollServ))
      .catch(errServeur => {
        if (errServeur.code && errServeur.message) {
          this.err = errServeur.message;
        } else {
          this.err = 'Erreur technique côté serveur';
        }
      });
    }
 
  }
