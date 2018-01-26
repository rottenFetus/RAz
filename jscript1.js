var parole=[];
var punt=0;
var trovate=[];
var cons=true;
$(function(){
  $.get("http://raz.x10.mx/Raz/connect.php",function(data){
    parole = data.split('~');
  });
  $(".bottoneInvia").click(function(){
    var ins = document.getElementById("ins").value;
    ins = ins.toLowerCase();
    cons = true;
    for(var j=0; j<trovate.length; j++){
      if(ins == trovate[j]){
        cons=false;
        document.getElementById("O").style.display="block";
        document.getElementById("ins").value="";
        document.getElementById("O").innerHTML="GIÀ MESSA!";
        document.getElementById("O").style.backgroundColor="#ffad33";
        setTimeout(function(){
            document.getElementById("O").style.display="none";
        }, 1000);

        return;
      }
    }
    for(var i=0; i<70618 && cons == true; i++){
      if(ins == parole[i]){
        punt = punt + ins.length;
        document.getElementById("punti").innerHTML = punt;
        trovate.push(ins);
        i=70618;
        document.getElementById("O").style.display="block";
        document.getElementById("ins").value="";
        document.getElementById("O").innerHTML="GIUSTO!";
        document.getElementById("O").style.backgroundColor="#2eb82e";
        setTimeout(function(){
            document.getElementById("O").style.display="none";
        }, 1000);
        return;
      }
    }
    if(ins=="")
    return;
    document.getElementById("O").style.display="block";
    document.getElementById("ins").value="";
    document.getElementById("O").innerHTML="SBAGLIATO!";
    document.getElementById("O").style.backgroundColor="#ff3333";
    setTimeout(function(){
        document.getElementById("O").style.display="none";
    }, 1000);
  });
  var cella;
  function inserimento(cella){
    var l="";
    l = document.getElementById(cella).innerHTML;
    if(flag)
    document.getElementById("ins").value= document.getElementById("ins").value + l;
    document.getElementById("ins").focus();
  }
  $("#c" + 0).click(function(){
    inserimento("c"+0);
  });
  $("#c" + 1).click(function(){
    inserimento("c"+1);
  });
  $("#c" + 2).click(function(){
    inserimento("c"+2);
  });
  $("#c" + 3).click(function(){
    inserimento("c"+3);
  });
  $("#c" + 4).click(function(){
    inserimento("c"+4);
  });
  $("#c" + 5).click(function(){
    inserimento("c"+5);
  });
  $("#c" + 6).click(function(){
    inserimento("c"+6);
  });
  $("#c" + 7).click(function(){
    inserimento("c"+7);
  });
  $("#c" + 8).click(function(){
    inserimento("c"+8);
  });
  $("#c" + 9).click(function(){
    inserimento("c"+9);
  });
  $("#c" + 10).click(function(){
    inserimento("c"+10);
  });
  $("#c" + 11).click(function(){
    inserimento("c"+11);
  });
});
