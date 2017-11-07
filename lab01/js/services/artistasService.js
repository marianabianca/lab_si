angular.module("lab1").factory("artistasService", function (albunsService) {
    
    var artistas = [];
    
    var temArtista = function (nomeArtista) {
        for (var artista in artistas) {
            var nomeArtistaAux = artistas[artista].nome;
            if (nomeArtistaAux == nomeArtista) {
                return true;
            }
        }
        
        return false;
    };
    
    var adicionarArtistaAoSistema = function (artista) {
        if (!temArtista(artista.nome)) {
            var copiaArtista = angular.copy(artista);
            artistas.push(copiaArtista);
        } else {
            // MOSTRAR MENSAGEM DE ERRO ARTISTA JA EXISTE
        };
    };
    
    var getArtista = function (nomeArtista) {
        for (var i = 0; i < artistas.length; i++) {
            var artista = artistas[i];
            
            if (artista.nome == nomeArtista) {
                return artista;
            }
        }
        
        return null;
    };
    
    return {
        artistas: artistas,
        adicionarArtistaAoSistema: adicionarArtistaAoSistema,
        getArtista: getArtista
    }
    
});