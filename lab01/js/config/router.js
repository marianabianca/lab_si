angular.module("lab1").config(function ($stateProvider, $urlRouterProvider) {
    var home = {
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

    var playlists = {
        name: "playlists",
        url: "/playlists",
        templateUrl: "view/paginaPlaylists.html",
        controller: "playlistsCtrl"
    }
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state(home);
    $stateProvider.state(artista);
    $stateProvider.state(playlists);
});