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

  Scenario: Pesquisar Armenia
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Armenia"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País    | Código ISO | Código de País | Moeda | Código Telefônico |
      | Armenia | AM         | ARM            | AMD   | 374               |

  Scenario: Pesquisar Angola
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Angola"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País   | Código ISO | Código de País | Moeda | Código Telefônico |
      | Angola | AO         | AGO            | AOA   |  244              |

  Scenario: Pesquisar Andorra
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Andorra"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País    | Código ISO | Código de País | Moeda | Código Telefônico |
      | Andorra | AD         | AND            | EUR   |  376              |

  Scenario: Pesquisar Bélgica
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Bélgica"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País    | Código ISO | Código de País | Moeda | Código Telefônico |
      | Bélgica | BE         | BEL            | EUR   |   32              |

  Scenario: Pesquisar Bulgária
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Bulgária"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País     | Código ISO | Código de País | Moeda | Código Telefônico |
      | Bulgária | BG         | BGR            |  BGN  |    32             |

  Scenario: Pesquisar Bolívia
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Bolívia"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País    | Código ISO | Código de País | Moeda | Código Telefônico |
      | Bolívia | BO         | BOL            |  BOBBOV |      591        |

  Scenario: Pesquisar Cuba
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Cuba"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País | Código ISO | Código de País | Moeda | Código Telefônico |
      | Cuba | CU         | CUB            |CUCCUP |       53          |

  Scenario: Pesquisar Chile
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Chile"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País  | Código ISO | Código de País | Moeda | Código Telefônico |
      | Chile | CL         | CHL            |CLFCLP |     56            |

  Scenario: Pesquisar Costa Rica
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Costa Rica"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País       | Código ISO | Código de País | Moeda | Código Telefônico |
      | Costa Rica | CR         | CRI            |CRC    |      506          |

  Scenario: Pesquisar Cabo Verde
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Cabo Verde"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País       | Código ISO | Código de País | Moeda | Código Telefônico |
      | Cabo Verde | CV         | CPV            |CVE    |      238          |

  Scenario: Pesquisar Dinamarca
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Dinamarca"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País      | Código ISO | Código de País | Moeda | Código Telefônico |
      | Dinamarca | DK         | DNK            | DKK   |       45          |

  Scenario: Pesquisar Equador
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Equador"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País     | Código ISO | Código de País | Moeda | Código Telefônico |
      | Equador | EC         | ECU            | USD    |      593          |

  Scenario: Pesquisar Espanha
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Espanha"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País    | Código ISO | Código de País | Moeda | Código Telefônico |
      | Espanha | ES         | ESP            |EUR    |     34            |

  Scenario: Pesquisar Eslovênia
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Eslovênia"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País      | Código ISO | Código de País | Moeda | Código Telefônico |
      | Eslovênia | SI         | SVN            |EUR    |      386          |

  Scenario: Pesquisar Finlandia
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Finlandia"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País      | Código ISO | Código de País | Moeda | Código Telefônico |
      | Finlandia | FI         | FIN            | EUR   |      358          |

  Scenario: Pesquisar Filipinas
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Filipinas"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País      | Código ISO | Código de País | Moeda | Código Telefônico |
      | Filipinas | PH         | PHL            | PHP   |      63           |

  Scenario: Pesquisar França
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "França"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País   | Código ISO | Código de País | Moeda | Código Telefônico |
      | França | FR         | FRA            | EUR   |      33           |

  Scenario: Pesquisar Grécia
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Grécia"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País   | Código ISO | Código de País | Moeda | Código Telefônico |
      | Grécia | GR         | GRC            | EUR   |       30          |

  Scenario: Pesquisar Gana
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Gana"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País | Código ISO | Código de País | Moeda | Código Telefônico |
      | Gana | GH         | GHA            |GHS    |       233         |

  Scenario: Pesquisar Holanda
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Holanda"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País    | Código ISO | Código de País | Moeda | Código Telefônico |
      | Holanda | NL         | NLD            | EUR   |      31           |

  Scenario: Pesquisar Iraque
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Iraque"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País   | Código ISO | Código de País | Moeda | Código Telefônico |
      | Iraque | IQ         | IRQ            | IQD   |   964             |

  Scenario: Pesquisar Índia
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Índia"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País  | Código ISO | Código de País | Moeda | Código Telefônico |
      | Índia | IN         | IND            | INR   |      91           |

  Scenario: Pesquisar Itália
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Itália"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País   | Código ISO | Código de País | Moeda | Código Telefônico |
      | Itália | IT         | ITA            | EUR   |      39           |

  Scenario: Pesquisar Israel
    Given que estou na página inicial
    When eu realizo uma pesquisa pelo país "Israel"
    Then eu devo ver as seguintes informações na tabela de resultados:
      | País   | Código ISO | Código de País | Moeda | Código Telefônico |
      | Israel | IL         | ISR            | ILS   |     972           |
