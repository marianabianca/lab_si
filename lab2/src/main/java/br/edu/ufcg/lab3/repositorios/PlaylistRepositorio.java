package br.edu.ufcg.lab3.repositorios;

import br.edu.ufcg.lab3.entidades.Playlist;
import org.springframework.data.repository.CrudRepository;

public interface PlaylistRepositorio extends CrudRepository<Playlist, Integer> {

    public boolean existsPlaylistByNome(String nome);
    public Playlist findPlaylistById(int id);
    public boolean existsPlaylistById(int id);

}
