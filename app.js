var app = require('./config/server');

var rotaHome = require('./app/routes/home');
rotaHome(app);

var rotaNoticias = require('./app/routes/noticias');
rotaNoticias(app);


var rotaFormularioNoticias = require('./app/routes/formulario_inclusao_noticia');
rotaFormularioNoticias(app);

app.listen(3000, function(){
	console.log("Servidor rodando com Express ");
});
