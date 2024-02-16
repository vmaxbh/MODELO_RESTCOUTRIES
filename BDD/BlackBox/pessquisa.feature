Feature: Pesquisa de Países

  Como um usuário
  Eu quero ser capaz de pesquisar informações sobre diferentes países
  Para que eu possa obter detalhes sobre suas moedas e códigos de discagem internacional

  Scenario: Pesquisar por Brasil
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Brasil"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País      | Código ISO | Código de País | Moeda | Código Telefônico |
      | Brasil    | BR         | BRA            | BRL   | 55               

  Scenario: Pesquisar por Argentina
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Argentina"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País      | Código ISO | Código de País | Moeda | Código Telefônico |
      | Argentina | AR         | ARG            | ARS   | 54               

  Scenario: Pesquisar por Portugal
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Portugal"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País      | Código ISO | Código de País | Moeda | Código Telefônico |
      | Portugal  | PT         | PRT            | EUR   | 351              

  Scenario: Pesquisar por México
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "México"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País    | Código ISO | Código de País | Moeda | Código Telefônico |
      | México  | MX         | MEX            | MXN   | 52               

  Scenario: Pesquisar por Estados Unidos
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Estados Unidos"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País            | Código ISO | Código de País | Moeda   | Código Telefônico |
      | Estados Unidos  | US         | USA            | USD     | 1                

  Scenario: Pesquisar por China
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "China"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País   | Código ISO | Código de País | Moeda | Código Telefônico |
      | China  | CN         | CHN            | CNY   | 86               

  Scenario: Pesquisar por Japão
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Japão"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País  | Código ISO | Código de País | Moeda | Código Telefônico |
      | Japão | JP         | JPN            | JPY   | 81               

  Scenario: Pesquisar por Rússia
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Rússia"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País   | Código ISO | Código de País | Moeda | Código Telefônico |
      | Rússia | RU         | RUS            | RUB   | 7                 
