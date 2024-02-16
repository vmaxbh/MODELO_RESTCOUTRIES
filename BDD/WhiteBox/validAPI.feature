Feature: Testes da API restcountries

  Scenario: Deve retornar uma lista de países
    Given que realizo uma requisição para obter a lista de países
    Then devo receber uma resposta com status code 200
    And a resposta deve conter uma lista de países
    And a lista de países não deve estar vazia

  Scenario: Deve retornar informações detalhadas de um país específico
    Given que realizo uma requisição para obter informações de um país específico
    When informo o nome do país "brazil"
    Then devo receber uma resposta com status code 200
    And a resposta deve conter detalhes do país
    And o país deve ter o nome comum "Brazil"
    And o país deve ter uma capital
    And o país deve ter uma população

  Scenario: Deve retornar informações sobre todos os países
    Given que realizo uma requisição para obter informações de todos os países
    Then devo receber uma resposta com status code 200
    And a resposta deve conter uma lista de países
    And a lista de países não deve estar vazia

  Scenario: Deve retornar informações corretas ao pesquisar por um país com um nome incompleto
    Given que realizo uma requisição para pesquisar por um país com um nome incompleto
    When informo parte do nome do país "br"
    Then devo receber uma resposta com status code 200
    And a resposta deve conter uma lista de países
    And pelo menos um país na lista deve conter o nome informado

  Scenario: Deve retornar informações corretas ao pesquisar por um país com um código de país específico
    Given que realizo uma requisição para pesquisar por um país com um código específico
    When informo o código do país "BR"
    Then devo receber uma resposta com status code 200
    And a resposta deve conter uma lista de países
    And a lista de países deve conter apenas um país
    And o país retornado deve ter o nome comum "Brazil"
    And o país retornado deve ter uma capital
    And o país retornado deve ter uma população
