package br.edu.ufcg.lab3.repositorios;

import br.edu.ufcg.lab3.entidades.Album;
import br.edu.ufcg.lab3.entidades.Musica;
import org.springframework.data.repository.CrudRepository;

public interface MusicasRepositorio extends CrudRepository<Musica, Integer> {

    public boolean existsMusicaByNomeAndAlbum(String nome, Album album);
    public Musica getMusicaByNomeAndAlbum(String nome, Album album);
    public Musica getMusicaById(int id);

}
