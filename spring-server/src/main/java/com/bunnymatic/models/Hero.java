package com.bunnymatic.models;

public class Hero {

    private String name;
    private Double score;
    private Long id;

    public Hero(Long id, String name, Double score) {
        this.id = id;
        this.name = name;
        this.score = score;
    }


    public String getName() {
        return this.name;
    }
    public Long getId() {
        return this.id;
    }
    public Double getScore() {
        return this.score;
    }

}
