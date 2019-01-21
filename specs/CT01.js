var telaLogin = require('../pageObject/TelaLogin');
var telaSelecaoVeiculo = require('../pageObject/TelaSelecaoVeiculo');
var utils = require('../Utils');
describe('Indicar Condutor', function() {

    it('Acessar site e fazer Login', function() {
      
      utils.logInfo("[Passo 1] - Acessar site e fazer Login.");
      telaLogin.abrirSite();
      telaLogin.setEmail("pedro.ads@outlook.com");
      browser.sleep(1000);
      telaLogin.setSenha("naruto20");
      browser.sleep(1000);
      telaLogin.clicarBotaoEntrar();
      browser.sleep(5000);
      
      var msg = telaLogin.msgSelecaoVeiculo();
      expect(msg.getText()).toBe('Seleção de veículo');
    });

    it('Selecionar Veículo', function() {

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