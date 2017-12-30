angular.module("lab1").controller("artistaCtrl", function ($scope, $state, artista, albunsService, artistasFavoritosService, $http) {
    
    $scope.artista = artista;
    $scope.albunsDoArtista = albunsService.getAlbunsDoArtista(artista.nome);
    $scope.favoritos = artistasFavoritosService.artistasFavoritos;
    $scope.ehFavorito = artista.ehFavorito;
    
    $http.get('http://localhost:8080/artistas/' + artista)
    .then(function (response) {
        $scope.artista = response.data;
        $scope.ehFavorito = response.data.ehFavorito;
    })
    
    $http.get('http://localhost:8080/artistas/' + artista + '/albuns')
    .then(function (response) {
        $scope.albunsDoArtista = response.data;
    })
    
    $scope.adicionarNotaAoArtista = function (nota) {
        artista.nota = nota;
        delete $scope.nota;
    }
    
    $scope.adicionarUltimaMusicaEscutada = function (musica) {
        artista.musica = musica;
        delete $scope.musica;
    }
    
    $scope.adicionarArtistaAosFavoritos = function () {
        $http.put('http://localhost:8080/artistas/' + $scope.artista.id + '/favorito');
        $scope.ehFavorito = true;
    };

    $scope.excluirArtistaDosFavoritos = function () {
        $http.put('http://localhost:8080/artistas/' + $scope.artista.id + '/n-favorito');
        $scope.ehFavorito = false;
    }
    
});