angular.module("lab1").config(function ($stateProvider, $urlRouterProvider) {
    var home = {
        name: "funcione",
        url: "/",
        controller: "lab1Ctrl",
        templateUrl: "view/paginaInicial.html"
    };
    
    var artista = {
        name: "artista",
        url: "/artista/:idArtista",
        templateUrl: "view/paginaArtista.html",
        controller: "artistaCtrl",
        resolve: {
            artista: function ($stateParams, artistasService) {
                return $stateParams.idArtista;
            }
        }
    };

    var playlists = {
        name: "playlists",
        url: "/playlists",
        templateUrl: "view/paginaPlaylists.html",
        controller: "playlistsCtrl"
    }

    var musicasPlaylist = {
        name: "musicasPlaylist",
        url: "/musicas/playlist/:idPlaylist",
        templateUrl: "view/musicasPlaylist.html",
        controller: "musicasPlaylistCtrl",
        resolve: {
            playlist: function ($stateParams, playlistsService) {
                return $stateParams.idPlaylist;
            }
        }
    };

    var artistasFavoritos = {
    name: "artistasFavoritos",
    url: "/artistas-favoritos",
    templateUrl: "view/artistasFavoritos.html",
    controller: "artistasFavoritosCtrl"
    }
    
    $urlRouterProvider.otherwise('/');
    
    $stateProvider.state(home);
    $stateProvider.state(artista);
    $stateProvider.state(playlists);
    $stateProvider.state(musicasPlaylist);
    $stateProvider.state(artistasFavoritos);
});