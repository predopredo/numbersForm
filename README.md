#Baseado no problema 1 do Project Euler ( https://projecteuler.net/problem=1 )

Criei um componente que possui um formulário com 3 inputs, onde o usuário insere numeros pra definir um intervalo e um ou mais números como múltiplos. 

Os valores do formulários são enviados para um serviço (uma classe separada) que usa métodos pra calcular a soma dos múltiplos dos números fornecidos, dentro do intervalo fornecido. Ao clicar em "calcular" o resultado é mostrado e o usuário pode clicar em "novo" para resetar tudo e realizar outra soma. 

Para alternar entre o display do formulário e do resultado, usei a diretiva *ngIf do angular e passando a propriedade "result" pra controlar o que é mostrado. 

Usei o ReactiveForms do angular pra estruturar e validar o formulário. Usei também bootstrap 4.3 como framework de CSS. Criei também feedback visual para a validação, usando as diretivas e classes CSS criadas pelo Angular, além de uma função que recebe o valor dos inputs, analisa e retorna uma mensagem pra notificar o usuário se o preenchimento está correto ou não.

# Multiples

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
