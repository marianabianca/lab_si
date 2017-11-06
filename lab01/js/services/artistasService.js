angular.module("lab1").factory("artistasService", function () {
    
    var _artistas = [];
    
    var _temArtista = function (nomeArtista) {
        for (var artista in artistas) {
            var nomeArtistaAux = artistas[artista].nome;
            if (nomeArtistaAux == nomeArtista) {
                return true;
            }
        }
        
        return false;
    };
    
    var _adicionarArtistaAoSistema = function (artista) {
        if (!temArtista(artista.nome)) {
            artista.ultimaMusica = null;
            artista.nota = null;
            var copiaArtista = angular.copy(artista);
            artistas.push(copiaArtista);
        } else {
            // MOSTRAR MENSAGEM DE ERRO ARTISTA JA EXISTE
        };
    };
    
    var _procurarArtista = function (nomeArtista) {
        for (var i = 0; i <= artistas.length; i++) {
            var artista = artistas[i];
            
            if (artista.nome == nomeArtista) {
                return artista;
            }
        }
        
        return null;
    }
    
    return {
        adicionarArtistaAoSistema: _adicionarArtistaAoSistema,
        procurarArtista: _procurarArtista        
    }
    
});