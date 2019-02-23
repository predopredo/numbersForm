import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class NumbersService {

  numbersArray: number[]
  multiplesOf: number[]
  finalArray: number[]

  constructor() { }

  generateNumbersBetween(first: number, last: number) {
    this.numbersArray = []
    if (Math.round(first) < Math.round(last)) {
      for (let i = Math.round(first); i < Math.round(last); i++) {
        this.numbersArray.push(i)
      }
    } else {
      for (let i = Math.round(last); i < Math.round(first); i++) {
        this.numbersArray.push(i)
      }
    }
  }

  setMultiples(multiplesArray: number[]) {
    this.multiplesOf = multiplesArray
  }

  setArrayToText(array) {
    if (array.length > 1) {
      return `${array.slice(0, (array.length - 1)).join(', ')} e ${array[array.length - 1]}`
    } else {
      return array.join('')
    }
  }

  filterNumbers() {
    this.finalArray = []
    this.numbersArray.forEach(number => {
      this.multiplesOf.forEach(multiple => {
        if (number % multiple === 0 && !this.finalArray.includes(number) && number != 0) {
          this.finalArray.push(number)
        }
      })
    })
  }

  getSum() {
    const sumFunction = (total, num) => {
      return total + num
    }
    return this.finalArray.reduce(sumFunction)
  }

  calculate(initial: number, final: number, multiplesOf: number[]) {
    this.generateNumbersBetween(initial, final);
    this.setMultiples(multiplesOf);
    this.filterNumbers();

    if (this.finalArray.length) {
      return `A soma dos múltiplos de ${this.setArrayToText(multiplesOf)}, nos números que estão entre ${initial} e ${final} é ${this.getSum()}.`
    } else {
      return `Não existem múltiplos de ${this.setArrayToText(multiplesOf)} nos números que estão entre ${initial} e ${final}!`
    }
  }
}