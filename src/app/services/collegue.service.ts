import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Collegue, Avis } from '../model';
import { environment } from '../../environments/environment';

// Environnement URL
const URL_BACKEND_COLLEGUES = environment.backendUrl_Collegues;
const URL_BACKEND_ACCUEIL = environment.backendUrl_Accueil;

@Injectable({
  providedIn: 'root'
})
export class CollegueService {
  constructor(private _http: HttpClient) {}

  listerCollegues(): Promise<Collegue[]> {
    // récupérer la liste des collègues côté serveur
    return this._http
      .get(URL_BACKEND_ACCUEIL)
      .toPromise()
      .then((data: any[]) =>
        data.map(collegueServeur =>
          Collegue.fromCollegueServeur(collegueServeur)
        )
      );
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {
    // TODO Aimer ou Détester un collègue côté serveur
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this._http
      .patch(
        `${URL_BACKEND_ACCUEIL}/${unCollegue.pseudo}`,

        // corps de la requête
        {
          action: avis
        },

        // options de la requête HTTP
        httpOptions
      )
      .toPromise()
      .then((collegueServeur: any) =>
        Collegue.fromCollegueServeur(collegueServeur)
      );
  }
}