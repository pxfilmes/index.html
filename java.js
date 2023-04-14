var hostnamex = "https://pxfilmes.github.io/filmes";
var linkDaPagina = window.location.href;
linkDaPagina = linkDaPagina.replace("/pro/","/")
linkDaPagina = linkDaPagina.replaceAll("=","X-X");
var urlpagina = window.location.href;
urlpagina = urlpagina.replace("/pro/","/")
var listaFavoritosCk = ('; ' + document.cookie).split(`; listaFilmesFavoritos`).pop().split(';')[0];
listaFavoritosCk = listaFavoritosCk.replace("==","");
listaFavoritosCk = listaFavoritosCk.replaceAll("/pro/","/");
var listaFavoritos = listaFavoritosCk.split(",");
var url = window.location.href;
var url = new URL(url);
var url1 = url.searchParams.get('f');
var titolo = url.searchParams.get('titolo');
var capa = url.searchParams.get('capa');
var url2 = url.searchParams.get('s');
var verificador = url.searchParams.get('v');
var temporada = url.searchParams.get('t');
var query = location.search.slice(1);
var listaUrl = query.split("&");
var temOUnao = titolo+","+capa+","+urlpagina+",";
var addfavoritocot = '0';
var valueBTN = ('; ' + document.cookie).split(`; ModoPro`).pop().split(';')[0];
var ex15 = ('; ' + document.cookie).split(`; expires15`).pop().split(';')[0];
valueBTN = valueBTN.replace("=","");
var modoPro = window.location.pathname;
var dominio = hostnamex;
var novaPgUrl = window.location.href;
var sms ="Oi%20vocÃª%20gosta%20de%20assistir%20filmes%20e%20sÃ©ries%20grÃ¡tis?%0A%0ASe%20sim,%20dÃ¡%20uma%20olhada%20nesse%20canal%20do%20Telegram%20lÃ¡%20Tem%20Centenas%20de%20filmes%20e%20sÃ©ries%20para%20vocÃª%20assistir%20gratuitamenteðŸ˜ðŸ˜‹à¼¼%20ã¤%20â—•_â—•%20à¼½ã¤!%20%0Ahttp://bit.ly/3TenhOT";
var BotaoAdd = document.querySelector('.listaFilmes__botao');


if (ex15.includes("15")){
    card15.style.display='none';
}


if (modoPro=="/filmes/pro/"){
    if (valueBTN==5){
        mais15dias();
    }else{

       if (linkDaPagina.includes("192.168")){
         novaPgUrl = novaPgUrl.replaceAll(dominio+":5500/pro",dominio+":5500");
        window.location= novaPgUrl;
          }else{
         novaPgUrl = novaPgUrl.replaceAll(dominio+"/pro/",dominio);
         window.location= novaPgUrl;
          }
    }
   }

window.onload = function () {
	var BotaoAdd = document.querySelector('.listaFilmes__botao');
    if (verificador==2){
        var navaAdd = "https://go.ppoxa.com/?n=";
    }else {
        var navaAdd = "";
    }

    
   // alert(listaFavoritos);
   if (modoPro=="/filmes/" || modoPro=="/filmes/pro/"){
             var BotaoAdd = document.querySelector('.listaFilmes__botao');
            BotaoAdd.addEventListener('click', () => {
            BotaoAdd.classList.toggle("listaFilmes__botao--ativo");
        })
    }
    if (listaFavoritosCk.includes(temOUnao)){
       //////// BotaoAdd.classList.toggle("listaFilmes__botao--ativo");
        addfavoritocot = '1';
     }
    if (url1==null){ 
        url1 = url2;
        var fOUs = 'EP: '+temporada+' ';
        var tirar = 's=';
    }else{ 
        var fOUs = 'Todos os filmes: ';
        var tirar = 'F=';
    }
   
    if (fOUs=='Todos os filmes: '){ 
        var cont = '2'; 
        if (listaUrl.length>4){
            var fOUs = 'Todos os filmes: ';
        } else { 
            var fOUs = '';
        }
    } else {
        var cont = '3';
        }
contar = 0;

if (verificador==2){
    var iginore = 4;
}else{
    var iginore = 3;
}
if (listaUrl.length>iginore){
    var LLlista = document.getElementById('listaFilmes');
    for (var i = cont; i <  (listaUrl.length - 1); i++){
        contar++;
        if (contar<10){ var num = ' 0';}else { var num = ' '}
        if (contar==1){
        listaFilmesH2.innerHTML += fOUs+titolo;
        }
        LLlista.innerHTML += `
        <a onclick="ifreme1(${[i]});xcolor(${'btn'+i});"><li class="lista__link" name="btn" id="btn${i}">${titolo+ num+contar}</li></a>
    `;}
}else {
    listaFilmesH2.innerHTML += titolo;
    listaFilmes.innerHTML += `
    <a onclick="ifreme1(${[i]});xcolor(${'btn'+i});"><li class="lista__link" name="btn" id="btn${i}">${titolo+ num+ contar}</li></a>
`;}
if (url1 == null){
//nÐŸÐ»Ðºo tem nada!
}else{
    if (verificador==2){}
    else{
        if (url1.includes('https://')){  
        } else if (url1.includes('http://')){
            url1 = url1.replace('http://','https://');
        } else {
            url1 = 'https://'+url1;
        } 
    }
   document.getElementById('filmes').src=navaAdd+url1;
}
if (navigator.userAgent.match(/instagram/i)){
    setTimeout(function(){
        imgTelagram.style.display='';
    },2000);}
	
ModoProF();
}

