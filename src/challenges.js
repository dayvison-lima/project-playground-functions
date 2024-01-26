// Desafio 1 - Crie a função compareTrue

const compareTrue = (param1, param2) => param1 && param2;

// Desafio 2 - Crie a função splitSentence

const splitSentence = (frase) => frase.split(' ');

// Desafio 3 - Crie a função concatName

function concatName(array) {
  let firstItem = array[0];
  let lastItem = array[array.length - 1];
  return `${lastItem}, ${firstItem}`;
}

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 5 - Crie a função highestCount

const highestCount = (array) => {
  const max = Math.max(...array);
  const filteredArrayMax = array.filter((num) => num === max);
  return filteredArrayMax.length;
};

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

const calcTriangleArea = (base, height) => (base * height) / 2;

const calcRectangleArea = (base, height) => (base * height);

const calcAllAreas = (base, height, form) => {
  let resultado = '';
  if (form === 'triângulo') {
    resultado = `O valor da área do triângulo é de: ${(base * height) / 2}`;
  } else if (form === 'retângulo') {
    resultado = `O valor da área do retângulo é de: ${base * height}`;
  } else {
    resultado = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
  return resultado;
};

// Desafio 7 - Crie a função catAndMouse

const catAndMouse = (mouse, cat1, cat2) => {
  const cat1Position = Math.abs(mouse - cat1);

  const cat2Position = Math.abs(mouse - cat2);

  if (cat1Position < cat2Position) {
    return 'cat1';
  }
  if (cat2Position < cat1Position) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
};

// Desafio 8 - Crie a função fizzBuzz

const fizzBuzz = (array) => {
  const finalArray = [];
  for (let index in array) {
    if ((array[index] % 3) === 0 && (array[index] % 5) === 0) {
      finalArray.push('fizzBuzz');
    } else if (array[index] % 3 === 0 && (array[index] % 5) !== 0) {
      finalArray.push('fizz');
    } else if ((array[index] % 5) === 0 && (array[index] % 3) !== 0) {
      finalArray.push('buzz');
    } else if ((array[index] % 3) !== 0 && (array[index] % 5) !== 0) {
      finalArray.push('bug!');
    }
  }
  return finalArray;
};

// Desafio 9 - Crie a função encode e a função decode

const firstCode = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

const encode = (string) => string.replace(/[aeiou]/g, (match) => firstCode[match]);

const secondCode = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};

const decode = (string) => string.replace(/[1-5]/g, (match) => secondCode[match]);

// Desafio 10 - Crie a função techList

const techList = (techs, nome) => {
  let result = [];
  if (techs.length === 0) return [];
  techs
    .sort()
    .map((tecno) => {
      result.push({ tech: tecno, name: nome });
    });
  return result;
};

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
