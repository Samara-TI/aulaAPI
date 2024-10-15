/// configuracao com o banco MYSQL

const { log } = require('console');
const mysql = require('mysql'); // Importando mysql

//configurando uma conexao com o bd
const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'pizzariaT'
});//Preencher de acordo com seu banco de dados

db.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao Mysql', err)
    } else {
        console.log(`Conectado ao MYSQL`)
    }
});


module.exports= db;
//AQUI DECLARAMOS QUE ESTA CONSTRUÇÃO SERÁ UM MÓDULO E QUE IREMOS EXPORTAR PARA SER USADO.

