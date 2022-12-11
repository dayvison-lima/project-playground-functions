// Desafio 1 - Crie a função compareTrue

const compareTrue = (param1, param2) => param1 === true && param2 === true;

// Desafio 2 - Crie a função splitSentence

const splitSentence = (frase) => frase.split(" ");

console.log(splitSentence('go Trybe'));
console.log(splitSentence('Vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 3 - Crie a função concatName

function concatName(array){
 let firstItem = array[0];
 let lastItem = array[array.length - 1];
 return `${lastItem}, ${firstItem}`; 
};

// Desafio 4 - Crie a função footballPoints

function footballPoints(wins, ties){
  let win = wins * 3;
  let tie = ties;
  let points = win + tie;
  return points;

};

// Desafio 5 - Crie a função highestCount

const arrayteste = [9, 1, 2, 3, 9, 5, 7];

function highestCount(array){

  const maiorNum = 0; 
  

  for(index = 0; index < array.length; index += 1){
    
    if(array[index] > maiorNum){
      maiorNum = array[index];
    
    } 
  }

  return MaiorNum;

};

highestCount(arrayteste);

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas

function calcTriangleArea(base, height){
  const resultadoTriangulo = (base*height)/2;
  return resultadoTriangulo;
}

function calcRectangleArea(base, height){
  const resultadoRetangulo = (base*height);
  return resultadoRetangulo;
}

function calcAllAreas(base, height, form){
  const valorDaArea = form;
  
  if(valorDaArea === "triângulo"){
    const calc = calcTriangleArea(base, height);
    console.log(`O valor da área do triângulo é de: ${calc}`);
  } else if(valorDaArea === "retângulo"){
    const calc = calcRectangleArea(base, height);
    console.log(`O valor da área do retângulo é de: ${calc}`);
  } else{
    console.log(`Não foi possível fazer o cálculo, insira uma forma geométrica válida`);
  }
}



// Desafio 7 - Crie a função catAndMouse

// Desafio 8 - Crie a função fizzBuzz

// Desafio 9 - Crie a função encode e a função decode

// Desafio 10 - Crie a função techList

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
