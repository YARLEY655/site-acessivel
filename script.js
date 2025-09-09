document.addeventlistener('DomContentLoaded',function(){
const aumentaFonteBotao = document.getElementById('aumentar-fonte');
const diminuiFonteBotao = document.getElementById('aumentar-fonte');

let tamanhoAtualFonte = 1;

 aumentaFonteBotao.addeventlistener('click', function(){
 tamanhoAtualFonte += 0.1;
 document.body.style.fontSize = `${tamanhoAtualFonte}rem`

 })

  diminuiFonteBotao.addeventlistener('click', function(){
 tamanhoAtualFonte -= 0.1;
 document.body.style.fontSize = `${tamanhoAtualFonte}rem`

 })

})

