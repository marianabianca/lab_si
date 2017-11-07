angular.module("lab1").config(function ($stateProvider, $urlRouterProvider) {
    var funcione = {
        name: "funcione",
        url: "/",
        controller: "lab1Ctrl",
        templateUrl: "view/paginaInicial.html"
    };
    
    var artista = {
        name: "artista",
        url: "/artista/:nomeArtista",
        templateUrl: "view/paginaArtista.html",
        controller: "artistaCtrl",
        resolve: {
            artista: function ($stateParams, artistasService) {
                var artista = artistasService.getArtista($stateParams.nomeArtista);
                return artista;
            }
        }
    };
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state(funcione);
    $stateProvider.state(artista);
});