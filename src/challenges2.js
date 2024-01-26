/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable complexity */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-lines-per-function */

// Desafio 11 - Crie a função generatePhoneNumber

function generatePhoneNumber(array) {
  let phoneNumber = '(xx) xxxxx-xxxx';
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (num of array) {
    let repetido = 0;
    phoneNumber = phoneNumber.replace('x', num);

    if (num < 0 || num > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    for (num2 of array) {
      if (num2 === num) {
        repetido += 1;
      }
    }
    if (repetido >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return phoneNumber;
}

// Desafio 12 -  Crie a função triangleCheck

function triangleCheck(lineA, lineB, lineC) {
  const isValidSide = (a, b, c) => a < b + c && a > Math.abs(b - c);

  return isValidSide(lineA, lineB, lineC)
  && isValidSide(lineB, lineA, lineC)
  && isValidSide(lineC, lineA, lineB);
}

// Desafio 13 - Crie a função hydrate

function hydrate(bebidas) {
  const numbers = bebidas.match(/\d+/g);

  if (!numbers) {
    return '0 copos de água';
  }

  const totalCups = numbers.reduce((a, b) => a + parseInt(b, 10), 0);

  const cupsText = totalCups === 1 ? 'copo' : 'copos';

  return `${totalCups} ${cupsText} de água`;
}

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
