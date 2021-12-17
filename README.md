```diff
+                     Bootcamp - Todas em Tech, turma 14° de Back-End.
```

<br>

<h1 align="center">
  <img src="foto" width="600">
<p align="center"><p>
</h1>

## <strong> Viver sem limites </strong> é um projeto - API, que foi desenvolvido para a conclusão do curso de Backend [{Reprograma}](https://reprograma.com.br/).


## **O PROJETO FINAL**  

<p align="justify"> É uma iniciativa para ajudar  pessoas que precisam de muletas, andadores, cadeiras de rodas e equipamentos afins, mas não tem recursos para comprar,  assim esta API vai unir quem tem esses itens disponíveis com quem está precisando deles no momento.
<p align="justify"> Desenvolver um aplicativo que conecta quem doa com quem precisa. O aplicativo armazena as informações de quem oferece itens para doar e de quem precisa deles para criar um banco de dados em que seja possível cruzar esses interesses, sem a necessidade de armazenar os itens. 


<br>

## **Descrição da API - VIVER SEM LIMITES**

<p align="justify">A construção deste projeto consiste em uma API RESTFull fundamentada no CRUD, integrado com o banco de dados NoSQL, sendo possível listar, cadastrar, atualizar e deletar cadastros dos doadores de equipamentos para deficientes.

- Definição CRUD: 
    
      CREATE (CRIAR)
      READ (LER, CONSULTAR)
      UPDATE (ATUALIZAR) 
      DELETE (DESTRUIÇÃO, REMOÇÃO)

<p align="justify">O  projeto é uma API REST que irá permitir que pessoas que tenha em casa itens como cadeiras de rodas, de banho, descanso, muletas, bengalas

<br>

## **Link**
FALTA COLOCAR O LINK
- [Apresentação](colocar link aqui)

<br>

## **Funcionalidades**

- Incentivar a doação de itens que estejam em bom estado e possa ser usado por outras pessoas com as mesmas condições de deficiência
- Listar todas as pessoas que estão cadastradas no sistema
- Cadastrar itens e doadores
- Atualizar lista de doadores e equipamentos disponíveis
- Deletar os itens já doados que não estão mais disponíveis

  

<br>

## **Tecnologias Utilizadas**

Para a construção deste projeto, as seguintes tecnologias foram utilizadas:

<p  align="justify">
<a  href="https://www.javascript.com/"><img  alt="Java Script"  src="https://img.shields.io/badge/JavaScript-purple">
<a  href="https://git-scm.com/"><img  alt="Git version"  src="https://img.shields.io/badge/Git/GitHub-purple">
<a  href="https://nodejs.org/pt-br/"><img  alt="Node version"  src="https://img.shields.io/badge/NodeJS-purple">
<a  href="https://www.mongodb.com/cloud/atlas"><img  alt="Node version"  src="https://img.shields.io/badge/MongoDB%20Atlas-purple">
<a  href="https://www.postman.com/"><img  alt="Postman"  src="https://img.shields.io/badge/Postman-purple">
<a  href="https://code.visualstudio.com/"><img  alt="VsCode"  src="https://img.shields.io/badge/VSCode-purple">
<a  href="https://dashboard.heroku.com/apps"><img  alt="Heroku"  src="https://img.shields.io/badge/Heroku-purple">


<br>

## **Bibliotecas Aplicadas**
Para a construção deste projeto, as seguintes bibliotecas foram aplicadas:

<p  align="justify">
<a  href="https://expressjs.com/pt-br/"><img  alt="Express version"  src="https://img.shields.io/badge/express-4.17.1-purple">
<a  href="https://www.npmjs.com/package/nodemon"><img  alt="Nodemon version"  src="https://img.shields.io/badge/nodemon-2.0.6-purple">
<a  href="https://www.npmjs.com/package/dotenv-safe"><img  alt="Dotenv-safe version"  src="https://img.shields.io/badge/dotenv-8.2.0-purple">
<a  href="https://mongoosejs.com/"><img  alt="Mongoose version"  src="https://img.shields.io/badge/mongoose-5.10.17-purple">
<a  href="https://www.npmjs.com/package/cors"><img  alt="npm version"  src="https://img.shields.io/badge/cors-2.8.5-purple">
<a  href="https://www.npmjs.com/"><img  alt="npm version"  src="https://img.shields.io/badge/npm-6.14.6-purple">

</p>


<br>

