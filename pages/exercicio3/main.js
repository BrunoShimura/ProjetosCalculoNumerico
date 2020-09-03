function resolver() {
  var a = parseInt(document.form1.a.value);
  var erro = parseInt(document.form1.erro.value)*-1;
  var text = '<table class="table table-striped"> <thead> <tr> <th>Interações</th> <th>Resposta</th> ';
  var res = 0;
  console.log(Math.pow(10,erro));
  for(var cont=1;;cont++){
    res = a - (funcao(a)/derivada(a))
    text += '<tr> <td>x'+cont+'</td> <td>'+
    res
    +'</td>';
    if(Math.abs(res-a)>Math.pow(10,erro)){
      a = res;
      console.log(Math.abs(res-a))
    }else{
      document.getElementById("resposta" ).innerHTML ='Raiz procurada é '+res;
      break;
    }
    
  }

  text += '</tbody> </table>';
  document.getElementById("tabela" ).innerHTML = text;
}
function funcao(a){
  var b = Math.pow( 2.71828182846,a)+Math.pow(2, -a)+(2*Math.cos(a))-6;
  return b;
}
function derivada(a){
  var b = Math.pow(2.71828182846, a)-Math.log(a)*Math.pow(2, -a)-(2*Math.sin(a));
  return b;
}
Math.abs()