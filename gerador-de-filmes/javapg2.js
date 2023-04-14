
contlinks = 0;
var linkx = "";
function maislinks(ix) {
 if (ix=='series'){
  geradorfilmes.innerHTML="";
 }else{
  geradorseries.innerHTML="";
 }



  if (quantosLinks.value>20){
    nomelink.innerHTML = "Números de Links: Não pode ser maior que 20!";
    return;
  }
  //textofilmes.style.display="none";
  inputLinks.innerHTML="";
  //var QLINKS2 = QLINKS++;
for (var i=0; i< quantosLinks.value; i++){
  contlinks++;
  if (i<9){ var x = "0";}else{ var x = ""}
  inputLinks.innerHTML+=`
  <p class="gerador-fimes__texto">link (${x+contlinks}) &f=</p>
  <input class="gerador-filmes__input gerador-filmes__input-coluna" id="link${contlinks}" name="link${contlinks}" type="text" placeholder="Link do pleyer" >
  `;
  if (contlinks==quantosLinks.value){  contlinks=0;}
}
}





function gerar(ix2) {
  paremetrox = "";
  if (ix2=='series'){
    geradorfilmes.innerHTML="";
   }else{
    geradorseries.innerHTML="";
   }
  
//   if (quantosLinks.value==1){
//     linkx = link1.value;
//    }else
//    if (quantosLinks.value==2){
//     linkx = link1.value+"&f="+link2.value;
//    }else
//     if (quantosLinks.value==3){
//     linkx = link1.value+"&f="+link2.value+"&f="+link3.value;
//    }else
//     if (quantosLinks.value==4){
//     linkx = link1.value+"&f="+link2.value+"&f="+link3.value+"&f="+link4.value;
   
//    }else
//     if (quantosLinks.value==5){
//     linkx = link1.value+"&f="+link2.value+"&f="+link3.value+"&f="+link4.value+"&f="+link5.value;
//    }else
//    if (quantosLinks.value==6){
//     linkx = link1.value+"&f="+link2.value+"&f="+link3.value+"&f="+link4.value+"&f="+link5.value+"&f="+link6.value;
//    }else
//    if (quantosLinks.value==7){
//     linkx = link1.value+"&f="+link2.value+"&f="+link3.value+"&f="+link4.value+"&f="+link5.value+"&f="+link6.value+"&f="+link7.value;
   
//    }else
//     if (quantosLinks.value==8){
//     linkx= link1.value+"&f="+link2.value+"&f="+link3.value+"&f="+link4.value+"&f="+link5.value+"&f="+link6.value+"&f="+link8.value;
//    }else
//    if (quantosLinks.value==9){
//     linkx= link1.value+"&f="+link2.value+"&f="+link3.value+"&f="+link4.value+"&f="+link5.value+"&f="+link6.value+"&f="+link7.value+"&f="+link8.value+"&f="+link9.value;
//    }else
//     if (quantosLinks.value==10){
//     linkx =  link1.value+"&f="+link2.value+"&f="+link3.value+"&f="+link4.value+"&f="+link5.value+"&f="+link6.value+"&f="+link7.value+"&f="+link8.value+"&f="+link9.value+"&f="+link10.value;
//    }else
//     if (quantosLinks.value==11){
//     linkx = link1.value+"&f="+link2.value+"&f="+link3.value+"&f="+link4.value+"&f="+link5.value+"&f="+link6.value+"&f="+link7.value+"&f="+link8.value+"&f="+link9.value+"&f="+link10.value+"&f="+link11.value;
//    }else
//     if (quantosLinks.value==12){
//     linkx = link1.value+"&f="+link2.value+"&f="+link3.value+"&f="+link4.value+"&f="+link5.value+"&f="+link6.value+"&f="+link7.value+"&f="+link8.value+"&f="+link9.value+"&f="+link10.value+"&f="+link11.value+"&f="+link12.value;
   
//    }else
//    if (quantosLinks.value==13){
//     linkx = link1.value+"&f="+link2.value+"&f="+link3.value+"&f="+link4.value+"&f="+link5.value+"&f="+link6.value+"&f="+link7.value+"&f="+link8.value+"&f="+link9.value+"&f="+link10.value+"&f="+link11.value+"&f="+link12.value+"&f="+link13.value;
//    }else
//     if (quantosLinks.value==14){
//       linkx = link1.value+"&f="+link2.value+"&f="+link3.value+"&f="+link4.value+"&f="+link5.value+"&f="+link6.value+"&f="+link7.value+"&f="+link8.value+"&f="+link9.value+"&f="+link10.value+"&f="+link11.value+"&f="+link12.value+"&f="+link13.value+"&f="+link14.value;
   
//    }
//    else
//     if (quantosLinks.value==15){
//       linkx = link1.value+"&f="+link2.value+"&f="+link3.value+"&f="+link4.value+"&f="+link5.value+"&f="+link6.value+"&f="+link7.value+"&f="+link8.value+"&f="+link9.value+"&f="+link10.value+"&f="+link11.value+"&f="+link12.value+"&f="+link13.value+"&f="+link14.value+"&f="+link15.value;
//    }
//    else
//     if (quantosLinks.value==16){
//       linkx = link1.value+"&f="+link2.value+"&f="+link3.value+"&f="+link4.value+"&f="+link5.value+"&f="+link6.value+"&f="+link7.value+"&f="+link8.value+"&f="+link9.value+"&f="+link10.value+"&f="+link11.value+"&f="+link12.value+"&f="+link13.value+"&f="+link14.value+"&f="+link15.value+"&f="+link16.value;
//    }
//    else
//    if (quantosLinks.value==17){
//     linkx = link1.value+"&f="+link2.value+"&f="+link3.value+"&f="+link4.value+"&f="+link5.value+"&f="+link6.value+"&f="+link7.value+"&f="+link8.value+"&f="+link9.value+"&f="+link10.value+"&f="+link11.value+"&f="+link12.value+"&f="+link13.value+"&f="+link14.value+"&f="+link15.value+"&f="+link16.value+"&f="+link17.value;
//   }
//   else
//   if (quantosLinks.value==18){
//     linkx = link1.value+"&f="+link2.value+"&f="+link3.value+"&f="+link4.value+"&f="+link5.value+"&f="+link6.value+"&f="+link7.value+"&f="+link8.value+"&f="+link9.value+"&f="+link10.value+"&f="+link11.value+"&f="+link12.value+"&f="+link13.value+"&f="+link14.value+"&f="+link15.value+"&f="+link16.value+"&f="+link17.value+"&f="+link18.value;
//  }
//  else
//  if (quantosLinks.value==19){
//   linkx = link1.value+"&f="+link2.value+"&f="+link3.value+"&f="+link4.value+"&f="+link5.value+"&f="+link6.value+"&f="+link7.value+"&f="+link8.value+"&f="+link9.value+"&f="+link10.value+"&f="+link11.value+"&f="+link12.value+"&f="+link13.value+"&f="+link14.value+"&f="+link15.value+"&f="+link16.value+"&f="+link17.value+"&f="+link18.value+"&f="+link19.value;
// }
// else
//     if (quantosLinks.value==20){
//       linkx = link1.value+"&f="+link2.value+"&f="+link3.value+"&f="+link4.value+"&f="+link5.value+"&f="+link6.value+"&f="+link7.value+"&f="+link8.value+"&f="+link9.value+"&f="+link10.value+"&f="+link11.value+"&f="+link12.value+"&f="+link13.value+"&f="+link14.value+"&f="+link15.value+"&f="+link16.value+"&f="+link17.value+"&f="+link18.value+"&f="+link19.value+"&f="+link20.value;
//    }

   if (ix2=="series"){
     linkx = linkx.replaceAll("&f=","&s=");
     var sifi = "&s=";
     var tix = "&t=T"+temporada.value;
    }else{
     var tix = "";
     var sifi = "&f=";
}
var linkx ="";
for (var i=0; i<quantosLinks.value; i++){
  var a= 'link'+(i+1);
  var  b =  eval(a); 
  encutalink(b,sifi,tix);
}


}


