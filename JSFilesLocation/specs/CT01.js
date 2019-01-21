"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
var telaLogin = require('../pageObject/TelaLogin');
var telaSelecaoVeiculo = require('../pageObject/TelaSelecaoVeiculo');
var utils = require('../Utils');
describe('Indicar Condutor', function () {
    it('Acessar site e fazer Login', function () {
        utils.logInfo("[Passo 1] - Acessar site e fazer Login.");
        telaLogin.abrirSite();
        telaLogin.setEmail("pedro.ads@outlook.com");
        protractor_1.browser.sleep(1000);
        telaLogin.setSenha("naruto20");
        protractor_1.browser.sleep(1000);
        telaLogin.clicarBotaoEntrar();
        protractor_1.browser.sleep(5000);
        var msg = telaLogin.msgSelecaoVeiculo();
        expect(msg.getText().isPresent()).toBe(true);
    });
    it('Selecionar Veículo', function () {
        utils.logInfo("[Passo 2] - Selecionar Veículo.");
        telaSelecaoVeiculo.selecionarVeiculo();
        protractor_1.browser.sleep(2000);
        telaSelecaoVeiculo.clicarBotaoSelecionarVeiculo();
        protractor_1.browser.sleep(5000);
        var msg = telaSelecaoVeiculo.msgVeiculoSelecionado();
        utils.logInfo("[Passo 3] - Verificar se o veículo foi selecionado.");
        expect(msg.getText()).toBe('Veículo Selecionado');
        var texto = element(by.xpath("//h3[text()='Lista de Infrações']"));
        utils.log("O TEXTO É: ", texto);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ1QwMS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL0NUMDEudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBb0M7QUFDcEMsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDbkQsSUFBSSxrQkFBa0IsR0FBRyxPQUFPLENBQUMsa0NBQWtDLENBQUMsQ0FBQztBQUNyRSxJQUFJLEtBQUssR0FBRyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFaEMsUUFBUSxDQUFDLGtCQUFrQixFQUFFO0lBRXpCLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRTtRQUUvQixLQUFLLENBQUMsT0FBTyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7UUFDekQsU0FBUyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ3RCLFNBQVMsQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUM1QyxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixTQUFTLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9CLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BCLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQzlCLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRXBCLElBQUksR0FBRyxHQUFHLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBQ3hDLE1BQU0sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDL0MsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsb0JBQW9CLEVBQUU7UUFFdkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO1FBQ2pELGtCQUFrQixDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDdkMsb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsa0JBQWtCLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUNsRCxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQixJQUFJLEdBQUcsR0FBRyxrQkFBa0IsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1FBQ3JELEtBQUssQ0FBQyxPQUFPLENBQUMscURBQXFELENBQUMsQ0FBQztRQUNyRSxNQUFNLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQUM7UUFFbEQsSUFBSSxLQUFLLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO1FBQ25FLEtBQUssQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMifQ==