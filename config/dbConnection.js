
var mysql = require('mysql');
var connMySql =  function(){ 
	console.log('Conexao com banco de dados');
	return mysql.createConnection({
		host : 'localhost',
		user: 'root',
		passworod:'',
		database: 'portal_noticias'
	});

}
module.exports = function(){ 
	console.log('O autoload carregou o modulo com o banco de dados');
	return connMySql;	
}