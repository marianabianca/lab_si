angular.module("lab1").controller("artistaCtrl", function ($scope, $state, artista, albunsService, artistasFavoritosService) {
    
    $scope.artista = artista;
    
    $scope.adicionarNotaAoArtista = function (nota) {
        artista.nota = nota;
        delete $scope.nota;
    }
    
    $scope.adicionarUltimaMusicaEscutada = function (musica) {
        artista.musica = musica;
        delete $scope.musica;
    }
    
    $scope.albunsDoArtista = albunsService.getAlbunsDoArtista(artista.nome);
    
    $scope.adicionarArtistaAosFavoritos = function () {
      artistasFavoritosService.adicionarArtistaAosFavoritos($scope.artista);  
    };
    
    
    
    
    $scope.favoritos = artistasFavoritosService.artistasFavoritos;
    
});