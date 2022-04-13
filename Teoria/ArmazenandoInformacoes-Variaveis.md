# O que é uma variável?

Uma variável é um container para um valor, como um número que podemos usar em uma operação de adição, \
ou uma sequência de texto que possamos usar como parte de uma oração. Mas uma coisa especial a respeito \
das variáveis é que seu conteúdo pode mudar

~~~
var variavel1 = 10 + 10
variavel1 = "Olá mundo"
variavel1 = "1" + 1
~~~

**Variáveis podem ser entendidas como caixas,onde podemos guardar uma infinidade de coisas**

# Declarando uma variável
Para usar uma variável primeiro tem que criá-la — mais precisamente, chamamos isso de declarar a variável. \
Para fazê-lo digitamos a palavra chave var seguido do nome que desejamos dar à variável: 

~~~
var meuNome
var minhaIdade
~~~

~~~
Nota: No JavaScript, todas as intruções em código deve terminar com um ponto e vírgula (;) 
—seu código pode até funcionar sem o ponto e vírgula em linhas únicas, mas provavelmente não 
irá funcionar quando estiver escrevendo várias linhas de código juntas. Tente pegar o hábito 
de sempre incluir o ponto e vírgula
~~~

Uma variável pode ser do tipo,indefinido.Ou seja,ela está vazia! Não possui nehum tipo de dado.

# Inicializando uma variável
Podemos inicializar uma variável da seguinte maneira:
~~~
var meuNome = 'Roberto'
variável meuNome recebe roberto
~~~
ou
~~~
var meuNome;
meuNome = 'Roberto'
~~~

# A diferença entre var e let
Para começar, se você escrever um programa JavaScript de várias linhas que declare e inicialize uma variável, \
poderá realmente declarar uma variável com var depois de inicializá-la e ainda funcionará. Por exemplo: 
~~~
meuNome = 'Chris';

function logNome() {
  console.log(meuNome);
}

logNome();

var meuNome;
~~~

Como as declarações de variáveis (e declarações em geral) são processadas antes de qualquer código seja executado, \
declarar uma variável em qualquer lugar no código é equivalente a declarar no inicio. Isso também significa que uma \
variável pode aparecer para ser usada antes dela ser declarada. Esse comportamento é chamado de "hoisting", a variável \
é movida para o inicio da função ou do código global.

Hoisting não funciona mais com __let__. Se mudássemos de __var__ para __let__ no exemplo acima, teríamos um erro.

# Tipos de variáveis

## Números
Você pode armazenar números em variáveis, tanto números inteiros, como por exemplo 30 (também chamados de integers) \
como números decimais, por exemplo 2.456 (também chamados de floats ou floating point numbers). Você não precisa declarar \
tipos de variáveis no JavaScript, diferentemente de outras linguagens de programação. Quando você atribui a uma variável \
o valor em número, você não inclui as aspas:

~~~
var minhaIdade = 18
~~~

# Strings (cadeias de texto)
Strings são sequências de texto. Quando você dá a uma variável um valor em texto (string), você precisa envolver o texto \
em aspas simples ou duplas; caso contrário, o JavaScript vai tentar interpretá-lo como sendo outro nome de variável. 

~~~
var despedidaGolfinho = 'Até logo e obrigado por todos os peixes!'
~~~

# Booleans (boleanos)
Booleans são valores verdadeiro/falso (true/false) — eles podem ter dois valores, true (verdadeiro) ou false (falso). \
São geralmente usados para verificar uma condição, que em seguida o código é executado apopriadamente. \
Por exemplo, um caso simples seria:

~~~
var estouVivo = true;
~~~

Enquanto na realidade seria utlizado mais da seguinte forma:
~~~
var teste = 6 < 3;
~~~

Esse exemplo está usando o operador "menor que" (<) para testar se 6 é menor que 3. Como você pode esperar, \
irá retornar false (falso), porque 6 não é menor que 3! Você aprenderá mais sobre tais operadores mais tarde no curso. 

# Arrays
Um array é um único objeto que contém valores múltiplos inseridos entre colchetes e separados por vírgulas. \
Tente inserir as seguintes linhas de código no seu console:

~~~
var meuNomeArray = ['Chris', 'Bob', 'Jim'];
var meuNumeroArray = [10,15,40];
~~~
Uma vez que esses arrays estejam definidos, você pode acessar cada um de seus valores através de \
sua localização dentro do array. Tente essas linhas: 

~~~
meuNomeArray[0]; // deve retornar 'Chris'
meuNumeroArray[2]; // deve retornar 40
~~~

Os colchetes especificam um valor do índice correspondente à posição do valor que você deseja retornado. \
Você talvez tenha notado que os arrays em JavaScript são indexados a partir do zero: o primeiro elemento \
está na posíção 0 do índice.

# Objetos
Em programação, um objeto é uma estrutura de código que representa um objeto da vida real. Você pode ter um \
simples objeto que representa um estacionamento de carro contendo informações sobre sobre sua largura e \
comprimento, ou você poderia ter um objeto que representa uma pessoa, e contém dados sobre seu nome, altura, \
 peso, que idioma ela fala, como dizer olá a ela, e mais.

~~~
var cachorro = { nome : 'Totó', raca : 'Dálmata' };
~~~

Para obter a informação armazenada no objeto, você pode usar a seguinte sintaxe:

~~~
cachorro.nome
~~~

# Digitação permissiva
Não precisamos declarar o valor de uma variável igual faziamos no Java. \
JavaScript é uma "dynamically typed language" ele identifica automaticamente \
qual o tipo de variável.

~~~
var meuNumero = '500'; // opa, isso continua sendo uma string
typeof(meuNumero);
meuNumero = 500; // bem melhor — agora isso é um número
typeof(meuNumero)
~~~

# Constants em JavaScript
Muitas linguagens de programação têm o conceito de constant,um valor que uma vez declarado não pode ser alterado. \
Nos primeiros dias do JavaScript, não existiam constants. No JavaScript moderno, temos a palavra-chave const,que \
nos permite armazenar valores que nunca podem ser alterados:

~~~
const diasNaSemana = 7;
const horasNoDia = 24;
~~~