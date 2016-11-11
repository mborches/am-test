//var BASE_URL = 'http://localhost/plopi/proyectos/amies/';
var BASE_URL = 'http://amies.com.ar/';

var img_cuerpo = new Image();

var app = {
    init: function() {
        var self = this;
        console.log('Iniciando AMIES Game...');
    },
    getData: function() {
        var self = this;
        console.log('Iniciando getData...');

		$.ajax({
		    url: BASE_URL + "juegos/mensaje",
		    jsonp: "callback",
		    dataType: "jsonp",
		    data: {
		        nombre: "Martin"
		    },
		    success: function( response ) {
                $('#mensaje').html(response.rta);
                app.getImage();
		    },
		    error: function(xhr, status, error) {
		        alert("Ocurrió un Error.");
		    }
		});
    },
    getImage: function() {
        var self = this;
        console.log('Iniciando getImage...');

        img_cuerpo.onload = app.cargado;
        img_cuerpo.src = BASE_URL + "assets/images/amies/demo/cuerpo_completo.png";
        $('#cuerpo').attr('src', img_cuerpo.src);
    },
    cargado: function() {
        var self = this;
        console.log('Cargue');
    },    
};
// With jQuery, you use $(document).ready() to execute something when the DOM is loaded 
// and $(window).on("load", handler) to execute something when all other things are loaded as well, such as the images.
// $(function() { personaje.init(); });
// $(window).resize(function() {});

$(window).on("load", function() {
    app.init();
});
