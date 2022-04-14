/*
Filtrando mensagens de saudação
No primeiro exercício, começaremos com simplicidade - temos várias mensagens de cartão, 
mas queremos classificá-las para listar apenas as mensagens de Natal. Queremos que você 
preencha um teste condicional dentro da estrutura if (...), para testar cada string e 
apenas imprimi-la na lista se for uma mensagem de Natal.

Primeiro pense em como você poderia testar se a mensagem em cada caso é uma mensagem de Natal. Qual string está presente em todas essas mensagens e que método você poderia usar para testar se ela está presente?

Em seguida, você precisará escrever um teste condicional do formulario operando2 operador operando1. A coisa à esquerda é igual à coisa à direita? Ou neste caso, o método chama à esquerda retorna o resultado à direita?

Dica: Nesse caso, é provavelmente mais útil testar se a chamada do método não é igual a um determinado resultado.
*/

let mensagens = ["Happy Birthday!","Merry Christmas my love","A happy Christmas to all the family","You're all I want for Christmas","Get well soon"];

for(let index = 0;index < mensagens.length;index++){
    if(mensagens[index].indexOf("Christmas") != -1){
       console.log(mensagens[index]);
    }
}