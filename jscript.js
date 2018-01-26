var lettere = generaLettere();
var flag = false;
var timerino;
document.getElementById("ins").disabled = true;


function classificaDB() {
  var temp;
  var oReq = new XMLHttpRequest();
  oReq.onload = function() {
    temp = (JSON.stringify(this.responseText));
    temp = temp.substring(1, temp.length - 2);
    array = temp.split("/");
    for(var i = 0; i < array.length; i++) {
      var temp1 = [];
      temp1 = array[i].split("-");
      document.getElementById("n" + i).innerHTML = temp1[0];
      document.getElementById("p" + i).innerHTML = temp1[1];
    }
  };
  oReq.open("get", "prova1.php", true);
  oReq.send();
}


function controllaPunteggio() {
  var t = document.getElementById("p7").innerHTML;
  if(punt > t) {
    do {
      var nome = prompt("Complimenti hai superato un giocatore in classifica! Inserisci il tuo nome:");
    }while(nome == "");
    var player = [];
    var score = [];
    for(var i = 0; i < array.length; i++) {
      var temp = [];
      temp = array[i].split("-");
      player[i] = temp[0];
      score[i] = temp[1];
    }
    $.get("inserisciDatabase.php", {q: nome, p: punt, n: player, s: score});
    alert("Aggiunto in classifica!!");
    classificaDB();
  }
}


function generaLettere() {
  var vocali="AEIOU";
  var consonanti="BCDFGHLMNPQRSTVZ";
  var cons = [];
  var voc = [];
  var lettere = [];
  for(var i=0;i<8;i++) {
    var r = Math.floor(Math.random()*16);
    cons.push(consonanti.charAt(r));
    for(var j=0;j<i;j++) {
      if(cons[i]==cons[j]) {
        cons.pop();
        j=i;
        i--;
      }
    }
  }
  for(var i=0;i<4;i++) {
    var r = Math.floor(Math.random()*5);
    voc.push(vocali.charAt(r));
    for(var j=0;j<i;j++) {
      if(voc[i]==voc[j]) {
        voc.pop();
        j=i;
        i--;
      }
    }
  }
  for(var i=0;i<12;i++) {
    if(i<4) {
      lettere.push(voc[i]);
    }
    else {
      lettere.push(cons[i-4]);
    }
  }
  return lettere;
}


function mettiLettere() {
  for(var i=0;i<12;i++) {
    document.getElementById("c"+i).innerHTML=lettere[i];
  }
  return;
}


var let="";


function char_consentiti() {
  let="";
  for(var i=0; i<12;i++) {
    let=let+lettere[i]+lettere[i].toLowerCase();
  }
  document.getElementById("ins").onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    var pro = chr.charCodeAt(0);
    if(pro == 13){
      document.getElementById("invia").click() = true;
    }
    if (let.indexOf(chr) < 0)
    return false;
  };
}



function bottone() {
  var bool = document.getElementById('bottone').innerHTML;
  if(bool == "GIOCA") {
    flag=true;
    document.getElementById("ins").disabled = false;
    mettiLettere();
    startTimer()
    char_consentiti();
    document.getElementById("invia").disabled = false;
    document.getElementById("bottone").innerHTML = "RESETTA";
    document.getElementById("ins").focus();
  }
  else {
    for(var i=0;i<12;i++) {
      document.getElementById("c"+i).innerHTML="X";
    }
    punt=0;
    document.getElementById("punti").innerHTML = punt;
    document.getElementById("ins").disabled = true;
    document.getElementById("ins").value="";
    lettere = generaLettere();
    flag = false;
    document.getElementById("bottone").innerHTML = "GIOCA";
    document.getElementById("tempo").innerHTML = 01+":"+20;
    clearTimeout(timerino);
  }
}



function startTimer() {
  if(flag) {
    var presentTime = document.getElementById("tempo").innerHTML;
    var timeArray = presentTime.split(/[:]+/);
    var m = timeArray[0];
    var s = checkSecond((timeArray[1] - 1));
    if(s==59) {
      m=m-1;
    }
    if(m<0) {
      document.getElementById('bottone').innerHTML="RIGIOCA";
      document.getElementById("invia").disabled = true;
      controllaPunteggio();
      return;
    }
    document.getElementById('tempo').innerHTML = m+":"+s;
    timerino = setTimeout(startTimer, 1000);
  }
}



function checkSecond(sec) {
  if (sec < 10 && sec >= 0)
    sec = "0" + sec;
  if (sec < 0)
    sec = "59";
  return sec;
}
