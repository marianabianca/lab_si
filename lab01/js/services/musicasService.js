angular.module("lab1").factory("musicasService", function (albunsService) {
    
    var musicas = [];
    
    var albuns = albunsService.albuns;
    var adicionarAlbum = albunsService.adicionarAlbum;
    
    var adicionarMusicaAoAlbum = function (musica, nomeAlbum) {
        var album = albuns[nomeAlbum];
        var musicasDoAlbum = album.musicas;
        var nomeDaMusica = musica.nome;
        
        if (!(nomeDaMusica in musicasDoAlbum)) {
            musicasDoAlbum[nomeDaMusica] = musica;
            musicas.push(musica);
            return false;
        } else {
            return true;
            // MENSAGEM DE ERRO JA EXISTE A MUSICA
        }
    };
    
    var adicionarMusicaAoSistema = function (musica, musicaJaExiste, albumJaExiste) {
        adicionarAlbum(musica.album, musica.artista);
        musicaJaExiste = adicionarMusicaAoAlbum(musica, musica.album);
        
        return musicaJaExiste;
    };
    
    return {
        musicas: musicas,
        adicionarMusicaAoAlbum: adicionarMusicaAoAlbum,
        adicionarMusicaAoSistema: adicionarMusicaAoSistema
    };
    
});