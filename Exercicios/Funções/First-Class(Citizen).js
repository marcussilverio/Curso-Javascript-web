//criar de forma literal
function fun1(parametro1, parametro2){
    /*
        bloco
    */
   return //undefined se nao for explicitado
}

//Armazenar em uma variavel
const fun2 = function(parametro1, parametro2){

    /*
        bloco
    */
}

//Armazenar em um array
const array = [function(parametro1, parametro2){return}, fun1, fun2]

//Armazenar em um atributo de objeto
const obj ={}

obj.falar = function(){return 'Ola'}

//Passar função como parametro
function run(fun){
    fun()
}

//Uma função pode retornar/conter outra função
function soma(a, b){
    return function(c){
        console.log(a+b+c)
    }
}
soma(2,3)(4)