angular.module("lab1").controller("artistaCtrl", function ($scope, $state, artista, albunsService, artistasFavoritosService) {
    
    $scope.artista = artista;
    $scope.albunsDoArtista = albunsService.getAlbunsDoArtista(artista.nome);
    $scope.favoritos = artistasFavoritosService.artistasFavoritos;
    $scope.ehFavorito = artista.ehFavorito;
    
    $scope.adicionarNotaAoArtista = function (nota) {
        artista.nota = nota;
        delete $scope.nota;
    }
    
    $scope.adicionarUltimaMusicaEscutada = function (musica) {
        artista.musica = musica;
        delete $scope.musica;
    }
    
    $scope.adicionarArtistaAosFavoritos = function () {
      artistasFavoritosService.adicionarArtistaAosFavoritos($scope.artista);
      $scope.ehFavorito = true;
    };

    $scope.excluirArtistaDosFavoritos = function () {
        artistasFavoritosService.excluirArtista($scope.artista.nome);
        $scope.ehFavorito = false;
    }
    
});