angular.module("lab1").factory("albunsService", function (albumFactory) {
    var albuns = {};
    
    var criarAlbum = albumFactory.criarAlbum;
    
    var temAlbum = function (nomeAlbum) {
        return nomeAlbum in albuns;
    };
    
    var adicionarAlbum = function (nomeAlbum, nomeArtista) {
        var album = criarAlbum(nomeAlbum, nomeArtista);
        
        if (!temAlbum(nomeAlbum)) {
            var copiaAlbum = angular.copy(album);
            albuns[nomeAlbum] = copiaAlbum;
        }
    };
    
});