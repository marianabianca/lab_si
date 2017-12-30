package br.edu.ufcg.lab3.entidades;

import org.hibernate.tuple.GeneratedValueGeneration;

import javax.persistence.*;

@Entity
@Table(name = "tb_artista")
public class Artista {

    private int id;
    private String nome;
    private String imagem;
    private boolean ehFavorito;
    private String nota;
    private String musica;

    public Artista () { }

    public Artista (String nome, String imagem) {
        this.nome = nome;
        this.imagem = imagem;
        this.ehFavorito = false;
        this.nota = null;
        this.musica = null;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    @Column(name = "nome")
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    @Column(name = "imagem")
    public String getImagem() {
        return imagem;
    }

    public void setImagem(String imagem) {
        this.imagem = imagem;
    }

    @Column(name = "eh_favorito")
    public boolean isEhFavorito() {
        return ehFavorito;
    }

    public void setEhFavorito(boolean ehFavorito) {
        this.ehFavorito = ehFavorito;
    }

    @Column(name = "nota")
    public String getNota() {
        return nota;
    }

    public void setNota(String nota) {
        this.nota = nota;
    }

    @Column(name = "musica")
    public String getMusica() {
        return musica;
    }

    public void setMusica(String musica) {
        this.musica = musica;
    }

    public void atualizaArtista(Artista artistaAtualizado) {
        this.setEhFavorito(artistaAtualizado.isEhFavorito());
        this.setNota(artistaAtualizado.getNota());
        this.setMusica(artistaAtualizado.getMusica());
    }
}
