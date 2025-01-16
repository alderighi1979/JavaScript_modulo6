let frase = "o rato roeu a roupa do rei de roma";
let tamanho = frase.length;
let maiusculo = frase.toUpperCase();
let minusculo = frase.toLowerCase();
let ondeEsta = frase.indexOf("roma")
let trocar = frase.replace("roeu","comeu")
let quem = frase.substring(0,6)


console.log(`A frase é ${frase} e tem ${tamanho} elementos, mas quem comeu a roupa ${quem} ele roeu ou ${trocar}
qual o posição está roma na ${ondeEsta} se tudo isso fosse maior ${maiusculo} ou quem sabe menor ${minusculo} e tudo isso de forma interpolada`)