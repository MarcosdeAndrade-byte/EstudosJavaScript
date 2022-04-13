# O que é JavaScript?

JavaScript é uma linguagem de programação que permite a você \
criar conteúdo que se atualiza dinamicamente, controlar multimídias, \
imagens animadas, e tudo o mais que há de interessante.

## O que ele pode fazer?
- Armazenar conteúdo útil em variáveis.
- Operações com pedaços de texto (conhecidos como "strings" em programação).
- Executar o código em resposta a determinados eventos que ocorrem em uma página da Web.

## Um pouco mais...
O que é ainda mais empolgante é a funcionalidade construída no topo do núcleo da linguagem \
JavaScript. As APIs (Application Programming Interfaces - Interface de Programação de Aplicativos) \
 proveem a você superpoderes extras para usar no seu código JavaScript. 

APIs são conjuntos prontos de blocos de construção de código que permitem que um desenvolvedor \
implemente programas que seriam difíceis ou impossíveis de implementar. Eles fazem o mesmo para a \
programação que os kits de móveis prontos para a construção de casas - é muito mais fácil pegar os painéis \
prontos e parafusá-los para formar uma estante de livros do que para elaborar o design,sair e encontrar \
a madeira,cortar todos os painéis no tamanho e formato certos, encontrar os parafusos de tamanho correto e \
depois montá-los para formar uma estante de livros. 

## O que JavaScript está fazendo na sua página web?
Aqui nós vamos realmente começar a ver algum código, e enquanto \
fazemos isso vamos explorar o que realmente acontece quando você \
roda algum código JavaScript na sua página.

Vamos recapitular brevemente a história do que acontece quando você carrega uma página web em um navegador \
(falamos sobre isso no nosso artigo Como o CSS funciona). Quando você carrega uma página web no seu navegador, \
você está executando seu código (o HTML, CSS e JavaScript) dentro de um ambiente de execução (a guia do navegador). \
Isso é como uma fábrica que pega a matéria-prima (o código) e transforma em um produto (a página web). 

Um uso muito comum do JavaScript é modificar dinamicamente HTML e CSS para atualizar uma interface do usuário, \
por meio  da API do Document Object Model (conforme mencionado acima). Observe que o código em seus documentos \
web geralmente é carregado e executado na ordem em que aparece na página. Se o JavaScript carregar e tentar executar \
antes do carregamento do HTML e CSS afetado, poderão ocorrer erros. Você aprenderá maneiras de contornar isso mais \
adiante neste artigo, na seção Estratégias de carregamento de scripts. 

## Segurança do navegador
Cada guia do navegador tem seu próprio espaço para executar código (esses espaços são chamados de "ambientes de execução", \
 em termos técnicos) — isso significa que na maioria dos casos o código em cada guia está sendo executado separadamente, \
 e o código em uma guia não pode afetar diretamente o código de outra guia — ou de outro website. Isso é uma boa medida de segurança \
 — se esse não fosse o caso, então hackers poderiam começar a escrever código para roubar informações de outros websites, e fazer outras coisas más. 

## Ordem de execução do JavaScript

~~~
const para = document.querySelector('p'); 
para.addEventListener('click', atualizarNome);

function atualizarNome() {
  let nome = prompt('Informe um novo nome:');
  para.textContent = 'Jogador 1: ' + nome;
}
~~~

## Código interpretado x compilado
Você pode ouvir os termos interpretado e compilado no contexto da programação. JavaScript é uma linguagem interpretada \
— o código é executado de cima para baixo e o resultado da execução do código é imediatamente retornado. Você não tem \
que transformar o código em algo diferente antes do navegador executa-lo. 

## Lado do servidor x Lado do cliente
Você pode também ouvir os termos lado do servidor (server-side) e lado do cliente (client-side), especialmente no contexto \
de desenvolvimento web. Códigos do lado do cliente são executados no computador do usuário — quando uma página web é visualizada, \
o código do lado do cliente é baixado, executado e exibido pelo navegador. Nesse módulo JavaScript nós estamos explicitamente \
falando sobre JavaScript do lado do cliente.

Códigos do lado do servidor, por outro lado, são executados no servidor e o resultado da execução é baixado e exibido no navegador. \
Exemplos de linguagens do lado do servidor populares incluem PHP, Python, Ruby, e ASP.NET. E JavaScript! JavaScript também pode ser \
usada como uma linguagem server-side, por exemplo, no popular ambiente Node.js 

## Código dinâmico x estático
A palavra dinâmico é usada para descrever tanto o JavaScript client-side como o server-side — essa palavra se refere a habilidade \
de atualizar a exibição de uma página web/app para mostrar coisas diferentes em circunstâncias diferentes, gerando novo conteúdo  \
como solicitado. Código do lado do servidor dinamicamente gera novo conteúdo no servidor, puxando dados de um banco de dados, enquanto  \
que JavaScript do lado do cliente dinamicamente gera novo conteúdo dentro do navegador do cliente, como criar uma nova tabela HTML com  \
dados recebidos do servidor e mostrar a tabela em uma página web exibida para o usuário. Os significados são ligeiramente diferentes nos  \
dois contextos, porém relacionados, e ambos (JavaScript server-side e client-side) geralmente trabalham juntos. \

Uma página web sem atualizações dinâmicas é chamada de estática — ela só mostra o mesmo conteúdo o tempo todo.

## Como você adiciona JavaScript na sua página?
O JavaScript é inserido na sua página de uma maneira similar ao CSS. Enquanto o CSS usa o elemento <link> \
para aplicar folhas de estilo externas e o elemento <style> para aplicar folhas de estilo internas, o JavaScript \
só precisa de um amigo no mundo do HTML — o elemento <script>. Vamos aprender como funciona. 

~~~JavaScript interno
<script>
   O JavaScript fica aqui
</script>
 ~~~
 
~~~JavaScript externo
<script src="script.js" ></script>
~~~
 
## Manipuladores de JavaScript inline

~~~
function criarParagrafo() {
  let para = document.createElement('p');
  para.textContent = 'Você clicou o botao!';
  document.body.appendChild(para);
}
 ~~~
 
~~~
<button onclick="criarParagrafo()">Me clique!</button>
~~~

Podemos utilizar os querySelectorAll para modificar todos os elementos de uma página
