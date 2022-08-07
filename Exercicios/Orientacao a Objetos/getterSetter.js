const sequencia = {
    _valor : 1, //convecao
    get valor(){return this._valor++},
    set valor(valor){
        if(valor > this._valor)
            this._valor = valor}
}
console.log (sequencia)
sequencia.valor = 40
console.log(sequencia.valor)
console.log(sequencia.valor)
console.log (sequencia)