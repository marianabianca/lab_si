angular.module("lab1").controller("lab1Ctrl", function ($scope, sistema) {
    
    $scope.artistas = sistema.artistas;
    $scope.albuns = sistema.albuns;
    $scope.filtro = "";
    
    $scope.fazerBusca = function (caracteristica) {
        $scope.filtro = caracteristica;
        delete $scope.caracteristica;
    };
    
    $scope.adicionarArtistaAoSistema = function (artista) {
        sistema.adicionarArtistaAoSistema(artista);
        delete $scope.artista;
    };
    
    $scope.adicionarMusicaAoSistema = function (musica) {
        sistema.adicionarMusicaAoSistema(musica);
        delete $scope.musica;
    };
    
    $scope.mostrarArtista = function (artista) {
        console.log(artista.nome);
    };
    
});