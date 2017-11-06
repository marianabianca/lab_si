angular.module("lab1").factory("musicasService", function (albu) {
    
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
    
});