function ModoProF() {
    if (valueBTN>1){
        if (urlpagina.includes("modo-sem-ads")){
            if (valueBTN==2){
                stores1.style.background="#098113";
                stores2.style.background="#098113";
            }else if (valueBTN==3){
                stores2.style.background="#098113";
                stores1.style.background="#098113";
                stores3.style.background="#098113";
            }else if (valueBTN==4){
                stores3.style.background="#098113";
                stores2.style.background="#098113";
                stores1.style.background="#098113";
                stores4.style.background="#098113";
            }else if (valueBTN==5){
                stores4.style.background="#098113";
                stores5.style.background="#098113";
                stores3.style.background="#098113";
                stores2.style.background="#098113";
                stores1.style.background="#098113";
                var indicadorColor = document.querySelector(".icons-false");
                indicadorColor.classList.add("icons-false-ativo");
            }
        }else  if (valueBTN==5){
            ads1.innerHTML="";
            ads2.innerHTML="";
           // ads4.style.display="none";
           // ads5.style.display="none";
           // setTimeout( function(){ btn.style.display='none';},1000);
        } 
     }
    
     if (valueBTN==5){
        var indicadorColor = document.querySelector(".icons-false");
        var indicadorColorr = document.querySelector(".icons-false-2");
        indicadorColor.classList.add("icons-false-ativo");
        indicadorColorr.classList.add("icons-false-ativo-2");
        //ads1.innerHTML="";
       // ads2.innerHTML="";
       // ads4.style.display="none";
       // ads5.style.display="none";
       // var remov = "restlesscompeldescend.com";
       // var remov2 = "cdn.creative-bars1.com";
       // var conteudo = document.body.innerHTML;
        //conteudo = conteudo.replace(remov,"");
       // conteudo = conteudo.replace(remov2,"");
       // conteudo = conteudo.replace(remov2,"");
       // document.body.innerHTML=conteudo;
       if (modoPro=="/pro/"){
        if (valueBTN==5){}else{
             if (linkDaPagina.includes("192.168")){
         novaPgUrl = novaPgUrl.replaceAll(dominio+":5500/pro",dominio+":5500");
        window.location= novaPgUrl;
          }else{
         novaPgUrl = novaPgUrl.replaceAll(dominio+"/pro/",dominio);
         window.location= novaPgUrl;
          }
        }
       }else if (modoPro=="/"){
            if (linkDaPagina.includes("192.168")){
         novaPgUrl = novaPgUrl.replaceAll(dominio+":5500",dominio+":5500"+"/pro");
        window.location= novaPgUrl;
          }else{
         novaPgUrl = novaPgUrl.replaceAll(dominio,dominio+"/pro");
         window.location= novaPgUrl;
          }
       }
    }
}




