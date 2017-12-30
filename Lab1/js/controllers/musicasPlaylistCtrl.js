angular.module("lab1").controller("musicasPlaylistCtrl", function ($scope, $state, playlist, playlistsService) {

    $scope.idPlaylist;
    $scope.nomePlaylist = playlist.nome;
    $scope.musicas = playlist.musicas;
    
    playlistsService.getPlaylist(playlist)
    .then(function (response){
        $scope.idPlaylist = response.data.id;
        $scope.nomePlaylist = response.data.nome;
        $scope.musicas = response.data.musicas;
    })

    $scope.excluirMusica = function (nomePlaylist, nomeMusica) {
        playlistsService.excluirMusicaDaPlaylist(nomePlaylist, nomeMusica)
        .then (function (response) {
            $scope.musicas = response.data;
        })
    }

});