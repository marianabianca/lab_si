package br.edu.ufcg.lab3.repositorios;

import br.edu.ufcg.lab3.entidades.Artista;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ArtistasRepositorio extends CrudRepository<Artista, Integer> {

    public boolean existsArtistaByNome(String nome);
    public Artista getArtistaById(int id);
    public List<Artista> getArtistaByEhFavorito(boolean ehFavorito);
    public Artista getArtistaByNome(String nome);
}
