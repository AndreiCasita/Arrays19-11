const listaDeCompras = ["Arroz, feijão, carne, couve, pimenta"];
console.log(listaDeCompras);

listaDeCompras.push ("Queijo");
console.log(listaDeCompras);

listaDeCompras.pop ();
console.log(listaDeCompras);

listaDeCompras.filter (n => n > 3);
console.log(listaDeCompras);

const frase = " Javascript é uma linguagem poderosa! ";
const ffrase = frase.trim();
console.log(ffrase);
const palavras = frase.split(" ");
console.log(palavras);