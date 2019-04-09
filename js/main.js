var velha =[[10,10,10],[10,10,10],[10,10,10]];
var ig = 1
var cls ="";
var placarx =0;
var placaro=0;

function cor(){
if(ig == 1){
    var x = document.getElementById("bolinha")
    var y = document.getElementById("xx")
    x.className ="cfy";
    y.className = "cfo";
}
if(ig == 0){
    var x = document.getElementById("bolinha")
    var y = document.getElementById("xx")
    x.className ="cfo";
    y.className = "cfy";
}
}

function insertmatr(cod1,cod2){
    cor();
 if(cod1 == 0 && cod2 == 0){
     var e = document.getElementById("ca1");
     if(e.classList.contains("imgo") ||e.classList.contains("imgx")){
        return ;
     }else{
        if(ig == 0){
            cls ="block imgo";
            ig = 1;
        }else{
            cls ="block imgx"; 
            ig = 0;
        }
     e.className = cls;
     velha[0][0] = ig;     
     }
 }
 if(cod1 == 0 && cod2 == 1){
    var e = document.getElementById("ca2");
    if(e.classList.contains("imgo") ||e.classList.contains("imgx")){
        return ;
     }else{
        if(ig == 0){
            cls ="block imgo";
            ig = 1;
        }else{
            cls ="block imgx"; 
            ig = 0;
        }
     e.className = cls;
     velha[0][1] = ig;
     }
}
if(cod1 == 0 && cod2 == 2){
    var e = document.getElementById("ca3");
    if(e.classList.contains("imgo") ||e.classList.contains("imgx")){
        return ;
     }else{
        if(ig == 0){
            cls ="block imgo";
            ig = 1;
        }else{
            cls ="block imgx"; 
            ig = 0;
        }
     e.className = cls;
     velha[0][2] = ig;
     }
}
if(cod1 == 1 && cod2 == 0){
    var e = document.getElementById("ca4");
    if(e.classList.contains("imgo") ||e.classList.contains("imgx")){
        return ;
     }else{
        if(ig == 0){
            cls ="block imgo";
            ig = 1;
        }else{
            cls ="block imgx"; 
            ig = 0;
        }
     e.className = cls;
     velha[1][0] = ig;
     }
}
if(cod1 == 1 && cod2 == 1){
    var e = document.getElementById("ca5");
    if(e.classList.contains("imgo") ||e.classList.contains("imgx")){
        return ;
     }else{
        if(ig == 0){
            cls ="block imgo";
            ig = 1;
        }else{
            cls ="block imgx"; 
            ig = 0;
        }
     e.className = cls;
     velha[1][1] = ig;
     }
}
if(cod1 == 1 && cod2 == 2){
    var e = document.getElementById("ca6");
    if(e.classList.contains("imgo") ||e.classList.contains("imgx")){
        return ;
     }else{
        if(ig == 0){
            cls ="block imgo";
            ig = 1;
        }else{
            cls ="block imgx"; 
            ig = 0;
        }
     e.className = cls;
     velha[1][2] = ig;
     }
}
if(cod1 == 2 && cod2 == 0){
    var e = document.getElementById("ca7");
    if(e.classList.contains("imgo") ||e.classList.contains("imgx")){
        return ;
     }else{
        if(ig == 0){
            cls ="block imgo";
            ig = 1;
        }else{
            cls ="block imgx"; 
            ig = 0;
        }
     e.className = cls;
     velha[2][0] = ig;
     }
}
if(cod1 == 2 && cod2 == 1){
    var e = document.getElementById("ca8");
    if(e.classList.contains("imgo") ||e.classList.contains("imgx")){
        return ;
     }else{
        if(ig == 0){
            cls ="block imgo";
            ig = 1;
        }else{
            cls ="block imgx"; 
            ig = 0;
        }
     e.className = cls;
     velha[2][1] = ig;
     }
}
if(cod1 == 2 && cod2 == 2){
    var e = document.getElementById("ca9");
    if(e.classList.contains("imgo") || e.classList.contains("imgx")){
        return ;
     }else{
        if(ig == 0){
            cls ="block imgo";
            ig = 1;
        }else{
            cls ="block imgx"; 
            ig = 0;
        }
     e.className = cls;
     velha[2][2] = ig;
    
     }
}
ver();
}

function placar(){
    var x = document.getElementById("pontox")
    var o = document.getElementById("pontoo")
    x.value = placarx;
    o.value = placaro;
    velha =[[10,10,10],[10,10,10],[10,10,10]];
    for(var x =1;x<=9;x++){
        var e = document.getElementById("ca"+x);
        e.className = "block";
    } 
    document.getElementById("mascak").style.display="none";  
}
function newg(){
velha =[[10,10,10],[10,10,10],[10,10,10]];
ig = 1;
cls ="";
placarx =0;
placaro=0;
placar();
cor()

}

function ver(){
    var rest = 0;
    if(velha[0][0]+velha[0][1]+velha[0][2] == 3 || velha[1][0]+velha[1][1]+velha[1][2] == 3|| velha[2][0]+velha[2][1]+velha[2][2] == 3){
        placaro++;
        document.getElementById("masc").className = "ov";
        document.getElementById("mascak").style.display="block";
    }
    if(velha[0][0]+velha[0][1]+velha[0][2] == 0 || velha[1][0]+velha[1][1]+velha[1][2] == 0|| velha[2][0]+velha[2][1]+velha[2][2] == 0){
        placarx++;
        document.getElementById("masc").className = "xv";
        document.getElementById("mascak").style.display="block";
    }
    if(velha[0][0]+velha[1][0]+velha[2][0] == 3 || velha[0][1]+velha[1][1]+velha[2][1] == 3|| velha[0][2]+velha[1][2]+velha[2][2] == 3){
        placaro++;
        document.getElementById("masc").className = "ov";
        document.getElementById("mascak").style.display="block";
    }
    if(velha[0][0]+velha[1][0]+velha[2][0] == 0 || velha[0][1]+velha[1][1]+velha[2][1] == 0|| velha[0][2]+velha[1][2]+velha[2][2] == 0){
        placarx++;
        document.getElementById("masc").className = "xv";
        document.getElementById("mascak").style.display="block";
    }
    if(velha[0][0]+velha[1][1]+velha[2][2] == 3 || velha[0][2]+velha[1][1]+velha[2][0] == 3){
        placaro++;
        document.getElementById("masc").className = "ov";
        document.getElementById("mascak").style.display="block";
    }
    if(velha[0][0]+velha[1][1]+velha[2][2] == 0 || velha[0][2]+velha[1][1]+velha[2][0] == 0){
        placarx++;
        document.getElementById("masc").className = "xv";
        document.getElementById("mascak").style.display="block";
    }
    else{
        for(var x =0 ;x<=2;x++){
            for(var j =0 ;j<=2;j++){
            rest += velha[x][j];
            }
            if(rest == 4 ||rest == 5){
                document.getElementById("masc").className = "velha";
                document.getElementById("mascak").style.display="block";
            }
        }
    }

}
function troca(btn){
if(btn ==1){
    ig = 1;  
}else{
    ig = 0;
}
}