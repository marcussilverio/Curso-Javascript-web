const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}
pessoa.falar()
const falar = pessoa.falar
falar() // conflito entre paradigmas

//resolvendo o conflito
const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()