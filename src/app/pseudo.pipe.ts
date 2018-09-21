import { Pipe, PipeTransform } from '@angular/core';
import { Collegue } from './model';

@Pipe({
  name: 'pseudo'
})
export class PseudoPipe implements PipeTransform {

  transform(collFiltre: Collegue[], pseudo: string): Collegue[] {

      if (pseudo && collFiltre && collFiltre.length > 0) {
      return collFiltre.filter(col=>{ 
        return col.pseudo.toUpperCase().includes( pseudo.toUpperCase())
      })
    } else {
      return collFiltre;
    }
} 

}
