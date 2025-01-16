// contagem regressiva
for (let i = 10 ; i >= 0; i--){
    console.log(i)
}
console.log("FOGO !!!!!!!!")

// loop array
let nomes = ["carlos", "maria", "jose" ,"eduardo"]
let i = 0
while (i < nomes.length){
    console.log(`Olá tudo bem ${nomes[i]}`)
    i++
}

let lista = ["carlos", "maria", "jose" ,"eduardo"]
let x = 0
do {
    console.log(`Como vai ${lista[x]}`);
    x++;
}while (x < lista.length);