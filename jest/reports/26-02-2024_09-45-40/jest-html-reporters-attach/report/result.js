window.jest_html_reporters_callback__({"numFailedTestSuites":1,"numFailedTests":1,"numPassedTestSuites":0,"numPassedTests":5,"numPendingTestSuites":0,"numPendingTests":0,"numRuntimeErrorTestSuites":0,"numTodoTests":0,"numTotalTestSuites":1,"numTotalTests":6,"startTime":1708951541931,"success":false,"testResults":[{"numFailingTests":1,"numPassingTests":5,"numPendingTests":0,"numTodoTests":0,"perfStats":{"end":1708951550393,"runtime":8293,"slow":true,"start":1708951542100},"testFilePath":"C:\\Estudos\\QA\\Modelo_Restcountries\\jest\\api.test.js","failureMessage":"\u001b[1m\u001b[31m  \u001b[1m● \u001b[22m\u001b[1mTestes da API › Deve retornar informações detalhadas de um país específico pelo nome\u001b[39m\u001b[22m\n\n    \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\n    Expected: \u001b[32m200\u001b[39m\n    Received: \u001b[31m404\u001b[39m\n\u001b[2m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 79 |\u001b[39m     \u001b[36mconst\u001b[39m countryName \u001b[33m=\u001b[39m \u001b[32m'brazil'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 80 |\u001b[39m     \u001b[36mconst\u001b[39m response \u001b[33m=\u001b[39m \u001b[36mawait\u001b[39m request(app)\u001b[33m.\u001b[39m\u001b[36mget\u001b[39m(\u001b[32m`/name/${countryName}`\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[2m\u001b[39m\u001b[90m 81 |\u001b[39m     expect(response\u001b[33m.\u001b[39mstatusCode)\u001b[33m.\u001b[39mtoBe(\u001b[35m200\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m    |\u001b[39m                                 \u001b[31m\u001b[1m^\u001b[22m\u001b[2m\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 82 |\u001b[39m     expect(response\u001b[33m.\u001b[39mbody)\u001b[33m.\u001b[39mtoHaveLength(\u001b[35m1\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 83 |\u001b[39m     expect(response\u001b[33m.\u001b[39mbody[\u001b[35m0\u001b[39m])\u001b[33m.\u001b[39mtoHaveProperty(\u001b[32m'name.common'\u001b[39m\u001b[33m,\u001b[39m \u001b[32m'Brazil'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m    \u001b[0m \u001b[90m 84 |\u001b[39m   })\u001b[33m;\u001b[39m\u001b[0m\u001b[22m\n\u001b[2m\u001b[22m\n\u001b[2m      \u001b[2mat Object.toBe (\u001b[22m\u001b[2m\u001b[0m\u001b[36mjest/api.test.js\u001b[39m\u001b[0m\u001b[2m:81:33)\u001b[22m\u001b[2m\u001b[22m\n","testResults":[{"ancestorTitles":["Testes da API"],"duration":2737,"failureMessages":[],"fullName":"Testes da API Deve retornar uma lista de países","status":"passed","title":"Deve retornar uma lista de países"},{"ancestorTitles":["Testes da API"],"duration":502,"failureMessages":[],"fullName":"Testes da API Deve retornar informações detalhadas de um país específico","status":"passed","title":"Deve retornar informações detalhadas de um país específico"},{"ancestorTitles":["Testes da API"],"duration":2188,"failureMessages":[],"fullName":"Testes da API Deve retornar informações sobre todos os países","status":"passed","title":"Deve retornar informações sobre todos os países"},{"ancestorTitles":["Testes da API"],"duration":672,"failureMessages":[],"fullName":"Testes da API Deve retornar informações corretas ao pesquisar por um país com um nome incompleto","status":"passed","title":"Deve retornar informações corretas ao pesquisar por um país com um nome incompleto"},{"ancestorTitles":["Testes da API"],"duration":466,"failureMessages":[],"fullName":"Testes da API Deve retornar informações corretas ao pesquisar por um país com um código de país específico","status":"passed","title":"Deve retornar informações corretas ao pesquisar por um país com um código de país específico"},{"ancestorTitles":["Testes da API"],"duration":432,"failureMessages":["Error: \u001b[2mexpect(\u001b[22m\u001b[31mreceived\u001b[39m\u001b[2m).\u001b[22mtoBe\u001b[2m(\u001b[22m\u001b[32mexpected\u001b[39m\u001b[2m) // Object.is equality\u001b[22m\n\nExpected: \u001b[32m200\u001b[39m\nReceived: \u001b[31m404\u001b[39m\n    at Object.toBe (C:\\Estudos\\QA\\Modelo_Restcountries\\jest\\api.test.js:81:33)\n    at processTicksAndRejections (node:internal/process/task_queues:95:5)"],"fullName":"Testes da API Deve retornar informações detalhadas de um país específico pelo nome","status":"failed","title":"Deve retornar informações detalhadas de um país específico pelo nome"}]}],"config":{"bail":0,"changedFilesWithAncestor":false,"ci":false,"collectCoverage":false,"collectCoverageFrom":[],"coverageDirectory":"C:\\Estudos\\QA\\Modelo_Restcountries\\coverage","coverageProvider":"babel","coverageReporters":["json","text","lcov","clover"],"detectLeaks":false,"detectOpenHandles":false,"errorOnDeprecated":false,"expand":false,"findRelatedTests":false,"forceExit":false,"json":false,"lastCommit":false,"listTests":false,"logHeapUsage":false,"maxConcurrency":5,"maxWorkers":7,"noStackTrace":false,"nonFlagArgs":[],"notify":false,"notifyMode":"failure-change","onlyChanged":false,"onlyFailures":false,"openHandlesTimeout":1000,"passWithNoTests":false,"projects":[],"reporters":[["default",{}],["C:\\Estudos\\QA\\Modelo_Restcountries\\node_modules\\jest-html-reporters\\index.js",{"publicPath":"./jest/reports/26-02-2024_09-45-40","filename":"report.html","expand":true}]],"rootDir":"C:\\Estudos\\QA\\Modelo_Restcountries","runTestsByPath":false,"seed":-119762939,"skipFilter":false,"snapshotFormat":{"escapeString":false,"printBasicPrototype":false},"testFailureExitCode":1,"testPathPattern":"","testSequencer":"C:\\Estudos\\QA\\Modelo_Restcountries\\node_modules\\@jest\\test-sequencer\\build\\index.js","updateSnapshot":"new","useStderr":false,"verbose":true,"watch":false,"watchAll":false,"watchman":true,"workerThreads":false},"endTime":1708951550417,"_reporterOptions":{"publicPath":"./jest/reports/26-02-2024_09-45-40","filename":"report.html","expand":true,"pageTitle":"","hideIcon":false,"testCommand":"","openReport":false,"failureMessageOnly":0,"enableMergeData":false,"dataMergeLevel":1,"inlineSource":false,"urlForTestFiles":"","darkTheme":false,"includeConsoleLog":false,"stripSkippedTest":false},"logInfoMapping":{},"attachInfos":{}})