function resolver() {

  var matriz = [[]];

  for(var i=0;i<3;i++){
    matriz[i] = [];
    for(var j=0;j<4;j++){
      matriz[i][j] = parseFloat(document.getElementById(""+i+j+"").value);
    }
  }
  console.log(matriz)
  console.log(document.getElementById("erro").value)
}