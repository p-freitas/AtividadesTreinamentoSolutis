let lista = [0, 1, 2, 3, 5, 8, 13, 21, 34, 55];
var contador = 0;

for (let i of lista) {
  if(i >= 10 && i <= 20){
    contador++;
  }
}

console.log(contador + " números estão dentro do intervalo");
console.log((10 - contador) + " números estão fora do intervalo");
