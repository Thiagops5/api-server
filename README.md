# API Server Json

Uma aplicação full-stack simples para gerenciamento de pessoas, desenvolvida com Node.js, Express, JSON Server e um frontend em Vanilla JavaScript.

## 📋 Sobre o projeto

O projeto tem como objetivo fornecer uma interface web e uma API RESTful para listar e cadastrar registros de "pessoas". Ele é estruturado dividindo as responsabilidades entre o frontend e o backend, servindo como uma ótima base para estudos de requisições HTTP, estruturação de rotas no Express e consumo de APIs com Axios. O frontend exibe os dados em forma de cartões e limita a visualização inicial aos 5 primeiros registros.

## ✨ Funcionalidades

- Listagem de pessoas cadastradas.
- Limite de exibição de até 5 pessoas na interface inicial.
- Cadastro de novas pessoas através de um formulário interativo no frontend.
- Feedback visual de "carregando" e mensagens de erro durante as requisições.
- Serviço de backend estruturado com rotas (Router), controladores e serviços.
- Simulação de um banco de dados persistente com JSON Server.

## 🛠️ Tecnologias utilizadas

- **Backend:** Node.js, Express, Axios
- **Mock Database:** JSON Server
- **Frontend:** HTML5, CSS3, JavaScript (Vanilla), Axios (via CDN)
- **Ferramentas de Desenvolvimento:** Nodemon

## 📁 Estrutura do projeto

A estrutura do projeto está organizada da seguinte forma:

```text
├── api-front/
│   ├── index.html            # Estrutura principal da página web
│   ├── script.js             # Lógica do frontend (chamadas Axios e manipulação do DOM)
│   └── style.css             # Estilos visuais da aplicação
├── pessoa/
│   ├── passoa.controller.js  # Controladores com a lógica de requisição e resposta
│   ├── pessoa.router.js      # Definição das rotas da entidade "pessoa"
│   └── pessoa.service.js     # Lógica de negócio e comunicação com o JSON Server via Axios
├── api.js                    # Configuração da instância do Axios do backend
├── db.json                   # Banco de dados simulado pelo JSON Server
├── index.js                  # Ponto de entrada do servidor Express
└── package.json              # Configuração de dependências e scripts do projeto
```

## 🚀 Como executar o projeto

### Passo 1: Instalação das dependências
Com o Node.js instalado, abra o terminal na raiz do projeto e execute:
```bash
npm install
```

### Passo 2: Executar o banco de dados (JSON Server)
Em um terminal, inicie o servidor de dados falso (que rodará na porta 3001):
```bash
npm run server
```

### Passo 3: Executar o backend (Express)
Em um segundo terminal, inicie a API principal (que rodará na porta 3000):
```bash
npm start
```

### Passo 4: Acessar a aplicação
Abra o arquivo `api-front/index.html` em seu navegador para utilizar o frontend da aplicação.

## 🗄️ Banco de dados

O projeto utiliza o **JSON Server** para simular um banco de dados RESTful de forma rápida.
- O arquivo que armazena os dados é o `db.json`.
- Ele gerencia uma coleção chamada `"pessoa"`, contendo os campos `id`, `nome`, `idade` e `email`.
- A API do JSON Server roda localmente na porta `3001`.

## 🔌 API

O servidor Express foi configurado para rodar em `http://localhost:3000` e possui as seguintes rotas base para o recurso `/pessoa`:

- `GET /pessoa` - Retorna a lista de pessoas (suporta limite via query `?_limit=`).
- `GET /pessoa/:id` - Retorna os dados de uma pessoa pelo seu ID.
- `POST /pessoa` - Cria um novo registro de pessoa.
- `PUT /pessoa/:id` - (Placeholder) Atualiza uma pessoa existente.
- `DELETE /pessoa/:id` - (Placeholder) Remove uma pessoa existente.

> **Nota de arquitetura:** No momento, o frontend (`script.js`) está configurado para realizar requisições diretamente para a porta `3001` (JSON Server), em vez de passar pela porta `3000` (Express). 

## 📌 Requisitos

- Node.js e npm instalados na máquina.

## 📄 Licença

Este projeto está sob a licença **ISC**, conforme definido no `package.json`.

## 👨‍💻 Autor

- **Thiago** - *Desenvolvedor do site* (thiagopacheco303@gmail.com)
