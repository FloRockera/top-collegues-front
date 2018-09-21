import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CollegueService } from '../services/collegue.service';

@Component({
  selector: 'app-votre-dernier-avis',
  templateUrl: './votre-dernier-avis.component.html',
  styleUrls: ['./votre-dernier-avis.component.scss']
})
export class VotreDernierAvisComponent implements OnInit {
  msg: string;

  abonnementSuperBus: Subscription;

  constructor(private _colSrv: CollegueService) {}

  ngOnInit() {
    this.abonnementSuperBus = this._colSrv.superBus.subscribe(message => {
      this.msg = message;
    });
  }

  ngOnDestroy() {
    this.abonnementSuperBus.unsubscribe();
  }
}