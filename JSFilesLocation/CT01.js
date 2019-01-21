var telaLogin = require('../pageObject/TelaLogin');
var telaSelecaoVeiculo = require('../pageObject/TelaSelecaoVeiculo');
var utils = require('../Utils');
describe('Indicar Condutor', function () {
    it('Acessar site e fazer Login', function () {
        utils.logInfo("[Passo 1] - Acessar site e fazer Login.");
        telaLogin.abrirSite();
        telaLogin.setEmail("pedro.ads@outlook.com");
        browser.sleep(1000);
        telaLogin.setSenha("naruto20");
        browser.sleep(1000);
        telaLogin.clicarBotaoEntrar();
        browser.sleep(5000);
        var msg = telaLogin.msgSelecaoVeiculo();
        expect(msg.getText().isPresent()).toBe(true);
    });
    it('Selecionar Veículo', function () {
        utils.logInfo("[Passo 2] - Selecionar Veículo.");
        telaSelecaoVeiculo.selecionarVeiculo();
        browser.sleep(2000);
        telaSelecaoVeiculo.clicarBotaoSelecionarVeiculo();
        browser.sleep(5000);
        var msg = telaSelecaoVeiculo.msgVeiculoSelecionado();
        utils.logInfo("[Passo 3] - Verificar se o veículo foi selecionado.");
        expect(msg.getText()).toBe('Veículo Selecionado');
        var texto = element(by.xpath("//h3[text()='Lista de Infrações']"));
        utils.log("O TEXTO É: ", texto);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ1QwMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NwZWNzL0NUMDEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDbkQsSUFBSSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUNyRSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDaEMsUUFBUSxDQUFDLGtCQUFrQixFQUFFO0lBRXpCLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRTtRQUUvQixLQUFLLENBQUMsT0FBTyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDekQsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3RCLFNBQVMsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUM1QyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixTQUFTLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUM5QixPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBCLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0JBQW9CLEVBQUU7UUFFdkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ2pELGtCQUFrQixDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdkMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixrQkFBa0IsQ0FBQyw0QkFBNEIsRUFBRSxDQUFDO1FBQ2xELE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsSUFBSSxHQUFHLEdBQUcsa0JBQWtCLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUNyRCxLQUFLLENBQUMsT0FBTyxDQUFDLHFEQUFxRCxDQUFDLENBQUM7UUFDckUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO1FBRWxELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLG1DQUFtQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxLQUFLLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDIn0=