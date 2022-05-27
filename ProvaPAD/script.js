//Questão 1
var result = someFun({someProperty: 'interview'}, function(value){
    console.log(`This pointing to ${value}`);
});
console.log('Result is', result);

function someFun(var1, var2){
    var2(var1.someProperty);
    return 1;
}

//Questão2
var someFn = function(num1) 
    {
        var soma = num1;
        return function (num2) 
    {
        soma += num2;
        return soma;
    }
    }
    var counter  = someFn(1)
    console.log("First call", counter(3));
    console.log("second call", counter(1));
    console.log("Third call", counter(5));
  
//Questão4
  var a = 5;
  var b = 10;
  
  if(a == 5){
    let a = 4;
    var b = 1;
    console.log(a);
    console.log(b);
  }
  console.log(a);
  console.log(b);
  //O resultado apresentado sera: 4,1,5,1

  //Questão5
function Num(numero)
{
  for(var i = 1; i <= 10; i++)
  {
   mult = i * numero;
   console.log(mult);
  }
}
Num(2);
