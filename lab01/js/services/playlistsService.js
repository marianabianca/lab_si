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

    var adicionarMusicaAPlaylist = function (musica, playlist) {
        for (var index = 0; index < playlists.length; index++) {
            var playlistAux = playlists[index];
            if (playlistAux.nome == playlist.nome) {
                playlist.musicas.push(musica);
            }
        }
    }

    return {
        playlists: playlists,
        criarPlaylist: criarPlaylist,
        adicionarMusicaAPlaylist: adicionarMusicaAPlaylist
    }
    
});