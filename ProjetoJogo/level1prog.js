var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


let cubeman = {
    x: 35, //spawn
    y: canvas.height-165,
    jump: true,
    raio: 16,
    altura: 32,
    largura: 32,
    speed_x: 0,
    speed_y: 0,
};

var ponto_de_partida = {
    x: 0,
    y: canvas.height-100,
    altura: 100,
    largura: 90,
};

var ponto_de_pulo = {
    x: canvas.width-90,
    y: canvas.height-100,
    altura: 100,
    largura: 90,
};

var obstaculo1={
    x: 200,
    y: canvas.height-200,
    altura: 10,
    largura: 120,
}

var obstaculo2={
    x: canvas.width/2-110,
    y: canvas.height/2+110,
    altura: 10,
    largura: 120,
}

var obstaculo3={
    x: canvas.width/2+40,
    y: canvas.height/2-35,
    altura: 10,
    largura: 120,
}

var obstaculo4={
    x: canvas.width-300,
    y: canvas.height-200,
    altura: 10,
    largura: 120,
}

var obstaculo5={
    x: canvas.width-120,
    y: canvas.height/2+100,
    altura: 10,
    largura: 120,
}

var obstaculo6={
    x: canvas.width/4+30,
    y: canvas.height/2-100,
    altura: 10,
    largura: 120,
}

var plataforma_da_bola={
    x: canvas.width/4+125,
    y: 225,
    altura: 10,
    largura: 250,
}

var controles = {
    right: false,
    left: false,
    up: false,
    keylistener: function(event){
        var key_state = (event.type == "keydown")?true:false;

        switch(event.keyCode){
            //esquerda
            case 37:
                controles.left = key_state;
                break;

            //direita
            case 39:
                controles.right = key_state;
                break;

            //pulo
            case 38:
                controles.up = key_state;
                break;
        }
    }
};

function controls(){
    if(controles.up && cubeman.jump == false){
        cubeman.speed_y -= 30; //alterar devolta para 20
        cubeman.jump = true;
    }

    if(controles.right){
        cubeman.speed_x += 0.5;
    }

    if(controles.left){
        cubeman.speed_x -= 0.5;
    }

    cubeman.speed_y += 1.5; //gravidade
    cubeman.x += cubeman.speed_x;
    cubeman.y += cubeman.speed_y;
    cubeman.speed_x *= 0.9; //fricção
    cubeman.speed_y *= 0.9; //fricção
}

function colision(){
    //teleporte para o outro lado da tela
    if(cubeman.x < -32){
        cubeman.x = 1000;
    }

    //teleporte para o outro lado da tela
    if(cubeman.x > 1000){
        cubeman.x = -32;
    }
    if(cubeman.y>=ponto_de_partida.y-cubeman.altura && cubeman.y<=ponto_de_partida.y+ponto_de_partida.altura && cubeman.x<=ponto_de_partida.x+ponto_de_partida.largura && cubeman.x>ponto_de_partida.x-cubeman.largura) {
        cubeman.jump = false;
        cubeman.y = ponto_de_partida.y - cubeman.altura;
        cubeman.speed_y = 0;
    }
    if(cubeman.y>=ponto_de_pulo.y-cubeman.altura && cubeman.y<=ponto_de_pulo.y+ponto_de_pulo.altura && cubeman.x<=ponto_de_pulo.x+ponto_de_pulo.largura && cubeman.x>ponto_de_pulo.x-cubeman.largura) {
        cubeman.jump = false;
        cubeman.y = ponto_de_pulo.y - cubeman.altura;
        cubeman.speed_y = 0;
    }
    if(cubeman.y>=obstaculo1.y-cubeman.altura && cubeman.y<=obstaculo1.y+obstaculo1.altura && cubeman.x<=obstaculo1.x+obstaculo1.largura && cubeman.x>obstaculo1.x-cubeman.largura) {
        cubeman.jump = false;
        cubeman.y = obstaculo1.y - cubeman.altura;
        cubeman.speed_y = 0;
    }
    if(cubeman.y>=obstaculo2.y-cubeman.altura && cubeman.y<=obstaculo2.y+obstaculo2.altura && cubeman.x<=obstaculo2.x+obstaculo2.largura && cubeman.x>obstaculo2.x-cubeman.largura) {
        cubeman.jump = false;
        cubeman.y = obstaculo2.y - cubeman.altura;
        cubeman.speed_y = 0;
    }
    if(cubeman.y>=obstaculo3.y-cubeman.altura && cubeman.y<=obstaculo3.y+obstaculo3.altura && cubeman.x<=obstaculo3.x+obstaculo3.largura && cubeman.x>obstaculo3.x-cubeman.largura) {
        cubeman.jump = false;
        cubeman.y = obstaculo3.y - cubeman.altura;
        cubeman.speed_y = 0;
    }
    if(cubeman.y>=obstaculo4.y-cubeman.altura && cubeman.y<=obstaculo4.y+obstaculo4.altura && cubeman.x<=obstaculo4.x+obstaculo4.largura && cubeman.x>obstaculo4.x-cubeman.largura) {
        cubeman.jump = false;
        cubeman.y = obstaculo4.y - cubeman.altura;
        cubeman.speed_y = 0;
    }
    if(cubeman.y>=obstaculo5.y-cubeman.altura && cubeman.y<=obstaculo5.y+obstaculo5.altura && cubeman.x<=obstaculo5.x+obstaculo5.largura && cubeman.x>obstaculo5.x-cubeman.largura) {
        cubeman.jump = false;
        cubeman.y = obstaculo5.y - cubeman.altura;
        cubeman.speed_y = 0;
    }
    if(cubeman.y>=obstaculo6.y-cubeman.altura && cubeman.y<=obstaculo6.y+obstaculo6.altura && cubeman.x<=obstaculo6.x+obstaculo6.largura && cubeman.x>obstaculo6.x-cubeman.largura) {
        cubeman.jump = false;
        cubeman.y = obstaculo6.y - cubeman.altura;
        cubeman.speed_y = 0;
    }
    if(cubeman.y>=plataforma_da_bola.y-cubeman.altura && cubeman.y<=plataforma_da_bola.y+plataforma_da_bola.altura && cubeman.x<=plataforma_da_bola.x+plataforma_da_bola.largura && cubeman.x>plataforma_da_bola.x-cubeman.largura) {
        cubeman.jump = false;
        cubeman.y = plataforma_da_bola.y - cubeman.altura;
        cubeman.speed_y = 0;
    }
}