encutalinkCont = 0;
paremetrox = "";
function encutalink(paremetro,x0,x1){


  var valor2 = paremetro.value;
  $.getJSON( " https://is.gd/create.php?callback=", {
      url:  valor2,
      format: "json"
  }).done(function(  data ) {
    let novolink2 =  data.shorturl;
    //console.log( novolink);
  novolink2 = novolink2.replace("https://is.gd/", "" )
  if (novolink2==undefined){
    alert("Errou no Sistema");
    return;}
  if (encutalinkCont==0){
    paremetrox = x0+novolink2;
   encutalinkCont++;
}else {
   paremetrox = paremetrox+x0+novolink2;
}
alert(paremetrox);
var NOME = nome.value;
    NOME  = NOME.replaceAll(" ","%20");
    NOME  = NOME.replaceAll("  ","%20");
  //var QLINKS= quantosLinks.value;
  //var LINK = link1.value;
  var valor2 = linkImagem.value;
// $.getJSON( " https://is.gd/create.php?callback=", {
//     url:  valor2,
//     format: "json"
// }).done(function(  data ) {
//   let novolink3 = data.shorturl;
// 	//console.log( novolink);
//   if (novolink3==undefined){
//     alert("Errou no Sistema");
//     return;}
novolink3= valor2.replace("https://", "" )
novolink3 = valor2.replace("http://", "" )
 var novapg = "https://pxflix.ppoxa.com/?titolo="+NOME+x1+"&capa="+novolink3+paremetrox+"&v=2";
 novapg  = novapg.replaceAll("https://","");
 novapg  = novapg.replaceAll("http://","");
 novapg  = novapg.replaceAll("pxflix.ppoxa.com/","https://pxflix.ppoxa.com/");
 ciarLink(novapg,x1);
//});
});
}


