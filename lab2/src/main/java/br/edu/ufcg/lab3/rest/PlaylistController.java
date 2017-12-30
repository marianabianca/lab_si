package br.edu.ufcg.lab3.rest;

import br.edu.ufcg.lab3.entidades.Musica;
import br.edu.ufcg.lab3.entidades.Playlist;
import br.edu.ufcg.lab3.repositorios.MusicasRepositorio;
import br.edu.ufcg.lab3.repositorios.PlaylistRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class PlaylistController {

    @Autowired
    private PlaylistRepositorio playlistRepositorio;

    @Autowired
    private MusicasRepositorio musicasRepositorio;

    @PostMapping("/playlists")
    public ResponseEntity<Playlist> cadastrarPlaylist(@RequestBody Playlist playlist) {
        if (!this.playlistRepositorio.existsPlaylistByNome(playlist.getNome())) {
            this.playlistRepositorio.save(playlist);
            return new ResponseEntity<>(playlist, HttpStatus.OK);
        }

        return new ResponseEntity<>(playlist, HttpStatus.CONFLICT);
    }

    @GetMapping("/playlists")
    public Iterable<Playlist> pegarPlaylists() {
        Iterable<Playlist> playlists = this.playlistRepositorio.findAll();
        return playlists;
    }

    @GetMapping("/playlists/{id}/musicas")
    public List<Musica> pegarMusicasPPlaylist(@PathVariable int id) {
        Playlist playlist = this.playlistRepositorio.findPlaylistById(id);
        List<Musica> musicas = playlist.getMusicas();
        return musicas;
    }

    @GetMapping("/playlists/{id}")
    public ResponseEntity<Playlist> pegarPlaylist(@PathVariable int id) {
        if (this.playlistRepositorio.existsPlaylistById(id)) {
            Playlist playlist = this.playlistRepositorio.findPlaylistById(id);
            return new ResponseEntity<>(playlist, HttpStatus.OK);
        }

        return new ResponseEntity<>(null);
    }

    @DeleteMapping("/playlists/{id}")
    public Iterable<Playlist> deletarPlaylist(@PathVariable int id) {
        Playlist playlist = this.playlistRepositorio.findPlaylistById(id);
        this.playlistRepositorio.delete(id);

        Iterable<Playlist> playlists = this.playlistRepositorio.findAll();
        return playlists;
    }

    @PutMapping("/playlists/{idPlaylist}/adiciona-musica/{idMusica}")
    public ResponseEntity<Playlist> adicionarMusicaAPlaylist(@PathVariable int idPlaylist, @PathVariable int idMusica) {
        Playlist playlist = this.playlistRepositorio.findPlaylistById(idPlaylist);
        Musica musica = this.musicasRepositorio.getMusicaById(idMusica);

        if (!playlist.temMusica(musica)) {
            playlist.adicionarMusica(musica);
            this.playlistRepositorio.save(playlist);
            return new ResponseEntity<>(playlist, HttpStatus.OK);
        }

        return new ResponseEntity<>(playlist, HttpStatus.CONFLICT);
    }

    @PutMapping("/playlists/{idPlaylist}/remove-musica/{idMusica}")
    public Iterable<Musica> removerMusicaDaPlaylist(@PathVariable int idPlaylist, @PathVariable int idMusica) {
        Playlist playlist = this.playlistRepositorio.findPlaylistById(idPlaylist);
        Musica musica = this.musicasRepositorio.getMusicaById(idMusica);

        playlist.removerMusica(musica);
        this.playlistRepositorio.save(playlist);

        Iterable<Musica> musicas = playlist.getMusicas();
        return musicas;
    }

}