## **Arquitetura MVC** 
Arquitetura padrão da API Farma Bem:
```
 📁 FARMABEM
   |
   |-  📁 __test__
   |    |- 📑 pharmacy.test.js
   |
   |-  📁 assets
   |    |- 📑 logo_animado_ofic.gif
   |
   |-  📁 src
   |    |
   |    |- 📁 controllers
   |         |- 📑 admController.js
   |         |- 📑 medicineController.js
   |         |- 📑 pharmacyController.js 
   |
   |    |- 📁 database
   |         |- 📑 mongoConfig.js
   |
   |    |- 📁 helpers
   |         |- 📑 auth.js
   |
   |    |- 📁 middlewares
   |         |- 📑 auth.js
   |
   |    |- 📁 models
   |         |- 📑 admSchema.js
   |         |- 📑 medicineSchema.js
   |         |- 📑 pharmacySchema.js
   |
   |    |- 📁 routes
   |         |- 📑 amdRoutes.js 
   |         |- 📑 index.js
   |         |- 📑 medicineRoutes.js
   |         |- 📑 pharmacyRoutes.js
   |
   |    |- 📑 app.js
   
   |   |
   |-  📁 swagger
   |   |- 📑 swagger_output.json
   |
   |- 📑 .env
   |- 📑 .env.example
   |- 📑 .gitignore
   |- 📑 package-lock.json
   |- 📑 package.json
   |- 📑 Procfile
   |- 📑 README.md
   |- 📑 server.js
   |- 📑 swagger.js

```
<br>

## **Instruções para Instalação**

Para intalação desta API, siga o passo a passo conforme abaixo:


- No terminal Git Bash Here, faça o clone da API Farma Bem:

      git clone https://github.com/xeniabarreto/FarmaBem.git

- Se desejar criar modificações no código, crie uma nova branch, senão pule esta etapa:

      git checkout -b nome-da-sua-branch

- Entre na pasta da API Farma Bem:

      cd FarmaBem

- Após entrar na pasta da API FarmaBem, instale todas as dependências: 

      npm install ou npm i

- Finalizado este processo, você estará apto a executar nossa API Farma Bem, utilize o último comando para finalizar:

      npm start

Aos que fizeram implementações para esta API, por gentileza, realize o push e envie uma solicitação de pull request. 

Se você deseja mais informações sobre os comandos no Git Bash, temos uma pronta referência <a href="https://gist.github.com/xeniabarreto/93e05f03d5545ebd61984b11ad079d62">aqui</a>.



<br>

## **Portas**

### Opções de Portas

* Local: http://localhost:8888 - (rodando localmente)

