import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Collegue, Avis, Formulaire } from '../model';
import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
// operateur map
import { map, filter } from 'rxjs/operators';

// Environnement URL
const URL_BACKEND_COLLEGUES = environment.backendUrl_Collegues;
const URL_BACKEND_ACCUEIL = environment.backendUrl_Accueil;
const URL_BACKEND_FORMULAIRE = environment.backendUrl_Formulaire

@Injectable({
  providedIn: 'root'
})
export class CollegueService {

  // on crée une instance de subject (ne stocke aucune valeur, en temps réel)
  private _superBus = new Subject<string>();

  // on écrit un getter
  get superBus() : Observable<string>{
    return this._superBus.asObservable();
  }

  constructor(private _http: HttpClient) {}


  listerCollegues(): Observable<Collegue[]> {
    // récupérer la liste des collègues côté serveur
    return this._http
      .get(URL_BACKEND_ACCUEIL)
      .pipe(
      map((data: any[]) =>
      data.map(collegueServeur =>
        Collegue.fromCollegueServeur(collegueServeur)
        ))
      );
  }

  donnerUnAvis(unCollegue: Collegue, avis: Avis): Promise<Collegue> {

    // .next pour transmettre l'évènement
    this._superBus.next('Super : ${unCollegue.pseudo} - ${avis}');


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

  inscrireCollegue(formulaire:Formulaire) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this._http
    .post(
      `${URL_BACKEND_FORMULAIRE}`,

      // corps de la requête
      formulaire,

      // options de la requête HTTP
        httpOptions
      )
      .toPromise();
  }

   // console.log('je suis dans service', matricule, pseudo, urlimage)
  }