package com.bunnymatic.controllers;

import com.bunnymatic.models.Hero;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@RestController
public class HeroController {
  @RequestMapping(
          produces = MediaType.APPLICATION_JSON_VALUE,
          method=RequestMethod.GET,
          value="/" )
  public String index() throws JsonProcessingException {
    ObjectMapper objectMapper = new ObjectMapper();
    Hero hero = new Hero(1L, "mr rogers", 1.0);
    return objectMapper.writeValueAsString(hero);
  }
}