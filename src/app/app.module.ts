import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { DemoComponent } from './demo/demo.component';
import { BandeauComponentComponent } from './bandeau-component/bandeau-component.component';
import { AvisComponentComponent } from './avis-component/avis-component.component';
import { CollegueComponentComponent } from './collegue-component/collegue-component.component';
import { ListeColleguesComponentComponent } from './liste-collegues-component/liste-collegues-component.component';
import { HistoriqueVotesComponent } from './historique-votes/historique-votes.component';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNonTrouveeComponent } from './page-non-trouvee/page-non-trouvee.component';
import { AjouterUnCollegueComponent } from './ajouter-un-collegue/ajouter-un-collegue.component';
import { FormsModule } from '@angular/forms';
import { ScorePipe } from './score.pipe';
import { PseudoPipe } from './pseudo.pipe';
import { VotreDernierAvisComponent } from './votre-dernier-avis/votre-dernier-avis.component';


const appRoutes: Routes = [

  { path: 'accueil', component: AccueilComponent }, // /page1 affiche le composant A
  { path: 'demo', component: DemoComponent }, // /page2 affiche le composant B
  { path: 'formulaire', component: AjouterUnCollegueComponent }, // /page2 affiche le composant B
  { path: '',   redirectTo: '/accueil', pathMatch: 'full' }, // redirige vers la route page1 par défaut
  { path: '**',  component: PageNonTrouveeComponent } // page non trouvée
];


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    BandeauComponentComponent,
    AvisComponentComponent,
    CollegueComponentComponent,
    ListeColleguesComponentComponent,
    HistoriqueVotesComponent,
    AccueilComponent,
    MenuComponent,
    PageNonTrouveeComponent,
    AjouterUnCollegueComponent,
    ScorePipe,
    PseudoPipe,
    VotreDernierAvisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MDBBootstrapModule.forRoot(),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }