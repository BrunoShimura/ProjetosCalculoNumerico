
function resolver(){
  var x = []
  x[0] = [1,1.5,2,2.5,3]
  x[1] = [1,1.5,2,2.5,3]
  var h = 0.5
  for(i in x[0])
    x[1][i] = fun(x[0][i]) 


  var i = h/2 * ( x[1][0] + 2 * ( x[1][1] + x[1][2] + x[1][3] ) + x[1][4])

  tabela(x,i)
}
function tabela(x,r){
  var text = '<table class="table table-striped"><thead><tr><th>x</th>'
  for(i in x[0])
    text += '<th>'+x[0][i]+'</th>'
  
  text +='</tr></thead><tbody><tr><th>f(x)</th>'
  
  for(i in x[0])
    text +='<td>'+x[1][i]+'</td>'
  
    text +='</tr></tbody></table><strong>Resposta: '+r+'</strong>'
  document.getElementById("tabela" ).innerHTML = text;
}

function fun(x){
  var e = 2.7182818284590452353602874
  return 1/(Math.pow(e,Math.pow(x,2)))
}
