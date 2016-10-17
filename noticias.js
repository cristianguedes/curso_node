var http = require('http');

var mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	passaword :'junior91',
	database: 'portal_noticias' 
});

connection.query(<sql>, function(erro,result){
	r
});


var server = http.createServer( function(req, res){
	var categoria = req.url;

	if(categoria == '/tecnologia'){
		res.end("<html><body> Notícias de tecnologia </body></html>");
	} else if(categoria == '/moda'){
		res.end("<html><body> Notícias de moda </body></html>");
	} else if(categoria == '/beleza'){
		res.end("<html><body> Notícias de beleza </body></html>");
	}else{
		res.end("<html><body> Protal de notícias </body></html>");
	}

	
});

server.listen(3000);