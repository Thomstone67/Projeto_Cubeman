var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//var cubemanImage = new Image();
//cubemanImage.src = "./cubeman.png";
let cubeman = {
    //foto: cubemanImage,
    x: 35, //spawn
    y: canvas.height-165,
    jump: true,
    raio: 16,
    altura: 32, //originally 128
    largura: 32, //originally 98
    speed_x: 0,
    speed_y: 0,
};

var obstaculo1 = {
    x: canvas.width/4,
    y: canvas.height/2,
    altura: 10,
    largura: 90,
};

var obstaculo2 = {
    x: canvas.width/2 + 30,
    y: canvas.height/2 + 40,
    altura: 10,
    largura: 90,
};

var obstaculo3 = {
    x: canvas.width/2 + 200,
    y: canvas.height/2 - 60,
    altura: 10,
    largura: 90,
};
var obstaculo4 = {
    x: canvas.width/2 -80,
    y: canvas.width/2 +60,
    altura: 10,
    largura: 90,
};
var obstaculo5 = {
    x: canvas.width/2 +190,
    y: canvas.height/2 +55,
    altura: 10,
    largura: 90,
}
var obstaculo6 = {
    x: 185,
    y: canvas.height/2+265,
    altura: 10,
    largura: 110,
}
var obstaculo7 = {
    x: 320,
    y: canvas.height/2+210,
    altura: 10,
    largura: 90,
}
var obstaculo8 = {
    x: 100,
    y: canvas.height/2+90,
    altura: 100,
    largura: 10,
}
var obstaculo9 = {
    x: canvas.width/2+120,
    y: canvas.height/2+200,
    altura: 10,
    largura: 150,
}

var obstaculo10={
    x: 50+65,
    y: 55,
    altura: 10,
    largura: 400,
};

var obstaculo11={
    x: 0,
    y: 55,
    altura: 10,
    largura: 50,
};

var obstaculo12={
    x: canvas.width/4-30,
    y: canvas.height/4+40,
    altura: 10,
    largura: 250,
}

var obstaculo13={
    x: 60,
    y: 100+40,
    altura: 10,
    largura: 90,
}

var obstaculo14={
    x: canvas.width/2,
    y: canvas.height/2-50,
    altura: 10,
    largura: 90,
}

var parede_de_espinhos={
    x: canvas.width/2,
    y: 125,
    altura: 10,
    largura: 450,
}

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

var paredao1={
    x: canvas.width/2 - 20,
    y: 55,
    altura: 10,
    largura: 550,
};

var paredao2={
    x: canvas.width/2-30,
    y: -190,
    altura: 250,
    largura: 10,
}

var plataforma1={
    x: canvas.width-90,
    y: canvas.width/2,
    altura: 10,
    largura: 90,
};