function ciarLink(link,Fous) {
  var valor = link;
$.getJSON( " https://is.gd/create.php?callback=", {
    url:  valor,
    format: "json"
}).done(function(  data ) {
  let novolink = "https://go.ppoxa.com/?n=" + data.shorturl;
	//console.log( novolink);
  if (novolink==undefined){
    alert("Errou no Sistema");
    return;}  
novolink = novolink.replace("https://is.gd/", "" )
var url1 = novolink;
//alert(url1);

var valor2 = "https://viagemmais.nl/fxx?u="+url1;
$.getJSON( " https://is.gd/create.php?callback=", {
    url:  valor2,
    format: "json"
}).done(function(  data ) {
  let novolink2 = "https://go.ppoxa.com/?n=" + data.shorturl;
	//console.log( novolink);
  if (novolink2==undefined){
    alert("Errou no Sistema");
    return;}
novolink2 = novolink2.replace("https://is.gd/", "" )
var url2 = novolink2;
criartexto(url2,valor,Fous);

});
});
}


function criartexto(texto, L2,Fous){
 // textofilmes.value="1";
  if (Fous=="series"){
    var tix2 = " (Série)";
   }else{
    var tix2 = " (Filme)";
   }
  var NOME2 = nome.value;
  var block = `
${NOME2+tix2}

Link para Assistir 👇

Opção 2
Link para Assistir 👇
${texto}

Ative o PxFlix pro, sem anúncio👇
https://pxflix.ppoxa.com/modo-sem-ads

${L2}`; 

if ( block.includes("https://go.ppoxa.com/?n=7ITVse")>0  || block.includes("titolo=&")>0  || block.includes("capa=&f=")>0  ) {
 // textofilmes.innerHTML="Campo vazio!";
 textofilmes.style.display=""; 
 textofilmes.value="Campo vazio!";
  
  return;
}
//textofilmes.innerHTML=block;
textofilmes.value=block;
textofilmes.style.display="";
nome.value="";
quantosLinks.value="1";
linkImagem.value="";
//alert(block);
//alert(linkx);

}