angular.module("lab1").factory("albumFactory", function () {
    
    var _criarAlbum = function (nomeAlbum, nomeArtista) {
        var musicasVazio = {};
        var album = {
            nome: nomeAlbum,
            artista: nomeArtista,
            musicas: musicasVazio
        }
        
        return album;
    };
    
    return {
      criarAlbum: _criarAlbum;  
    };
    
});