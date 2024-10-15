//impotação de dependencias
require(`dotenv`).config(); //carrega variaveis de ambiente de um arquivo .env

const express = require(`express`);

const helmet = require(`helmet`);

const morgan = require(`morgan`);

const cors = require(`cors`);

const path = require(`path`);


const routes = require(`./routes/routes`);


const db = require(`./db/db`);//modulo de conexao com o banco de dados
//inicializacao do app
const app = express();

//middlewares de segurança e utilidades

app.use(helmet());// protege a aplicacao com header de segurança(protecao)

app.use(cors());// Habilita o cors(protecao)

app.use(morgan('dev')); // loga as requisicoes no console(mostra o tempo q o usuario ficou,em q site , resumindo, guarda informaçoes)

app.use(express.json());//converte os dados recebidos para JSON (vai trafegar pela internet, é o tipo e a extencao do arquivo)

app.use(express.static(path.join(__dirname, 'public')));//pasta de arquivos estáticos

//rota para servir o home.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'home.html'));
});//toda vez q o usuario digitar o nome do site ele vai cair no home.html
// sistema de organização ignorando o nome do usuario  e usa como referencia o pages e home

//configuraçao de rotas
app.use('/', routes);// se o usuario digitar google.com vai pro home, mas se ele escrever qualquer coisa depois da barra ele vai achar a rota interna do sistema e levar o usuario ate lá 

//middleware de tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Algo deu errado');
});


// inicializacao do servidor 
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
});



