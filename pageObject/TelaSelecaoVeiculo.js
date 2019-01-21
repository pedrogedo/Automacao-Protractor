var telaSelecaoVeiculo = function(){

    var selecionarVeiculo = element(by.model('item.hasSelectedItem'));
    var botaoSelecinarVeiculo = element(by.id('btnProsseguir'));

    this.selecionarVeiculo = function(){  
        selecionarVeiculo.click();
    };

    this.clicarBotaoSelecionarVeiculo = function(){
        botaoSelecinarVeiculo.click();
    };

    this.msgVeiculoSelecionado = function(){
        var msg = element(by.xpath("//h3[text()='Veículo Selecionado']"));
        return msg;
    };
};
module.exports = new telaSelecaoVeiculo();