//var BASE_URL = 'http://localhost/plopi/proyectos/amies/';
var BASE_URL = 'http://amies.com.ar/';
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
		    },
		    error: function(xhr, status, error) {
		        alert("Ocurrió un Error.");
		    }
		});
    },
};
// With jQuery, you use $(document).ready() to execute something when the DOM is loaded 
// and $(window).on("load", handler) to execute something when all other things are loaded as well, such as the images.
// $(function() { personaje.init(); });
// $(window).resize(function() {});

$(window).on("load", function() {
    app.init();
});
