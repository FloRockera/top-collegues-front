import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Collegue, Avis } from '../model';
import { CollegueService } from '../services/collegue.service';
import { IfStmt } from '@angular/compiler';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-collegue-component',
  templateUrl: './collegue-component.component.html',
  styleUrls: ['./collegue-component.component.css']
})
export class CollegueComponentComponent implements OnInit {
  @Input()
  collegue: Collegue;

  errMsg: string;

  constructor(private _colSrv: CollegueService) {}

  avisRecu: string;

  traiter(avis: Avis) {
    this._colSrv
      .donnerUnAvis(this.collegue, avis)
      .then(colServeur => (this.collegue = colServeur))
      .catch((errServeur: HttpErrorResponse) => {
        if (errServeur.error.message) {
          this.errMsg = errServeur.error.message;
        } else {
          this.errMsg = 'Erreur technique côté serveur';
        }
      });
  }

  ngOnInit() {}
}
