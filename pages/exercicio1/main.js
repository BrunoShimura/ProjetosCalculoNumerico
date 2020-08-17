function resolver() {
  var a = parseInt(document.form1.a.value);
  var b = parseInt(document.form1.b.value);
  var erro = parseInt(document.form1.erro.value);
  var text = '<table class="table table-striped"> <thead> <tr> <th>k</th> <th>a</th> <th>b</th> <th>xk</th> <th>f(a)</th> <th>f(xk)</th> <th>sinal</th> <th>E=b-a<10^'+erro+'</th> </tr> </thead> <tbody>';

  for(var cont=1;;cont++){
    text += '<tr> <td>'
    +cont+'</td> <td>'
    +a+'</td> <td>'
    +b+'</td> <td>'
    +(a+b)/2+'</td><td>'
    +funcao(a)+'</td><td>'
    +funcao((a+b)/2)+'</td>';
    if(funcao(a)/funcao((a+b)/2)>0){
      text+='<td>+</td>';
    }else{
      text+='<td>-</td>';
    };
    text+='<td>'+(b-a)+'</td></tr>';
    if(b-a<=Math.pow(10, erro)){
      break;
    }
    if(funcao(a)/funcao((a+b)/2)>0){
      a = (a+b)/2;
    }else{
      b = (a+b)/2;
    };
  }

  text += '</tbody> </table>';
  document.getElementById("tabela" ).innerHTML = text;
}
function funcao(a){
  var b = ((Math.pow(a, 3))+3*a)-1;
  return b;
}