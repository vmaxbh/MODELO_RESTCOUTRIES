Feature: Testar a funcionalidade do site restcountries.eu

  Scenario: Verificar a página inicial do site
    Given que eu visite a página inicial
    Then eu deveria ver o primeiro elemento do conteúdo

  Scenario: Verificar as informações do projeto
    Given que eu visite a página inicial
    Then eu deveria ver a mensagem "This project is inspired on restcountries.eu by Fayder Florez. Although the original project has now moved to a subscription base API, this project is still Open Source and Free to use."
    And eu deveria ver a mensagem "The structure of V2 has been reverted to its original form from the Original Project to maintain compatibility."

  Scenario: Verificar as informações de contribuição
    Given que eu visite a página inicial
    Then eu deveria ver a mensagem "Any help is always welcome! Just edit the relevant file and create a new Merge Request or you can also donate using Patreon or PayPal."

  Scenario: Verificar as informações de doações
    Given que eu visite a página inicial
    Then eu deveria ver a mensagem "This are getting out of control (in a positive way). I’m getting about  4 million hits each day and that means CPU ussage (sometimes at  99%) and also bandwidth consumption (120 GB per day!) so costs have obviously increased. Please, consider making a donation on Patreon or PayPal. This will help me pay the server’s bills."

  Scenario: Verificar as informações dos campos disponíveis
    Given que eu visite a a página inicial
    Then eu deveria ver a mensagem "You can check the FIELDS.md file to get a description for each field (thanks to @ePascalC!)."

  Scenario: Verificar as informações dos endpoints REST disponíveis
    Given que eu visite a página inicial
    Then eu deveria ver a mensagem "Below are described the REST endpoints available that you can use to search for countries"
    And eu deveria ver a mensagem "Now you can get all independent (or not independent) countries by calling this endpoint:"
    And eu deveria ver a mensagem "If you don’t specify the status, true will be taken as default. You can mix it with the fields filter like this:"
