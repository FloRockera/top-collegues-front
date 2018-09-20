import { Component, OnInit, Output } from '@angular/core';
import { Formulaire, Collegue } from '../model';
import { CollegueService } from '../services/collegue.service';



@Component({
  selector: 'app-ajouter-un-collegue',
  templateUrl: './ajouter-un-collegue.component.html',
  styleUrls: ['./ajouter-un-collegue.component.scss']
})
export class AjouterUnCollegueComponent implements OnInit {

  constructor(private _colSrv:CollegueService) { }


  formulaire = new Formulaire();

  // Bouton de validation du formulaire
  clicAjouter(){
    console.log(this.formulaire)
    this._colSrv.inscrireCollegue(this.formulaire);
  }

  ngOnInit() {
  }


}
