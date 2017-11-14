angular.module("lab1").factory("artistasFavoritosService", function () {
   
    var artistasFavoritos = [];
    
    var temArtista = function (artista) {
      return artistasFavoritos.includes(artista);  
    };
    
    var adicionarArtistaAosFavoritos = function (artista) {
        if (!temArtista(artista)) {
            artista.ehFavorito = true;
            artistasFavoritos.push(artista);
        }
    };

    var excluirArtista = function (nomeArtista) {
        for (var index=0; index < artistasFavoritos.length; index++){
            var artista = artistasFavoritos[index];
            if (artista.nome == nomeArtista){
                artista.ehFavorito = false;
                artistasFavoritos.splice(index, 1);
            }
        }
    }
    
    return {
        artistasFavoritos: artistasFavoritos,
        adicionarArtistaAosFavoritos: adicionarArtistaAosFavoritos,
        excluirArtista: excluirArtista
    };
    
});