* Heroku: http://farma-bem.herokuapp.com/ - (consumir API)

    * Utilize o [Postman](https://www.postman.com/) ou [Insomnia](https://insomnia.rest/download/) para chamar e testar os endpoints da API localmente ou via Heroku.

<br>

## **Rotas**

### Retorna teste com apresentação 

| Método HTTP  | Tipo Rota | Endpoint                     | Descrição                            |
| ------------ | --------- | ---------------------------- | ------------------------------------ |
| GET          | Pública   | `http://localhost:8888/`     |  Mensagem de apresentação (Index)    |             

<br>

### Manipulação das Rotas das Farmácias:

| Método HTTP  | Tipo Rota | Endpoint                | Descrição                                            |
| ------------ | --------- | ----------------------- | -----------------------------------------------------|
| GET          | Pública   | `/pharmacy/all`         | Retorna todos as farmácias                           |
| GET          | Pública   | `/pharmacy/find_name`   | Retorna uma farmácia específica por nome             |
| GET          | Pública   | `/pharmacy/search`      | Retorna farmácias por filtros múltiplos              |
| GET          | Pública   | `/pharmacy/find/:id`    | Retorna uma farmácia específica por id               |
| POST         | Pública   | `/pharmacy/create`      | Cadastra uma nova farmácia                           |
| PUT          | Pública   | `/pharmacy/update/:id`  | Altera informações de uma farmácia específica por id |
| DELET        | Pública   | `/pharmacy/delete/:id`  | Remove uma farmácia específica por id                |

<br>

### Manipulação das Rotas dos Medicamentos:

| Método HTTP  | Tipo Rota | Endpoint               | Descrição                                           |
| ------------ | --------- | ---------------------- | ----------------------------------------------------|
| GET          | Pública   | `/medicine/all`        | Retorna todos os medicamentos                       |
| GET          | Pública   | `/medicine/filter`     | Retorna medicamentos através de filtros múltiplos   |
| GET          | Pública   | `/medicine/id/:id`     | Retorna um medicamento específico por id            |
| POST         | Pública   | `/medicine/create`     | Cadastra um novo medicamento                        |
| PUT          | Pública   | `/medicine/update/:id` | Altera informações um medicamento específico por id |
| DELET        | Pública   | `/medicine/delete/:id` | Remove um medicamento específico por id             |

<br>

### Manipulação das Rotas dos Administradores:

| Método HTTP  | Tipo Rota | Endpoint          | Descrição                                                |
| ------------ | --------- | ----------------- | ---------------------------------------------------------|
| GET          | Privada   | `/adm/all`        | Retorna todos os administradores                         |
| GET          | Privada   | `/adm/id/:id`     | Retorna um administrador específico por id               |
| POST         | Pública   | `/adm/register`   | Cadastra um novo administrador                           |
| POST         | Pública   | `/adm/login`      | Retorna o login de um administrador                      |
| PUT          | Privada   | `/adm/update/:id` | Altera informações de um administrador específico por id |
| DELET        | Privada   | `/adm/delete/:id` | Remove um medicamento específico por id                  |

<br>

## **Collections**

### Dados para Collection Farmácia

- id: autogerado e obrigatório
- cnpj: texto e obrigatório
- name: texto e obrigatório
- address: texto e obrigatório
- district: texto e obrigatório
- city: texto e obrigatório
- state: texto e obrigatório
- cep: texto e obrigatório
- telephone: texto e obrigatório
- email: texto e obrigatório
- days_open: texto e obrigatório
- hours_of_operation: texto e obrigatório
- terms_of_use: booleano e obriatório
- criadoEm: data gerada automaticamente e obrigatório


### API deverá retornar seguinte JSON:

```jsx

{
    "message": "Farmacia Farma Bem foi cadastrada com sucesso!",
    "savedPharmacy": {
        "cnpj": "04.683.687/0002-65",
        "name": "Farma Bem",
        "address": "Rua da Fé",
        "district": "Bela Vista",
        "city": "São Paulo",
        "state": "São Paulo",
        "cep": "02611-001",
        "telephone": "(11) 2232-8882",
        "email": "farmabem@drogariasp.com.br",
        "days_open": "Segunda a Domingo",
        "hours_of_operation": "Atendimento 24 horas",
        "terms_of_use": true,
        "_id": "61ba9fedf64d7889b8b76a44",
        "createdAt": "2021-12-16T02:09:49.473Z",
        "updatedAt": "2021-12-16T02:09:49.473Z",
        "__v": 0
    }
}

```
 <br>

 ###  Dados para Collection Medicamento

- id: autogerado e obrigatório
- available: booleano e obriatório
- medicine_name: texto e obrigatório
- composition: texto e obrigatório
- batch: texto e obrigatório
- manufacture: texto e obrigatório
- expiration: texto e obrigatório
- controlled_use: booleano e obriatório
- retain_revenue: booleano e obriatório
- pharmacy_name: texto e obrigatório
- pharmacy_address: texto e obrigatório
- district: texto e obrigatório
- pharmacy_city: texto e obrigatório
- pharmacy_state: texto e obrigatório
- cep: texto e obrigatório
- pharmacy_telephone: texto e obrigatório
- pharmacy_days_open: texto e obrigatório
- pharmacy_hours_of_operation: texto e obrigatório
- terms_of_use: booleano e obriatório
- criadoEm: data gerada automaticamente e obrigatório


### API deverá retornar seguinte JSON:

```jsx
{
    "message": "Medicamento Dorflex foi cadastrado com sucesso!",
    "savedMedicine": {
        "available": true,
        "medicine_name": "Dorflex",
        "composition": "dipirona mono-hidratada 300mg / citrato de orfenadrina 35mg",
        "batch": "E5325AG",
        "manufacture": "15/02/2021",
        "expiration": "16/02/2022",
        "controlled_use": false,
        "retain_revenue": false,
        "pharmacy_name": "Farma Bem",
        "pharmacy_address": "Rua das Flores",
        "district": "Bela Vista",
        "pharmacy_city": "SÃO PAULO",
        "pharmacy_state": "SÃO PAULO",
        "cep": "02613-010",
        "pharmacy_telephone": "11 2565-6852S",
        "pharmacy_days_open": "Sedunda a Domingo",
        "pharmacy_hours_of_operation": "24 horas",
        "terms_of_use": true,
        "_id": "61baa4c39e8ea4baba9adae7",
        "createdAt": "2021-12-16T02:30:27.743Z",
        "updatedAt": "2021-12-16T02:30:27.743Z",
        "__v": 0
    }
}
```

<br>

### Dados para Collection Administrador

- id: autogerado e obrigatório
- username: texto e obrigatório
- email: texto e obrigatório
- password: texto e obrigatório
- terms_of_use: booleano e obriatório
- criadoEm: data gerada automaticamente e obrigatório

<br>

### API deverá retornar seguinte JSON:
   
```jsx
{
    "message": "Adm cadastrado com sucesso!",
    "savedUser": {
        "username": "Amanda Sampaio",
        "email": "sampaio_amanda@gmail.com",
        "password": "$2b$10$v.WZBfL5eOAux7QtUZSDzeD5XdKpGWbhBQB.DHgTOgp8pFs8th2Ly",
        "terms_of_use": true,
        "_id": "61baa5cf79311652fbab3124",
        "createdAt": "2021-12-16T02:34:55.966Z",
        "updatedAt": "2021-12-16T02:34:55.966Z",
        "__v": 0
    }
}
```
<br>

## **Melhorias Futuras**

<br>

*  Integrar com o Maps para calcular a distância da farmácia mais próxima do beneficiário; 
*  Implantação de código HTML e CSS para criação de uma interface capaz de possibilitar a interação do usuário com aplicação;
*  Desenvolver uma interface que permita transmitir informações aos usuários sobre manipulação, conservação e descarte adequado de medicamentos.



Toda sugestão de melhoria deste projeto será muito bem-vinda!!!

<br>

##  **Referências**

<h3>

> <a href="https://globoplay.globo.com/v/9803296/">Projeto solidário ajuda reaproveitar medicamentos no RS</p></a>

 > <a href="https://portais.univasf.edu.br/sustentabilidade/noticias-sustentaveis/descarte-de-medicamentos-vencidos-como-e-onde-descartar-corretamente">Universidade Federal do Vale do Rio São Francisco</p></a>

 > <a href="http://aquitemremedio.prefeitura.sp.gov.br/#/"><p align="">Aqui tem remédio</p></a>

 > <a href="https://github.com/letidesi/saudex"><p align="">Inspiração para criação do Readme - Letícia Desidero</p></a>

 > <a href="https://github.com/elisabetealves/reprograma-estante-de-historias"><p align="">Inspiração para criação do Readme - Elisabete Alves</p></a>

  > <a href="https://github.com/priscilaestevao/pretitudes-project-reprograma"><p align="">Inspiração para criação do Readme - Priscila Estevão </p></a> 

</h3>

<br>

##  **Agradecimentos**


<p> AGRADECER AQUI </p>


<p> linkar o insta de quem nao tem linkedin <a href="https://www.instagram.com/may_desiderio/">POR NOME AQUI</a>, desse jeito.</p>

<p>  <a href="https://www.linkedin.com/company/reprogramabr/">{Reprograma}</a>  a  <a href="https://www.linkedin.com/in/amanda-santos-b50200165/">Amanda Leal</a> e <a href="https://www.linkedin.com/in/leticiardesiderio/">Letícia Desiderio</a> .


API foi desenvolvida como Projeto Final para a conclusão do curso de Backend {Reprograma}.

FALTA MAIS GENTE </p>

<br>



## Autora

<br>


<img style="border-radius: 20%;" src="https://unavatar.now.sh/github/xeniabarreto" width="200px;" alt=""/> </td><br> 

<br>

Criado por **Xênia Barreto**.
<br>



  <div>
    <a href="https://www.linkedin.com/in/xênia-barreto-020334209/" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>  
  <a href = "https://github.com/xeniabarreto/"><img src="https://img.shields.io/badge/GitHub-black?style=for-the-badge&logo=github&logoColor=white" target="_blank"></a>
   <a href = "mailto:xeniabarreto22@gmail.com"><img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" target="_blank"></a>
   <a href="https://instagram.com/xeniabarreto" target="_blank"><img src="https://img.shields.io/badge/-Instagram-%23E4405F?style=for-the-badge&logo=instagram&logoColor=white" target="_blank"></a>
 </div>
  

<br>

#### [Início](#sumário) 

<br>
quem doa com quem precisa usar itens que vão desde simples muletas e cadeiras de banho, até complexas cadeiras de rodas e camas hospitalares.

doador
beneficiario


 Calçados:  Arcopédico | Profissional | Diabético | Malhas | Pediátrico | Chinelos




 Cadeira de rodas manual
 Cadeira de rodas de transporte
 Cadeira de rodas reclinável
 Cadeira de rodas activa
 Cadeira de rodas elétrica
 Cadeira de rodas Pediátricas
 Cadeira de rodas para banho
 Poltronas de descanso
 Bengalas
 Canadianas
 Andarilhos
 Tripés 

Ler mais: https://www.universosenior.com/mobilidade/