function perdeu_mano(){
    if (cubeman.y >= canvas.height-50){
        cubeman.jump = false;
        cubeman.speed_y = 0;
        cubeman.speed_x = 0;
        cubeman.x = 35;
        cubeman.y = canvas.height-165;
    }
}


loop = function(){
    controls();
    colision();
    perdeu_mano();

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 1000, 900);
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.rect(cubeman.x, cubeman.y, cubeman.largura, cubeman.altura);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(ponto_de_partida.x, ponto_de_partida.y, ponto_de_partida.largura, ponto_de_partida.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(ponto_de_pulo.x, ponto_de_pulo.y, ponto_de_pulo.largura, ponto_de_pulo.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(obstaculo1.x, obstaculo1.y, obstaculo1.largura, obstaculo1.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(obstaculo2.x, obstaculo2.y, obstaculo2.largura, obstaculo2.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(obstaculo3.x, obstaculo3.y, obstaculo3.largura, obstaculo3.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(obstaculo4.x, obstaculo4.y, obstaculo4.largura, obstaculo4.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(obstaculo5.x, obstaculo5.y, obstaculo5.largura, obstaculo5.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(plataforma_da_bola.x, plataforma_da_bola.y, plataforma_da_bola.largura, plataforma_da_bola.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(obstaculo6.x, obstaculo6.y, obstaculo6.largura, obstaculo6.altura);


    //triângulos da parte de baixo
    ctx.beginPath();
    ctx.moveTo(90, canvas.height);
    ctx.lineTo(140,canvas.height);
    ctx.lineTo(115,canvas.height-50);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(140, canvas.height);
    ctx.lineTo(190,canvas.height);
    ctx.lineTo(165,canvas.height-50);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(190, canvas.height);
    ctx.lineTo(240,canvas.height);
    ctx.lineTo(215,canvas.height-50);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(240, canvas.height);
    ctx.lineTo(290,canvas.height);
    ctx.lineTo(265,canvas.height-50);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(290, canvas.height);
    ctx.lineTo(340,canvas.height);
    ctx.lineTo(315,canvas.height-50);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(340, canvas.height);
    ctx.lineTo(390,canvas.height);
    ctx.lineTo(365,canvas.height-50);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(390, canvas.height);
    ctx.lineTo(440,canvas.height);
    ctx.lineTo(415,canvas.height-50);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(440, canvas.height);
    ctx.lineTo(490,canvas.height);
    ctx.lineTo(465,canvas.height-50);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(490, canvas.height);
    ctx.lineTo(540,canvas.height);
    ctx.lineTo(515,canvas.height-50);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(540, canvas.height);
    ctx.lineTo(590,canvas.height);
    ctx.lineTo(565,canvas.height-50);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(590, canvas.height);
    ctx.lineTo(640,canvas.height);
    ctx.lineTo(615,canvas.height-50);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(640, canvas.height);
    ctx.lineTo(690,canvas.height);
    ctx.lineTo(665,canvas.height-50);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(690, canvas.height);
    ctx.lineTo(740,canvas.height);
    ctx.lineTo(715,canvas.height-50);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(740, canvas.height);
    ctx.lineTo(790,canvas.height);
    ctx.lineTo(765,canvas.height-50);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(790, canvas.height);
    ctx.lineTo(840,canvas.height);
    ctx.lineTo(815,canvas.height-50);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(840, canvas.height);
    ctx.lineTo(890,canvas.height);
    ctx.lineTo(865,canvas.height-50);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(890, canvas.height);
    ctx.lineTo(940,canvas.height);
    ctx.lineTo(915,canvas.height-50);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "grey";
    ctx.arc(canvas.width/2, 200, 16, 0, Math.PI*2, undefined);
    ctx.fill();

    if (cubeman.x >= canvas.width/2 && cubeman.y <= 200){
        var f = document.getElementById("final");
        if(f.style.display=="block"){
            f.style.display ="none";
        }
        else{
            f.style.display="block";
        }

    }

    requestAnimationFrame(loop);
}

document.addEventListener("keydown", controles.keylistener);
document.addEventListener("keyup", controles.keylistener);

function main(){
    loop();
    var btt = document.getElementById("botao");
    btt.remove();
}