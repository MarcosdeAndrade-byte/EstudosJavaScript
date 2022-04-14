/*
Corrigindo a capitalização
Neste exercício, temos os nomes das cidades no Reino Unido, mas a capitalização está toda desarrumada. Nós queremos que você as altere para que elas sejam todas minúsculas, exceto pela primeira letra maiúscula. Uma boa maneira de fazer isso é:

Converta toda a cadeia contida na variável de entrada para minúscula e armazene-a em uma nova variável.
Pegue a primeira letra da string nesta nova variável e armazene-a em outra variável.
Usando esta última variável como substring, substitua a primeira letra da string em minúsculas pela primeira letra da string em minúsculas alterada para maiúscula. Armazene o resultado desse procedimento de substituição em outra nova variável.
Altere o valor da variável  result para igual ao resultado final, não a input.
*/

var mensagens = ["lonDon","ManCHESTer","BiRmiNGHAM","liVERpoOL"];

for(let i = 0;i < mensagens.length;i++){
    let minuscula = mensagens[i].toLowerCase();
    let maiuscula = mensagens[i].toUpperCase();
    console.log(maiuscula.charAt(0) + minuscula.slice(1));
}