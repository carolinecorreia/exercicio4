//Uma comerciante comprou alguns produtos e quer revender com lucro de 45% se o valor da compra foi menor que 20 reais. 
//Caso contrário, o lucro será de 30%. O valor deve ser passado para o programa que deverá retornar o valor da venda.

//Exemplo: 
//produto: R$ 18,00 -> 18 * 45% -> O seu produto deve ser vendido por R$ 26,10
//produto: R$ 21,00 -> 21 * 30% -> O seu produto deve ser vendido por R$ 27,30




let valoraPagar = parseInt(prompt("Digite o valor do produto: "));
  console.log(valoraPagar);

const valorVenda1 = valoraPagar * (45/100) + valoraPagar;
const valorVenda2 = valoraPagar * (30/100) + valoraPagar;

if(valoraPagar < 20){
  console.log(`O valor de venda é ${valorVenda1}: `)
}else{
  console.log(`O valor de venda é ${valorVenda2}: `)
}