import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  constructor() {}

  getInfoLocal(): string {
    const algumavariavel = 'Retorno de string';
    if (true) {
      console.log('Faz alguma coisa aqui');
    }
    return algumavariavel;
  }

  getNumberLocal(): Number {
    let numeroRetorno = 2;

    if (numeroRetorno < 3) {
      numeroRetorno++;
    }

    return numeroRetorno;
  }
}
