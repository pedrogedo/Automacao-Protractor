exports.config = {
    framework: 'jasmine',
    directConnect: true,
    // chromeDriver: 'C:/Users/Pedro/Documents/Estudos/Automação/selenium/chromedriver.exe',
    // seleniumServerJar: 'C:/Users/Pedro/Documents/Estudos/Automação/selenium/selenium-server-standalone-3.141.59.jar',
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    // baseUrl: 'https://dsvdigital.prefeitura.sp.gov.br/#/login',
    specs: ['./specs/CT01.js'],
    capabilities: {
        browserName: 'chrome'
    }
  }