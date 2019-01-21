var telaSelecaoVeiculo = function () {
    var selecionarVeiculo = element(by.model('item.hasSelectedItem'));
    var botaoSelecinarVeiculo = element(by.id('btnProsseguir'));
    this.selecionarVeiculo = function () {
        selecionarVeiculo.click();
    };
    this.clicarBotaoSelecionarVeiculo = function () {
        botaoSelecinarVeiculo.click();
    };
    this.msgVeiculoSelecionado = function () {
        var msg = element(by.xpath("//h3[text()='Veículo Selecionado']"));
        return msg;
    };
};
module.exports = new telaSelecaoVeiculo();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVGVsYVNlbGVjYW9WZWljdWxvLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdC9UZWxhU2VsZWNhb1ZlaWN1bG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSSxrQkFBa0IsR0FBRztJQUVyQixJQUFJLGlCQUFpQixHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQztJQUNsRSxJQUFJLHFCQUFxQixHQUFHLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7SUFFNUQsSUFBSSxDQUFDLGlCQUFpQixHQUFHO1FBQ3JCLGlCQUFpQixDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUMsQ0FBQztJQUVGLElBQUksQ0FBQyw0QkFBNEIsR0FBRztRQUNoQyxxQkFBcUIsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNsQyxDQUFDLENBQUM7SUFFRixJQUFJLENBQUMscUJBQXFCLEdBQUc7UUFDekIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQyxDQUFDO1FBQ2xFLE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQyxDQUFDO0FBQ04sQ0FBQyxDQUFDO0FBQ0YsTUFBTSxDQUFDLE9BQU8sR0FBRyxJQUFJLGtCQUFrQixFQUFFLENBQUMifQ==