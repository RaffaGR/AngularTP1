#Angular TP1

A1 > Instalação do angular e inicialização e explicação da inicialização, aprendemos tbm a base da organização so da raiz automaticamente pela inicialização e explicação dela e alguns comandos como:
npm install -g @angular/cli (instalar, mas o recomendado é atualizar o node pra versão node 24 primeiro e npm 12 pra levar o angular ao padrão q iriamos mexer que é o 22)
ng version (ver a versão)
ng new world (para criar a pasta onde aceitamos varias coisas e recusamos a IA)
cd world
ng serve --open
Exercicios 1 e 2: 
1º fazer o world aparecer na pagina 
2º Criar um tutorial explicando como criar endpoints de um CRUD usando Typescript, NodeJS e express

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