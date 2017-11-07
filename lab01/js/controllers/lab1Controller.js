angular.module("lab1").controller("lab1Ctrl", function ($scope, musicasService, artistasService, albunsService) {
    
    $scope.artistas = artistasService.artistas;
    $scope.albuns = albunsService.albuns;
    $scope.filtro = "";
    
    $scope.fazerBusca = function (caracteristica) {
        $scope.filtro = caracteristica;
        delete $scope.caracteristica;
    };
    
    $scope.adicionarArtistaAoSistema = function (artista) {
        artistasService.adicionarArtistaAoSistema(artista);
        delete $scope.artista;
    };
    
    $scope.adicionarMusicaAoSistema = function (musica) {
        musicasService.adicionarMusicaAoSistema(musica);
        delete $scope.musica;
    };
    
    $scope.mostrarArtista = function (artista) {
        console.log(artista.nome);
    };
    
});