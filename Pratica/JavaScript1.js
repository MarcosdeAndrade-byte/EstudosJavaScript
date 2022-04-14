/*
Faça um programa que leia o nome de um vendedor, seu salário fixo e o total da venda feito por si mesmo no mês (em dinheiro). Considerando que este vendedor recebe 15% sobre todos os produtos vendidos, escreva o salário final (total) deste vendedor no final do mês, com duas casas decimais.

- Não se esqueça de imprimir o final da linha após o resultado, caso contrário você receberá "Erro de apresentação".

- Não se esqueça dos espaços em branco.

Entrada
O arquivo de entrada contém um texto (primeiro nome do empregado), e dois valores de dupla precisão, que são o salário do vendedor e o valor total vendido por ele/ ela.

Saída
Imprima o salário total do vendedor, de acordo com o exemplo dado.

Amostras de entrada	Amostras de saída
JOÃO
500,00
1230,30

TOTAL = R$ 684,54

PEDRO
700.00
0.00

TOTAL = R$ 700,00

MANGOJATA
1700,00
1230,50

TOTAL = R$ 1884,58
*/

let name = "JOÃO",salarioFixo = 1700.00,TotalVenda = 1230.50,salarioFinal;

salarioFinal = TotalVenda * 15 / 100 + salarioFixo;

console.log(salarioFinal.toFixed(2));