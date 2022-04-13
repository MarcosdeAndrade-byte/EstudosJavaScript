# Funções
Funções são blocos reutilizáveis de código que você pode escrever uma vez e executá-lo de novo e de novo, \
eliminando a necessidade de repetir o código todas as vezes.

Exemplo de função: 
~~~
function conferirPalpite() {
  alert('Eu sou um placeholder');
}
~~~

Como executar a função:
~~~
conferirPalpite();
~~~

~~~
Nota: Você irá aprender muito mais sobre funções mais tarde no curso.
~~~

# Operadores
Os operadores JavaScript nos permite realizar testes, fazer cálculos matemáticos, unir sequências de texto, e outras coisas do tipo.
<table>
    <tr>
        <td>Operador</td>
        <td>Nome</td>
        <td>Exemplo</td>
    </tr>

   <tr>
        <td>+</td>
        <td>adição</td>
        <td>6+p</td>
    </tr>
    <tr>
        <td>-</td>
        <td>Subtração</td>
        <td>20-5</td>
    </tr>
    <tr>
        <td>*</td>
        <td>Multiplicação</td>
        <td>3*7</td>
    </tr>
    <tr>
        <td>/</td>
        <td>Divisão</td>
        <td>2/2</td>
    </tr>
</table>

Você também pode usar o operador + para unir sequências de texto (isso é chamado de concatenação em programação). \
Tente inserir as seguintes linhas: 

~~~
var nome = 'Bingo';
nome;
var ola = ' diz olá!';
ola;
var cumprimento = nome + ola;
cumprimento;
~~~

Há também alguns atalhos para operadores disponíveis, chamados de operadores de atribuição ampliada (ou atribuição composta). Por exemplo, se você quer adicionar uma nova sequência de texto à uma existente e retornar o resultado, você pode fazer o seguinte:

~~~
nome += ' diz olá!';
~~~

Isso é equivalente a:

~~~
nome = nome + ' diz olá!';
~~~

<table>
    <tr>
        <td>Operador</td>
        <td>Nome</td>
        <td>Exemplo</td>
    </tr>

   <tr>
        <td>===</td>
        <td>Igualdade estrita (é estritamente o mesmo?)	</td>
        <td>5 === 2 + 4</td>
    </tr>
    <tr>
        <td>!==</td>
        <td>Não-igualdade (não é o mesmo?)</td>
        <td>'Chris' !== 'Ch' + 'ris'</td>
    </tr>
    <tr>
        <td><</td>
        <td>Menor que</td>
        <td>10 < 6</td>
    </tr>
    <tr>
        <td>></td>
        <td>Maior que</td>
        <td>10 > 20</td>
    </tr>
</table>