var listaA = [2, 7, 9, 5, 3, 4, 1, 0, 4, 3];
var listaB = [3, 2, 3, 3, 3, 2, 5, 8, 3, 6];
var listaC = [];

for (var i in listaA) {
  if(i % 2 == 0){
    listaC.push(listaA[i]);
  }else{
    listaC.push(listaB[i]);
  }
}
//imprime a lista
console.log(listaC);