var porta={
    x: 50,
    y: 55,
    altura: 10,
    largura: 65,
};

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

    //colisão com obstáculos
    if(cubeman.y>=obstaculo1.y-cubeman.altura && cubeman.y<=obstaculo1.y+obstaculo1.altura && cubeman.x<=obstaculo1.x+obstaculo1.largura && cubeman.x>=obstaculo1.x-cubeman.largura){
        cubeman.jump = false;
        cubeman.y = obstaculo1.y-cubeman.altura;
        cubeman.speed_y = 0;
    }

    if(cubeman.y>=obstaculo2.y-cubeman.altura && cubeman.y<=obstaculo2.y+obstaculo2.altura && cubeman.x<=obstaculo2.x+obstaculo2.largura && cubeman.x>obstaculo2.x-cubeman.largura){
        cubeman.jump = false;
        cubeman.y = obstaculo2.y-cubeman.altura;
        cubeman.speed_y = 0;
    }

    if(cubeman.y>=obstaculo3.y-cubeman.altura && cubeman.y<=obstaculo3.y+obstaculo3.altura && cubeman.x<=obstaculo3.x+obstaculo3.largura && cubeman.x>obstaculo3.x-cubeman.largura){
        cubeman.jump = false;
        cubeman.y = obstaculo3.y-cubeman.altura;
        cubeman.speed_y = 0;
    }

    if(cubeman.y>=obstaculo4.y-cubeman.altura && cubeman.y<=obstaculo4.y+obstaculo4.altura && cubeman.x<=obstaculo4.x+obstaculo4.largura && cubeman.x>obstaculo4.x-cubeman.largura){
        cubeman.jump = false;
        cubeman.y = obstaculo4.y-cubeman.altura;
        cubeman.speed_y = 0;
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
    if(cubeman.y>=obstaculo7.y-cubeman.altura && cubeman.y<=obstaculo7.y+obstaculo7.altura && cubeman.x<=obstaculo7.x+obstaculo7.largura && cubeman.x>obstaculo7.x-cubeman.largura) {
        cubeman.jump = false;
        cubeman.y = obstaculo7.y - cubeman.altura;
        cubeman.speed_y = 0;
    }
    if(cubeman.y>=obstaculo9.y-cubeman.altura && cubeman.y<=obstaculo9.y+obstaculo9.altura && cubeman.x<=obstaculo9.x+obstaculo9.largura && cubeman.x>obstaculo9.x-cubeman.largura) {
        cubeman.jump = false;
        cubeman.y = obstaculo9.y - cubeman.altura;
        cubeman.speed_y = 0;
    }
    if(cubeman.y>=plataforma1.y-cubeman.altura && cubeman.y<=plataforma1.y+plataforma1.altura && cubeman.x<=plataforma1.x+plataforma1.largura && cubeman.x>plataforma1.x-cubeman.largura) {
        cubeman.jump = false;
        cubeman.y = plataforma1.y - cubeman.altura;
        cubeman.speed_y = 0;
    }
    if(cubeman.y>=obstaculo10.y-cubeman.altura && cubeman.y<=obstaculo10.y+obstaculo10.altura && cubeman.x<=obstaculo10.x+obstaculo10.largura && cubeman.x>obstaculo10.x-cubeman.largura) {
        cubeman.jump = false;
        cubeman.y = obstaculo10.y - cubeman.altura;
        cubeman.speed_y = 0;
    }
    if(cubeman.y>=obstaculo12.y-cubeman.altura && cubeman.y<=obstaculo12.y+obstaculo12.altura && cubeman.x<=obstaculo12.x+obstaculo12.largura && cubeman.x>obstaculo12.x-cubeman.largura) {
        cubeman.jump = false;
        cubeman.y = obstaculo12.y - cubeman.altura;
        cubeman.speed_y = 0;
    }
    if(cubeman.y>=obstaculo13.y-cubeman.altura && cubeman.y<=obstaculo13.y+obstaculo13.altura && cubeman.x<=obstaculo13.x+obstaculo13.largura && cubeman.x>obstaculo13.x-cubeman.largura) {
        cubeman.jump = false;
        cubeman.y = obstaculo13.y - cubeman.altura;
        cubeman.speed_y = 0;
    }
    if(cubeman.y>=obstaculo14.y-cubeman.altura && cubeman.y<=obstaculo14.y+obstaculo14.altura && cubeman.x<=obstaculo14.x+obstaculo14.largura && cubeman.x>obstaculo14.x-cubeman.largura) {
        cubeman.jump = false;
        cubeman.y = obstaculo14.y - cubeman.altura;
        cubeman.speed_y = 0;
    }
    //condições epeciais
    if(cubeman.y>=obstaculo11.y-cubeman.altura && cubeman.y<=obstaculo11.y+obstaculo11.altura && cubeman.x<=obstaculo11.x+obstaculo11.largura && cubeman.x>obstaculo11.x-cubeman.largura){
        cubeman.jump = false;
        cubeman.y = obstaculo11.y - cubeman.altura;
        cubeman.speed_y = 0;
    }
    if(cubeman.y>=paredao1.y-cubeman.altura && cubeman.y<=paredao1.y+paredao1.altura && cubeman.x<=paredao1.x+paredao1.largura && cubeman.x>paredao1.x-cubeman.largura){
        cubeman.jump = false;
        cubeman.y = paredao1.y - cubeman.altura;
        cubeman.speed_y = 0;
    }
    if(cubeman.y>=paredao2.y-cubeman.altura && cubeman.y<=paredao2.y+paredao2.altura && cubeman.x<=paredao2.x+paredao2.largura && cubeman.x>paredao2.x-cubeman.largura){
        cubeman.jump = false;
        cubeman.x = paredao2.x - cubeman.largura;
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
    if (cubeman.y>=obstaculo8.y-cubeman.altura && cubeman.y<=obstaculo8.y+obstaculo8.altura && cubeman.x<=obstaculo8.x+obstaculo8.largura && cubeman.x>obstaculo8.x-cubeman.largura){
        cubeman.jump = false;
        cubeman.speed_y = 0;
        cubeman.speed_x = 0;
        cubeman.x = 35;
        cubeman.y = canvas.height-165;
    }
    if (cubeman.y>=parede_de_espinhos.y-cubeman.altura && cubeman.y<=parede_de_espinhos.y+parede_de_espinhos.altura && cubeman.x<=parede_de_espinhos.x+parede_de_espinhos.largura && cubeman.x>parede_de_espinhos.x-cubeman.largura){
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
    ctx.fillRect(ponto_de_partida.x, ponto_de_partida.y, ponto_de_partida.largura, ponto_de_partida.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(ponto_de_pulo.x, ponto_de_pulo.y, ponto_de_pulo.largura, ponto_de_pulo.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(obstaculo5.x, obstaculo5.y, obstaculo5.largura, obstaculo5.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(obstaculo6.x, obstaculo6.y, obstaculo6.largura, obstaculo6.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(obstaculo7.x, obstaculo7.y, obstaculo7.largura, obstaculo7.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(obstaculo8.x, obstaculo8.y, obstaculo8.largura, obstaculo8.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(obstaculo9.x, obstaculo9.y, obstaculo9.largura, obstaculo9.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(paredao1.x, paredao1.y, paredao1.largura, paredao1.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(paredao2.x, paredao2.y, paredao2.largura, paredao2.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(plataforma1.x,plataforma1.y, plataforma1.largura, plataforma1.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(porta.x, porta.y, porta.largura, porta.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(obstaculo10.x, obstaculo10.y, obstaculo10.largura, obstaculo10.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(obstaculo11.x, obstaculo11.y, obstaculo11.largura, obstaculo11.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(obstaculo12.x, obstaculo12.y, obstaculo12.largura, obstaculo12.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(obstaculo13.x, obstaculo13.y, obstaculo13.largura, obstaculo13.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(obstaculo14.x, obstaculo14.y, obstaculo14.largura, obstaculo14.altura);
    ctx.beginPath();
    ctx.fillStyle = "black";
    ctx.fillRect(parede_de_espinhos.x, parede_de_espinhos.y, parede_de_espinhos.largura, parede_de_espinhos.altura);


    //desenhando os triângulos da parte de baixo
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

    //triangulozinhos do obstáculo 8
    ctx.beginPath();
    ctx.moveTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+90);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+100);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura+10,canvas.height/2+95);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+100);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+110);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura+10,canvas.height/2+105);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+110);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+120);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura+10,canvas.height/2+115);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+120);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+130);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura+10,canvas.height/2+125);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+130);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+140);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura+10,canvas.height/2+135);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+140);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+150);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura+10,canvas.height/2+145);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+150);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+160);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura+10,canvas.height/2+155);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+160);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+170);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura+10,canvas.height/2+165);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+170);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+180);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura+10,canvas.height/2+175);
    ctx.fill();
    ctx.beginPath();
    ctx.moveTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+180);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura, canvas.height/2+190);
    ctx.lineTo(obstaculo8.x+obstaculo8.largura+10,canvas.height/2+185);
    ctx.fill();


    ctx.beginPath();
    ctx.fillStyle = "grey";
    ctx.arc(canvas.width/2, 26, 16, 0, Math.PI*2, undefined);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "blue";
    ctx.arc(canvas.width-35, canvas.width/2-25, 16, 0, Math.PI*2, undefined);
    ctx.fill();

    function abrindo_porta(){
        if (cubeman.x >= canvas.width-60 && cubeman.y<=canvas.width/2-25){
            ctx.clearRect(porta.x,porta.y, porta.largura, porta.altura);
        }
    }
    abrindo_porta();

    if (cubeman.x >= canvas.width/2+cubeman.largura && cubeman.y <= 26+cubeman.altura){
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

