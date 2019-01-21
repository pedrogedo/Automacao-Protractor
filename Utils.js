var utils = function(){

    this.log = function(descricao, texto) {
        texto.getText().then((text) => {
            console.log(descricao + text);
        });
    };

    this.logInfo = function(descricao) {
            console.log(descricao);
    };
};
module.exports = new utils();