function resolver() {

  var matriz = [[]];

  for(var i=0;i<3;i++){
    matriz[i] = [];
    for(var j=0;j<4;j++){
      matriz[i][j] = parseFloat(document.getElementById(""+i+j+"").value);
    }
  }
  var erro = Math.pow(10,parseFloat(document.getElementById("erro").value))

  var matriz2 = [[]];
  for(var i=0;i<3;i++){
    matriz2[i] = [];
    for(var j=0;j<3;j++){
      matriz2[i][j] = 0;
    }
  }

  for(var i=0;i<3;i++){
    matriz2[0][i] = (1/matriz[i][i])*matriz[i][3]
  }
  matriz2[1][0] = ((1/matriz[0][0])*matriz[0][1])*-1
  matriz2[1][1] = ((1/matriz[1][1])*matriz[1][0])*-1
  matriz2[1][2] = ((1/matriz[2][2])*matriz[2][0])*-1

  matriz2[2][0] = ((1/matriz[0][0])*matriz[0][2])*-1
  matriz2[2][1] = ((1/matriz[1][1])*matriz[1][2])*-1
  matriz2[2][2] = ((1/matriz[2][2])*matriz[2][1])*-1
  var resposta = [];
  var anterior = [];
  var cont = 0;
  for(var i=0;i<3;i++){
    resposta[i] = 0
    anterior[i] = 0
  }
  for(var i=0;;i++){
    
    anterior[0] =  resposta[0]
    anterior[1] =  resposta[1]
    anterior[2] =  resposta[2]
    resposta[0] = matriz2[0][0] + (matriz2[1][0]*resposta[1]) + (matriz2[2][0]*resposta[2]);
    resposta[1] = matriz2[0][1] + (matriz2[1][1]*resposta[0]) + (matriz2[2][1]*resposta[2]);
    resposta[2] = matriz2[0][2] + (matriz2[1][2]*resposta[0]) + (matriz2[2][2]*resposta[1]);
    cont+=1
    mostra(resposta,cont)
    if(Math.abs(Math.abs(resposta[0])-Math.abs(anterior[0]))<erro&&Math.abs(Math.abs(resposta[1])-Math.abs(anterior[1]))<erro&&Math.abs(Math.abs(resposta[2])-Math.abs(anterior[2]))<erro){
      break
    }
  }
}
function mostra(resposta,cont){
  var text = '<table class="table table-striped"> <thead> <tr> <th>Interação '+cont+'</th> <th>Resposta</th> ';

  text += '<tr> <td>x'+cont+'</td> <td>'+resposta[0]+'</td><tr> <td>y'+cont+'</td> <td>'+resposta[1]+'</td><tr> <td>z'+cont+'</td> <td>'+resposta[2]+'</td>';

  text += '</tbody> </table><div id="tabela'+(parseInt(cont)+1)+'"></div>';
  document.getElementById("tabela"+cont).innerHTML = text;
}
