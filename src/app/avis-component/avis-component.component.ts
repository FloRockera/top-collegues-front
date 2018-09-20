import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Avis } from '../model';

@Component({
  selector: 'app-avis-component',
  templateUrl: './avis-component.component.html',
  styleUrls: ['./avis-component.component.css']
})
export class AvisComponentComponent implements OnInit {

  constructor() { }

 
  //@Output() avis:EventEmitter<string> = new EventEmitter<string>();
  @Output() avis:EventEmitter<Avis> = new EventEmitter<Avis>();
  
  clicAime() {
   
    this.avis.emit(Avis.AIMER);
}


clicDeteste() {
  //this.avis.emit("Vous avez cliqué sur 'Je déteste'");
  this.avis.emit(Avis.DETESTER);
}



  ngOnInit() {
  }

}