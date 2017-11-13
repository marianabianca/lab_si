angular.module("lab1").controller("musicasPlaylistCtrl", function ($scope, $state, playlist, playlistsService) {

    $scope.nomePlaylist = playlist.nome;
    $scope.musicas = playlist.musicas;

    $scope.excluirMusica = function (nomePlaylist, nomeMusica) {
        playlistsService.excluirMusicaDaPlaylist(nomePlaylist, nomeMusica);
    }

});