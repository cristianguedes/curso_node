
module.exports= function(application){
	
	
	application.get('/noticias', function(req, res){

		var connection = application.config.dbConnection();
		var noticiasModel = application.app.model.noticiasModel;

		noticiasModel.getNoticias(connection, function( erro, result ){
			res.render("noticias/noticias", {noticias : result});
		} );
	

	} );

}