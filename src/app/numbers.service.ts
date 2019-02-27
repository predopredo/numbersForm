import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NumbersService {

  constructor() { }

  setArrayToText(array) {
    if (array.length > 1) {
      return `${array.slice(0, (array.length - 1)).join(', ')} e ${array[array.length - 1]}`
    } else {
      return array.join('')
    }
  }

calculate(initial: number, final: number, multiplesOf: number[]) {

    let smaller: number
    let bigger: number

    let textMultiples = this.setArrayToText(multiplesOf)
    let result: number = 0

    initial < final ? smaller = initial : bigger = initial;
    final < initial ? smaller = final : bigger = final;

    for (let i = smaller; i < bigger; i++) {
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