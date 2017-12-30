package br.edu.ufcg.lab3.rest;

import br.edu.ufcg.lab3.entidades.Album;
import br.edu.ufcg.lab3.entidades.Artista;
import br.edu.ufcg.lab3.entidades.Musica;
import br.edu.ufcg.lab3.entidades.MusicaAux;
import br.edu.ufcg.lab3.repositorios.AlbumRepositorio;
import br.edu.ufcg.lab3.repositorios.ArtistasRepositorio;
import br.edu.ufcg.lab3.repositorios.MusicasRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin
@RestController
public class MusicaController {

    @Autowired
    private MusicasRepositorio musicasRepositorio;

    @Autowired
    private AlbumRepositorio albumRepositorio;

    @Autowired
    private ArtistasRepositorio artistasRepositorio;

    @PostMapping("/musicas")
    public ResponseEntity<Musica> cadastrarMusica(@RequestBody MusicaAux musicaAux) {
        // TODO refatorar
        Artista artista = this.artistasRepositorio.getArtistaByNome(musicaAux.getArtista());
        Album album;

        if (this.albumRepositorio.existsAlbumByNomeAndArtistaNome(musicaAux.getAlbum(), musicaAux.getArtista())) {
            album = this.albumRepositorio.getAlbumByNomeAndArtista(musicaAux.getAlbum(), artista);
        } else {
            album = new Album();
            album.setNome(musicaAux.getAlbum());
            album.setArtista(artista);
            this.albumRepositorio.save(album);
        }

        Musica musica = new Musica();
        musica.setId(musicaAux.getId());
        musica.setArtista(artista);
        musica.setAlbum(album);
        musica.setAnoLancamento(musicaAux.getAnoLancamento());
        musica.setDuracao(musicaAux.getDuracao());
        musica.setNome(musicaAux.getNome());

        if (!this.musicasRepositorio.existsMusicaByNomeAndAlbum(musica.getNome(), musica.getAlbum())) {
            musicasRepositorio.save(musica);
            return new ResponseEntity<>(musica, HttpStatus.OK);
        }

        return new ResponseEntity<>(musica, HttpStatus.CONFLICT);
    }

    @GetMapping("/musicas/{id}")
    public ResponseEntity<Musica> pegarMusica(@PathVariable int id) {
        Musica musica = this.musicasRepositorio.getMusicaById(id);
        return new ResponseEntity<>(musica, HttpStatus.OK);
    }

    @GetMapping("/musicas")
    public Iterable<Musica> pegarMusicas() {
        Iterable<Musica> musicas = this.musicasRepositorio.findAll();
        return musicas;
    }
}
