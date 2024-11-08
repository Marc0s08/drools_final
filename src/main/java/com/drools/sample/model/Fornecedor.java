package com.drools.sample.model;

public class Fornecedor {

    private String nome;
    private int reputacao;
    private int preco;
    private String condicaoPgto;
    private int frete;
    private int pontuacao;
    private int diferencaPontos;

    // Construtor
    public Fornecedor(String nome, int reputacao, int preco, String condicaoPgto, int frete) {
        this.nome = nome;
        this.reputacao = reputacao;
        this.preco = preco;
        this.condicaoPgto = condicaoPgto;
        this.frete = frete;
        this.pontuacao = 0;
    }

    // Getters e Setters
    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public int getReputacao() {
        return reputacao;
    }

    public void setReputacao(int reputacao) {
        this.reputacao = reputacao;
    }

    public int getPreco() {
        return preco;
    }

    public void setPreco(int preco) {
        this.preco = preco;
    }

    public String getCondicaoPgto() {
        return condicaoPgto;
    }

    public void setCondicaoPgto(String condicaoPgto) {
        this.condicaoPgto = condicaoPgto;
    }

    public int getFrete() {
        return frete;
    }

    public void setFrete(int frete) {
        this.frete = frete;
    }

    public int getPontuacao() {
        return pontuacao;
    }

    public void setPontuacao(int pontuacao) {
        this.pontuacao = pontuacao;
    }

    public int getDiferencaPontos() {
        return diferencaPontos;
    }

    public void setDiferencaPontos(int diferencaPontos) {
        this.diferencaPontos = diferencaPontos;
    }

    // Método para exibir informações do fornecedor (opcional)
    // public void exibirInformacoes() {
    //     System.out.println("Fornecedor: " + nome);
    //     System.out.println("Reputação: " + reputacao);
    //     System.out.println("Preço: " + preco);
    //     System.out.println("Condição de Pagamento: " + condicaoPgto);
    //     System.out.println("Frete: " + frete);
    //     System.out.println("Pontuação: " + pontuacao);
    //     System.out.println("Diferença de Pontos: " + diferencaPontos);
    // }
}
