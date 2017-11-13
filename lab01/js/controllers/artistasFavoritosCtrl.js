angular.module("lab1").controller("artistasFavoritosCtrl", function ($scope, $state, artistasFavoritosService) {

    $scope.artistasFavoritos = artistasFavoritosService.artistasFavoritos;

    $scope.excluirArtista = function (nomeArtista) {
        artistasFavoritosService.excluirArtista(nomeArtista);
    }

});