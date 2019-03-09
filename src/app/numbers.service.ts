import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NumbersService {

  constructor() { }

  setNuberArrayToText(array) {
    let text = array.length > 1 ? `${array.slice(0, (array.length - 1)).join(', ')} e ${array[array.length - 1]}` : array.join('');
    return text
  }

calculate(initial: number, final: number, multiplesOf: number[]) {
    let smaller: number
    let bigger: number

    let textMultiples = this.setNuberArrayToText(multiplesOf)
    let result: number = 0

    initial < final ? smaller = initial : bigger = initial;
    final < initial ? smaller = final : bigger = final;

    for (let i = Math.round(smaller); i < Math.round(bigger); i++) {
      let checkIfSame: number
      multiplesOf.forEach(multiple => {
        if (i % multiple === 0 && i != checkIfSame) {
          result += i;
          checkIfSame = i
        }
      })
    }

    if (result > 0) {
      return `A soma dos múltiplos de ${textMultiples} nos números que estão entre ${initial} e ${final} é ${result}.`
    } else {
      return `Não existem múltiplos de ${textMultiples} nos números que estão entre ${initial} e ${final}!`
    }
  }

}