var visitas = 0;
function clickBtn(){
  window.open("https://restlesscompeldescend.com/j3ynfxij?key=9918c78f84dfa81e8a63ee236d9b35f5");
    desligar();
    if (visitas==0){
        document.getElementById('iframeVisitas').src="https://bit.ly/3xQaubA";
        visitas++;
    }
}
function desligar(){
    btn.style.display='none';
    setTimeout( function(){ ligar();},150000);
}
function ligar(){
    btn.style.display='';
}
function adsStualizar(){
}
function ifreme1(i){
    var url = listaUrl[i];
    url=url.replaceAll("s=","");
    url=url.replaceAll("f=","");
    if (verificador==2){
        var navaAdd = "https://go.ppoxa.com/?n=";
    }else{
        var navaAdd = "";
        if (url.includes('https://')){  
            } else if (url.includes('http://')){
                url = url.replace('http://','https://')
            } else {
                url = 'https://'+url; 
            }
    }
    document.getElementById('filmes').src=navaAdd+url;
}
function xcolor(i){
        i.style.color = '#a5a5a5';
}


var bodyAtivo = 0;
function listaFilmes() {
    if (bodyAtivo==0){
        bodyAtivo++;
        document.body.style.overflow= "hidden";
        contfilme = 0;
    var listaFavoritosCk = ('; ' + document.cookie).split(`; listaFilmesFavoritos`).pop().split(';')[0];
    listaFavoritosCk = listaFavoritosCk.replace("==","");
    listaFavoritosCk = listaFavoritosCk.replaceAll("/pro/","/");
    var listaFavoritos = listaFavoritosCk.split(",");
    var addFilmes = document.getElementById('filmesFaviritoslista');
    addFilmes.innerHTML="";
    var valorFilmes = Math.trunc(listaFavoritos.length/3);
    for (var ia = 0; ia < valorFilmes; ia++){
        addFilmes.innerHTML+=`
        <li class="filmes__lista--filme"><a href="${listaFavoritos[contfilme+2]}"><img src="https://${listaFavoritos[contfilme+1]}" alt="${listaFavoritos[contfilme]}"></a>
        <h3>${listaFavoritos[contfilme]}</h3>
        </li>
        `;
        contfilme = (contfilme+3);
    }
    }else if (bodyAtivo==1){
        document.body.style.overflow= "auto";
        bodyAtivo = 0;
        if (modoPro=="/" || modoPro=="/pro/"){
        //addFilmes.innerHTML="";
        }
    }
}



function addfavorito() {
   if (addfavoritocot==1){
        var remover = titolo+","+capa+","+urlpagina+",";
        listaFavoritosCk = listaFavoritosCk.replace(remover,"");
        listaFavoritosCk = listaFavoritosCk.replaceAll("/pro/","/");
        document.cookie= "listaFilmesFavoritos=="+listaFavoritosCk+";expires=Fri, 31 Dec 9000 21:10:10 GMT; path=/";
        //alert(listaFavoritosCk);
        addfavoritocot='0';
    }else if(addfavoritocot==0){
        listaFavoritosCk = listaFavoritosCk.replaceAll("/pro/","/");
        document.cookie= "listaFilmesFavoritos=="+listaFavoritosCk+titolo+","+capa+","+urlpagina+","+"; expires=Fri, 31 Dec 9000 21:10:10 GMT; path=/";
        addfavoritocot='1';
    }
}

erro = 1;
function shorewh() {

        if (document.cookie.indexOf("ModoPro") < 0) {
            var nome= "ModoPro";
            valueBTN = 1;
            var date = new Date();
            date.setTime(date.getTime()+(170*60*60*1000));
            var expires = "; expires="+date.toGMTString();
            document.cookie = nome+"="+valueBTN+expires+"; path=/";

            var nome2= "expires15";
            valueBTN2 = 1;
            var date2 = new Date();
            date.setTime(date.getTime()+(140*60*60*1000));
            var expires2 = "; expires="+date2.toGMTString();
            document.cookie = nome2+"="+valueBTN2+expires2+"; path=/";


            }else if (valueBTN<5){
                valueBTN++;
                var nome= "ModoPro";
                var date = new Date();
                date.setTime(date.getTime()+(170*60*60*1000));
                var expires = "; expires="+date.toGMTString();
                document.cookie = nome+"="+valueBTN+expires+"; path=/";
                //alert(expires );

                var nome2= "expires15";
                valueBTN2 = 15;
                var date2 = new Date();
                date2.setTime(date2.getTime()+(140*60*60*1000));
                var expires2 = "; expires="+date2.toGMTString();
                document.cookie = nome2+"="+valueBTN2+expires2+"; path=/";
              //  alert(expires2);
            }
            if (valueBTN==1){
                setTimeout( function(){ 
                    stores1.style.background="#098113";
                },5000);
            }
            else if (valueBTN==2){
                setTimeout( function(){ 
                    stores2.style.background="#098113";
                },2000);
                    if (erro==1){
                        setTimeout(function(){
                            erro++;
                            alert("VocÃŠ nÃ¢o pode compartinha para a mesma pessoa ou no mesmo grupo!");
                            valueBTN=2;
                            stores2.style.background="red"
                        },5500);
                    }
            }else if (valueBTN==3){
                setTimeout( function(){ 
                    stores3.style.background="#098113";
                },2000);
            }else if (valueBTN==4){
                setTimeout( function(){ 
                    stores4.style.background="#098113";
                },2000);
    
            }else if (valueBTN==5){
                setTimeout( function(){ 
                    stores5.style.background="#098113";
                },2000);
                var indicadorColor = document.querySelector(".icons-false");
                var indicadorColorr = document.querySelector(".icons-false-2");
                indicadorColor.classList.add("icons-false-ativo");
                indicadorColorr.classList.add("icons-false-ativo-2");
            }
    if (window.innerWidth > 768) {
            window.open('https://api.whatsapp.com/send?text='+sms);
    }else{
            location.href = 'whatsapp://send?text='+sms;
    }
}


