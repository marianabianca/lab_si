angular.module("lab1").factory("sistema", function () {
    
    var artistas = [];
    var albuns = {};
    
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
            artista.ultimaMusica = null;
            artista.nota = null;
            var copiaArtista = angular.copy(artista);
            artistas.push(copiaArtista);
        } else {
            // MOSTRAR MENSAGEM DE ERRO ARTISTA JA EXISTE
        };
    };
    
    var criarAlbum = function (nomeAlbum, nomeArtista) {
        var musicasVazio = {};
        var album = {
            nome: nomeAlbum,
            artista: nomeArtista,
            musicas: musicasVazio
        }
        
        return album;
    };
    
    var temAlbum = function (nomeAlbum) {
        return nomeAlbum in albuns;
    }
    
    var adicionarAlbum = function (nomeAlbum, nomeArtista) {
        var album = criarAlbum(nomeAlbum, nomeArtista);
        
        if (!temAlbum(nomeAlbum)) {
            var copiaAlbum = angular.copy(album);
            albuns[nomeAlbum] = copiaAlbum;
        }
    };
    
    var adicionarMusicaAoAlbum = function (musica, nomeAlbum) {
        var album = albuns[nomeAlbum];
        var musicasDoAlbum = album.musicas;
        var nomeDaMusica = musica.nome;
        
        if (!(nomeDaMusica in musicasDoAlbum)) {
            musicasDoAlbum[nomeDaMusica] = musica;
        } else {
            // MENSAGEM DE ERRO JA EXISTE A MUSICA
        }
    };
    
    var adicionarMusicaAoSistema = function (musica) {
        adicionarAlbum(musica.album, musica.artista);
        adicionarMusicaAoAlbum(musica, musica.album);
    };
    
    return {
        artistas: artistas,
        albuns: albuns,
        adicionarArtistaAoSistema: adicionarArtistaAoSistema,
        adicionarMusicaAoSistema: adicionarMusicaAoSistema
    };
});