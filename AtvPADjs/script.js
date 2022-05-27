//1 – Crie uma função que retorna a string “Olá, ” concatenada com um argumento text (a ser passado para a função) e com ponto de exclamação “!” no final
var text = 'Mário';
function questao1(text){
    console.log("Olá " + text + "!");
}
questao1(text);

//2 – Crie uma função que dado dois valores e uma Callback (passados como parâmetros), mostre no console a soma, subtração, multiplicação ou divisão desses valores, dependendo da função Callabck
function questao2(valor1, valor2, callback){
    console.log(callback(valor1, valor2));
}
questao2(4, 2, function(val1, val2){
    return val1 + val2;
});

questao2(4, 2, function(val1, val2){
    return val1 - val2;
});

questao2(4, 2, function(val1, val2){
    return val1 * val2;
});

questao2(4, 2, function(val1, val2){
    return val1 / val2;
}); 

//3 – Crie uma função que recebe um valor e uma callback como parâmetro, que retorna uma outra função que recebe um parâmetro e chama essa callback que verifica se um número inteiro passado na primeira função como parâmetro é divisível por um outro numero passado pela função interna e retorne true ou false.
function questao3(valorX, callback) {
	return function funcParametro(valorY){
        callback(valorX, valorY)
	};
}
var v1 = questao3(25, function(valorX, valorY) {
  if(valorX%valorY == 0){
    console.log('true');}
  else{
    console.log('false');}
});
v1(5);

//4 – Crie uma função que recebe um número (de 1 a 12) e retorne o mês correspondente como uma string. Por exemplo, se a entrada for 2, a função deverá retornar “fevereiro”, pois este é o 2° mês.
function questao4(num){
    if(num == 1){
        console.log('Janeiro');}
    if(num == 2){
        console.log('Fevereiro');}
    if(num == 3){
        console.log('Março');}
    if(num == 4){
        console.log('Abril');}
    if(num == 5){
        console.log('Maio');}
    if(num == 6){
        console.log('Junho');}
    if(num == 7){
        console.log('Julho');}
    if(num == 8){
        console.log('Agosto');}
    if(num == 9){
        console.log('Setembro');}
    if(num == 10){
        console.log('Outubro');}
    if(num == 11){
        console.log('Novembro');}
    if(num == 12){
        console.log('Dezembro');}
}
questao4(2);
//5 – Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo dependendo da função Callback.
var numero1 = 5;
var numero2 = 2;
function questao5(numero1, numero2){
    var resultMaior = numero1 > numero2;
    var resultIgual = numero1 == numero2;
    if(resultMaior == true){
        console.log('Maior');
    }
    //else if(resultIgual == true){
    //    console.log('Igual');
    ///}
    else{
        console.log('Menor');
    }
}
function questao5(numero1, numero2, callback)
{ 
  return callback(numero1, numero2);
}

questao5(5, 2, function(numero1, numero2){
  if (numero1 > numero2) {
    console.log("Maior");
  }
  else if(numero1 == numero2){
    console.log("igual");
  }
  else{
    console.log("Menor");
  }
});