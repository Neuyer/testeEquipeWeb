/*function armazenaDados(){
    var dados = [{
                  nome:"",
                  email:"",
                  rg:"",
                  cpf:"",
                  cidade:"",
                  cep:"",
                  tel:"",
                  cel:"",
                  linkedin:"",
                  git:""
                }];
    dados.nome=document.forms.formulario.nome.value;
    dados.email=document.forms.formulario.email.value;
    dados.rg=document.forms.formulario.rg.value;
    dados.cpf=document.forms.formulario.cpf.value;
    dados.cidadee=document.forms.formulario.cidade.value;
    dados.cep=document.forms.formulario.cep.value;
    dados.tel=document.forms.formulario.tel.value;
    dados.cel=document.forms.formulario.cel.value;
    dados.linkedin=document.forms.formulario.linkedin.value;
    dados.git=document.forms.formulario.git.value;
}**/

var i=1;
function mudaCampo(){
    var deco = document.getElementById("containerDec")
    var btn = document.getElementById("btn")
    var list = document.querySelectorAll(".indicadores");
    var field= document.querySelectorAll(".campo");
    var h2= document.querySelectorAll(".h");
    var p= document.querySelectorAll(".campo p");
    var inp= document.querySelectorAll("input");
        for(var j=0; j<list.length; j++){
            list[j].style.backgroundColor="rgb(48, 48, 48)";
            field[j].style.display="none";
              h2[j].style.display="none";
        }
        if(i==list.length-1){
           btn.innerHTML="Confirmar";
            for(var k in p){
              p[k].innerHTML= inp[k].value;
            }
            btn.setAttribute("type","submit");
            btn.setAttribute("form","form");

        }
          if(i<list.length){
              if(i==0){
                   deco.style.display="block";
                   i++;
                   }else{
                       list[i].style.backgroundColor="rgb(225, 34, 41)";
                        field[i].style.display="block";
                          h2[i].style.display="block";
                        deco.style.display="none";
                       i++;
                   }
          }else{ i=0;
              list[i].style.backgroundColor="rgb(225, 34, 41)";
               field[i].style.display="block";
               h2[i].style.display="block";
               deco.style.display="block";
               i++;
                  }

}
