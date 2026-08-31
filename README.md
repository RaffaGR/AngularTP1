#Angular TP1

A1 > Instalação do angular e inicialização e explicação da inicialização, aprendemos tbm a base da organização so da raiz automaticamente pela inicialização e explicação dela e alguns comandos como:
> npm install -g @angular/cli (instalar, mas o recomendado é atualizar o node pra versão node 24 primeiro e npm 12 pra levar o angular ao padrão q iriamos mexer que é o 22) [direto no vs apos atualizar o node ainda costuma falhar pq o code demora muito para carregar o cmd dele, atualiza pelo cmd direto da maquina]
> ng version (ver a versão)
ng new world (para criar a pasta onde aceitamos varias coisas e recusamos a IA)
cd world
ng serve --open
Exercicios 1 e 2: 
1º fazer o world aparecer na pagina 
2º Criar um tutorial explicando como criar endpoints de um CRUD usando Typescript, NodeJS e express

extra q eu uso bastante:
> npm start
A2 > aprender a organizaçao dos compontentes, que seria core, feature, shared, aprendemos a importar componentes e como funciona e alguns comandos para criar eles de forma organizada como:
ng new loja-tp1-angular --style=css --no-ssr (criar o projeto atalho direto)
code loja-tp1-angular (abrir a pasta via vscode)
ng generate component core/header (ou ng g c core/header (que é um atalho ára criar o componente de forma organizada))

A3 > Aprendemos a interpolar/inserir variaveis de diversas no angular, via componente usando signal input/output e a variavel dinamica direto que tinha sido realizado via exercicio anteriormente e criamos o componente quantidade-controle e uma interface produto, mas ai pausamos, o card-produto 
Comndos aprendido:
ng g i model/produto  (interface do produto)
Exercicios 1 e 2:
1º criar componente card-produto
2º criar componente shared quantidade

A4 > Continuamos a a3, criamos o card do produto, integramos os controle de quantidade nela e substituimos o controle de quantidade la no app para por ela, segunda parte da aula foi criar a lista de card produtos (fico com um bug no css q o prof deixo pra proxima aula e mexi no .conteudo css mexi de 800 para 300)
extra: desativar: Inlay Hints (que atrapalha com as dicas)

A5 > alinhamos os css para corrigir bug no max-width, entao começamos adicionado um atributo ao modal do produto "estado", entao aprendemos a usar os @ com if, swith case e for, para manipar o surgimento de conteudo de forma dinamica de acordo com valores das variavels focamos aplicar isso nos cards do produto, entao na parte 2 da aula, vimos pipes, vamos usar para criar um porcentual no valor e aplicamos nos cards
ng generate pipe shared/pipes/desconto === isso vira desconto-pipe
Cometi algum erro no css do card-produto.html, estou tentando descobri, entao o prof passou alguns exercicios  (problema resolvido, era ordem das divs)

ex1: Crie um pipe “truncar”, que deverá fazer o truncamento da descrição do produto. A quantidade de caracteres deverá ser parametrizável, bem como o sinal que deve aparecer quanto for trucado.
ng generate pipe shared/pipes/truncar
Feito

ex2: Considere o código do print da aula do lista-produtos.html. Reescreva-o sem @if/else, mas usando o @empty do @for.
Feito

ex3: Atualmente é possível um produto estar esgotado, mas com o selo de promoção. Impeça que isso aconteça
Feito