function mais15dias(){
if (document.cookie.indexOf("ModoPro") > 0){
    if (ex15.includes("15")){
    }else {
        setTimeout(function(){card15.style.display="";},3500);
    }
}
}
erro2=1;
dias15cont = 0;
function a15diasPro(){
    if (dias15cont==0){
        valueBTN=0;
    }
    dias15cont++;
    if (dias15cont==5){
    var nome= "ModoPro";
            var date = new Date();
            date.setTime(date.getTime()+(240*60*60*1000));
            var expires = "; expires="+date.toGMTString();
            document.cookie = nome+"="+dias15cont+expires+"; path=/";

            var nome2= "expires30";
            valueBTN2 = 30;
            var date2 = new Date();
            date2.setTime(date2.getTime()+(140*60*60*1000));
            var expires2 = "; expires="+date2.toGMTString();
            document.cookie = nome2+"="+valueBTN2+expires2+"; path=/";
    }else {
        valueBTN++;
    }

            if (valueBTN==1){
                setTimeout( function(){ 
                    cardColor1.style.background="#098113";
                },5000);
            }
            else if (valueBTN==2){
                setTimeout( function(){ 
                    cardColor2.style.background="#098113";
                },2000);
                    if (erro2==1){
                        setTimeout(function(){
                            erro2++;
                            dias15cont=2;
                            alert("VocÃŠ nÃ¢o pode compartinha para a mesma pessoa ou no mesmo grupo!");
                            valueBTN=2;
                            cardColor2.style.background="red"
                        },5500);
                    }
            }else if (valueBTN==3){
                setTimeout( function(){ 
                    cardColor3.style.background="#098113";
                },2000);
            }else if (valueBTN==4){
                setTimeout( function(){ 
                    cardColor4.style.background="#098113";
                },2000);
    
            }else if (valueBTN==5){
                setTimeout( function(){ 
                    cardColor5.style.background="#098113";
                    cardColor5.style.background="#098113";
                    cardColor4.style.background="#098113";
                    cardColor3.style.background="#098113";
                    cardColor2.style.background="#098113";
                    cardColor1.style.background="#098113";
                    alert("VocÃª ganhou mais 15 dias pro!")
                    card15.style.display="none"
                },2000);
            }
    if (window.innerWidth > 768) {
            window.open('https://api.whatsapp.com/send?text='+sms);
    }else{
            location.href = 'whatsapp://send?text='+sms;
    }


}

function traTV(){

    var tvlink = window.location.href;
    var valor2 = tvlink+"";
$.getJSON( " https://is.gd/create.php?callback=", {
    url:  valor2,
    format: "json"
}).done(function(  data ) {
  let novolink2go = "https://go.ppoxa.com/?n=" + data.shorturl;
	//console.log( novolink);
  if (novolink2go=="https://go.ppoxa.com/?n=undefined"){
    alert("Errou no Sistema");
    return;}
novolink2go = novolink2go.replace("https://is.gd/", "" )
var gotv ="https://seguir1.page.link/?link=" +novolink2go+ "&apn=com.instantbits.cast.webvideo&afl=https://play.google.com/store/apps/details?id=com.instantbits.cast.webvideo";
window.location= gotv;
});

}


