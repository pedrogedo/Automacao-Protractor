var telaLogin = function () {
    var campoEmail = element(by.model('credentials.userName'));
    var campoSenha = element(by.model('credentials.password'));
    var botaoEntrar = element(by.id('btnEntrarSistema'));
    this.setEmail = function (email) {
        campoEmail.sendKeys(email);
    };
    this.setSenha = function (senha) {
        campoSenha.sendKeys(senha);
    };
    this.clicarBotaoEntrar = function () {
        botaoEntrar.click();
    };
    this.abrirSite = function () {
        browser.get('https://dsvdigital.prefeitura.sp.gov.br/#/login');
    };
    this.msgSelecaoVeiculo = function () {
        var msg = element(by.cssContainingText('.font-bold', 'Seleção de veículo'));
        return msg;
    };
};
module.exports = new telaLogin();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVsYUxvZ2luLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9UZWxhTG9naW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxTQUFTLEdBQUc7SUFFWixJQUFJLFVBQVUsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7SUFDM0QsSUFBSSxVQUFVLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO0lBQzNELElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztJQUVyRCxJQUFJLENBQUMsUUFBUSxHQUFHLFVBQVMsS0FBSztRQUMxQixVQUFVLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBUyxLQUFLO1FBQzFCLFVBQVUsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDL0IsQ0FBQyxDQUFDO0lBRUYsSUFBSSxDQUFDLGlCQUFpQixHQUFHO1FBQ3JCLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN4QixDQUFDLENBQUM7SUFFRixJQUFJLENBQUMsU0FBUyxHQUFHO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpREFBaUQsQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQyxpQkFBaUIsR0FBRztRQUNyQixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUM7UUFDM0UsT0FBTyxHQUFHLENBQUM7SUFDZixDQUFDLENBQUM7QUFDTixDQUFDLENBQUM7QUFDRixNQUFNLENBQUMsT0FBTyxHQUFHLElBQUksU0FBUyxFQUFFLENBQUMifQ==