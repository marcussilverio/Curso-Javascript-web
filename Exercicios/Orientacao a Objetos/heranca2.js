// Cadeia de prototipos (prototype chain)

const avo = {
    atb1: 'A'
}
const pai = {
    __proto__ : avo,
    atb2: 'B'
}
const filho = {
    __proto__ : pai,
    atb3: 'C'
}
console.log(filho.atb1)

const carro ={
    velAtual: 0,
    velMax: 200,
    aceleraMais(delta){
        if(this.velAtual + delta <= this.velMax)
            this.velAtual += delta
        else
            this.velAtual = this.velMax
    },
    status(){
        return `${this.velAtual}Km/h de ${this.velMax}km/h`
    }
}
const ferrari ={
    modelo : 'F40',
    velMax: 324 //shadowing
}
const volvo = {
    modelo: 'V40',
    status(){
        return `${this.modelo}: ${super.status()}`
    }

}

Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)

volvo.aceleraMais(100)
console.log(volvo.status())

ferrari.aceleraMais(300)
console.log(ferrari.status())