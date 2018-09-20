export enum Avis {
  AIMER = 'AIMER',
  DETESTER = 'DETESTER'
}

export class Collegue {
  pseudo: string;
  score: number;
  photo: string;

  static fromCollegueServeur(collegueServeur: any): Collegue {
    const colIhm = new Collegue();
    colIhm.pseudo = collegueServeur.pseudo;
    colIhm.score = collegueServeur.score;
    colIhm.photo = collegueServeur.photo;
    return colIhm;
  }
}

// Création d'une structure vote
export class Vote {
  coll: Collegue;
  avis: Avis;
}

// Création d'une structure formulaire
export class Formulaire{
  matricule : String
  pseudo : String
  urlimage: String
}
