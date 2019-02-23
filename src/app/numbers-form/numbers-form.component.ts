import { Component, OnInit } from '@angular/core';

import { NumbersService } from '../numbers.service'; //importa o numbers service

import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms'; //importa as classes/interfaces/tipos de formulários do angular

@Component({
  selector: 'app-numbers-form',
  templateUrl: './numbers-form.component.html',
  styleUrls: ['./numbers-form.component.css']
})

export class NumbersFormComponent implements OnInit {

  numbersForm: FormGroup //necessário pra integrar com o html
  result: string //adicionei pra controlar o que vai aparecer no view com as diretivas

  constructor(private numbersService: NumbersService) { }

  ngOnInit() {
    //quando o componente é carregado, cria a estrutura do formulário no arquivo typescript dele
    this.numbersForm = new FormGroup({
      'initialNumber': new FormControl(null, [Validators.required]),
      'finalNumber': new FormControl(null, [Validators.required]),
      'multiplesOf': new FormControl(null, [Validators.required, Validators.pattern('[0-9]+(, [0-9]+)*')])
    })
  }

  onCalculate() {
    let initialNumber: number = this.numbersForm.value.initialNumber
    let finalNumber: number = this.numbersForm.value.finalNumber
    let multiplesOf: number[] = JSON.parse(`[${this.numbersForm.value.multiplesOf}]`)

    this.result = this.numbersService.calculate(initialNumber, finalNumber, multiplesOf)
  }

  notifyValidation(control: AbstractControl): string {
    if (control.invalid && (control === this.numbersForm.controls.initialNumber || control === this.numbersForm.controls.finalNumber )) {
      return 'Preencha com um número'
    } else if (control.invalid && control === this.numbersForm.controls.multiplesOf && !control.value) {
      return 'Preenchimento Obrigatório'
    } else if (control.invalid && control === this.numbersForm.controls.multiplesOf && control.value) {
      return 'Somente números inteiros separados por vírgula'
    } else {
      return 'ok ✓'
    }
  }

  onNew() {
    this.result = null
    this.numbersForm.reset()
  }
}