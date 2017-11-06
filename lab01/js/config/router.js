angular.module("lab1").config(function ($stateProvider, $urlRouterProvider) {
    var funcione = {
        name: "funcione",
        url: "/",
        templateUrl: "view/paginaInicial.html"
    };
    
    var artista = {
        name: "artista",
        url: "/artista/:nomeArtista",
        templateUrl: "view/teste.html",
        controller: "artistaCtrl",
        resolve: {
            artista: function ($stateParams, sistema) {
                //buscar o artista no sistema
                //retorna o artista
                return null;
            }
        }
    };
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state(funcione);
    $stateProvider.state(artista);
});