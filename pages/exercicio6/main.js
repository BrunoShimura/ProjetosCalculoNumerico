function resolver(){

  var x = 1.8;
  var y = 1.4;
  console.log(x);
  console.log(y);
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
var x = 1.8;
var y = 1.4;
var h = (x-y)/4;
var tabela = []
tabela[0] = [0,0,0,0,0]
tabela[0][0] = y
var anterior = 0;
for(var i = 1;i<5;i++) 
  anterior = tabela[0][1-i]
  tabela[0][i] = anterior + h

for(i in tabela[0])
  console.log(tabela[0][i]);
console.log(tabela);
console.log(h);
