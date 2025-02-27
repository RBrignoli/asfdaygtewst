// abrir terminal e digitar npm init -y
// escrever no terminal npm i prompt-sync
// const prompt = require('prompt-sync')()
// let nome = prompt('digite seu nome: ')
// console.log(nome


// const alunos = [
//     { nome: 'joao',  nota: 10 },
//     { nome: 'maria', nota: 6 },
//     { nome: 'mateus', nota: 8 },
//     { nome: 'diego', nota: 7 },
// ]
// let soma = 0

// alunos.forEach((aluno) => {
//     soma = soma + aluno.nota
// })
// console.log(soma)



let array = ["maçã", "banana", "maçã", "laranja", "pera", "banana", "uva", "maçã", "kiwi", "laranja"]
let contagemFrutas = {}
//criando laço for of para fazer contagem
for (let fruta of array){
    //para cada fruta
    // se a fruta existe no objeto, soma
    // se a fruta nao existe no objeto, cria
    if (fruta in contagemFrutas){
        contagemFrutas[fruta] += 1
    } else{
        contagemFrutas[fruta] = 1
    }
}
for(let fruta in contagemFrutas){
    console.log(`A fruta ${fruta} foi repetida ${contagemFrutas[fruta]}`)
}



