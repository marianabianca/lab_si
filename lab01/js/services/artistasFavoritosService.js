angular.module("lab1").factory("artistasFavoritosService", function () {
   
    var artistasFavoritos = [];
    
    var temArtista = function (artista) {
      return artistasFavoritos.includes(artista);  
    };
    
    var adicionarArtistaAosFavoritos = function (artista) {
        if (!temArtista(artista)) {
            artistasFavoritos.push(artista);
        }
    };
    
    return {
        artistasFavoritos: artistasFavoritos,
        adicionarArtistaAosFavoritos: adicionarArtistaAosFavoritos
    };
    
});