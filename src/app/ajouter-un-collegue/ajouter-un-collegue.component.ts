import { Component, OnInit, Output } from '@angular/core';
import { Formulaire } from '../model';



@Component({
  selector: 'app-ajouter-un-collegue',
  templateUrl: './ajouter-un-collegue.component.html',
  styleUrls: ['./ajouter-un-collegue.component.scss']
})
export class AjouterUnCollegueComponent implements OnInit {

  constructor() { }


  formulaire = new Formulaire();

  // Bouton de validation du formulaire
  clicAjouter(){
    console.log(this.formulaire)
  }

  ngOnInit() {
  }


}
