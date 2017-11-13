angular.module("lab1").factory("playlistsService", function () {
    
    var playlists = [];
    
    var temPlaylist = function(nomePlaylist) {
        for (var index = 0; index < playlists.length; index++) {
            var playlist = playlists[index];
            if (playlist.nome == nomePlaylist) {
                return true;
            }
        }

        return false;
    }

    var criarPlaylist = function (nomePlaylist) {
      if (!temPlaylist(nomePlaylist)) {
          var playlist = {
              nome: nomePlaylist,
              musicas: []
          };
          
          playlists.push(angular.copy(playlist));
          return false;
      } else {
           return true;
      }
    };

    var temMusica = function (musica, playlist) {
        var musicasDaPlaylist = playlist.musicas;
        for (var index = 0; index < musicasDaPlaylist.length; index++) {
            var musicaAux = musicasDaPlaylist[index];
            if (musicaAux == musica) {
                return true;
            }            
        }

        return false;
    }

    var adicionarMusicaAPlaylist = function (musica, playlist) {
        for (var index = 0; index < playlists.length; index++) {
            var playlistAux = playlists[index];
            if (playlistAux.nome == playlist.nome && !temMusica(musica, playlist)) {
                playlist.musicas.push(musica);
            }
        }
    }

    var getPlaylist = function (nomePlaylist) {
        for (var index = 0; index < playlists.length; index++) {
            var playlist = playlists[index];
            if (playlist.nome == nomePlaylist) {
                return playlist;
            }
        }
    }

    var getMusicas = function (nomePlaylist) {
        var playlist = getPlaylist(nomePlaylist);
        var musicasDaPlaylist = playlist.musicas;
        return musicasDaPlaylist;
    }

    var excluirPlaylist = function (nomePlaylist) {
        for (var index=0; index < playlists.length; index++){
            var playlist = playlists[index];
            if (playlist.nome == nomePlaylist){
                playlists.splice(index, 1);
            }
        }
    }

    var excluirMusicaDaPlaylist = function (nomePlaylist, nomeMusica) {
        var musicasDaPlaylist = getMusicas(nomePlaylist);
        for (var index=0; index < musicasDaPlaylist.length; index++){
            var musica = musicasDaPlaylist[index];
            if (musica.nome == nomeMusica){
                musicasDaPlaylist.splice(index, 1);
            }
        }
    }

    return {
        playlists: playlists,
        criarPlaylist: criarPlaylist,
        adicionarMusicaAPlaylist: adicionarMusicaAPlaylist,
        getPlaylist: getPlaylist,
        excluirPlaylist: excluirPlaylist,
        excluirMusicaDaPlaylist: excluirMusicaDaPlaylist
    }
    
});