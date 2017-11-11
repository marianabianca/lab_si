angular.module("lab1").controller("lab1Ctrl", function ($scope, musicasService, artistasService, albunsService, playlistsService) {
    
    $scope.artistas = artistasService.artistas;
    $scope.albuns = albunsService.albuns;
    $scope.musicas = musicasService.musicas;
    $scope.playlists = playlistsService.playlists;

    $scope.filtro = "";
    $scope.filtroMusica = "";
    
    $scope.artistaJaExiste = false;
    $scope.musicaJaExiste = false;
    
    $scope.fazerBusca = function (caracteristica) {
        $scope.filtro = caracteristica;
        delete $scope.caracteristica;
    };
    
    $scope.adicionarArtistaAoSistema = function (artista) {
        $scope.artistaJaExiste = artistasService.adicionarArtistaAoSistema(artista);
        delete $scope.artista;
    };
    
    $scope.adicionarMusicaAoSistema = function (musica) {
        $scope.musicaJaExiste = musicasService.adicionarMusicaAoSistema(musica);
        delete $scope.musica;
    };
    
    $scope.mostrarArtista = function (artista) {
        console.log(artista.nome);
    };
    
    $scope.fazerBuscaMusica = function (caracteristicaMusica) {
        $scope.filtroMusica = caracteristicaMusica;
        delete $scope.caracteristicaMusica;
    }

    $scope.criarPlaylist = function (nomePlaylist) {
        $scope.playlistJaExiste = playlistsService.criarPlaylist(nomePlaylist);
        delete $scope.playlist;
    }

    $scope.adicionarMusicaAPlaylist = function (musica, playlist) {
        playlistsService.adicionarMusicaAPlaylist(musica, playlist);
    }
    
});