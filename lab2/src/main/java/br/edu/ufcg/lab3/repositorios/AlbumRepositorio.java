package br.edu.ufcg.lab3.repositorios;

import br.edu.ufcg.lab3.entidades.Album;
import br.edu.ufcg.lab3.entidades.Artista;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface AlbumRepositorio extends CrudRepository<Album, Integer> {

    public boolean existsAlbumByNomeAndAndArtista(String nome, Artista artista);
    public boolean existsAlbumByNomeAndArtistaNome(String string, String artistaNome);
    public Album getAlbumByNomeAndArtista(String nome, Artista artista);
    public List<Album> getAlbumsByArtista(Artista artista);

}
