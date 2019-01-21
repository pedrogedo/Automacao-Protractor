var telaLogin = function(){

    var campoEmail = element(by.model('credentials.userName'));
    var campoSenha = element(by.model('credentials.password'));
    var botaoEntrar = element(by.id('btnEntrarSistema'));

    this.setEmail = function(email){  
        campoEmail.sendKeys(email);
    };

    this.setSenha = function(senha){
        campoSenha.sendKeys(senha);
    };

    this.clicarBotaoEntrar = function(){
        botaoEntrar.click();
    };

    this.abrirSite = function(){
        browser.get('https://dsvdigital.prefeitura.sp.gov.br/#/login');
    };

    this.msgSelecaoVeiculo = function(){
        var msg = element(by.cssContainingText('.font-bold','Seleção de veículo'));
        return msg;
    };
};
module.exports = new telaLogin();