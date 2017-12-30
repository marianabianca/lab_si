package br.edu.ufcg.lab3.rest;

import br.edu.ufcg.lab3.entidades.Album;
import br.edu.ufcg.lab3.entidades.Artista;
import br.edu.ufcg.lab3.repositorios.AlbumRepositorio;
import br.edu.ufcg.lab3.repositorios.ArtistasRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
public class ArtistaController {

    @Autowired
    private ArtistasRepositorio artistasRepositorio;

    @Autowired
    private AlbumRepositorio albumRepositorio;

    @PostMapping("/artistas")
    public ResponseEntity<Artista> cadastrarArtista(@RequestBody Artista artista) {
        if (!this.artistasRepositorio.existsArtistaByNome(artista.getNome())) {
            this.artistasRepositorio.save(artista);
            return new ResponseEntity<>(artista, HttpStatus.OK);
        }

        return new ResponseEntity<>(artista, HttpStatus.CONFLICT);
    }

    @GetMapping("/artistas")
    public Iterable<Artista> pegarArtistas() {
        Iterable<Artista> artistas = this.artistasRepositorio.findAll();
        return artistas;
    }

    @GetMapping("/artistas/favoritos")
    public List<Artista> pegarArtistasFavoritos() {
        List<Artista> artistasFavoritos = this.artistasRepositorio.getArtistaByEhFavorito(true);
        return artistasFavoritos;
    }

    @GetMapping("/artistas/{id}")
    public ResponseEntity<Artista> pegarArtista(@PathVariable int id) {
        Artista artista = this.artistasRepositorio.getArtistaById(id);
        return new ResponseEntity<>(artista, HttpStatus.OK);
    }

    @GetMapping("/artistas/{id}/albuns")
    public List<Album> pegarAlbunsArtista(@PathVariable int id) {
        Artista artista = this.artistasRepositorio.getArtistaById(id);
        List<Album> albuns = this.albumRepositorio.getAlbumsByArtista(artista);
        return albuns;
    }

    @PutMapping("/artistas/{id}/favorito")
    public ResponseEntity<Artista> adicionaFavorito(@PathVariable int id) {
        Artista artista = this.artistasRepositorio.getArtistaById(id);
        artista.setEhFavorito(true);
        this.artistasRepositorio.save(artista);

        return new ResponseEntity<>(artista, HttpStatus.OK);
    }

    @PutMapping("/artistas/{id}/n-favorito")
    public ResponseEntity<Artista> removerFavorito(@PathVariable int id) {
        Artista artista = this.artistasRepositorio.getArtistaById(id);
        artista.setEhFavorito(false);
        this.artistasRepositorio.save(artista);

        return new ResponseEntity<>(artista, HttpStatus.OK);
    }
}