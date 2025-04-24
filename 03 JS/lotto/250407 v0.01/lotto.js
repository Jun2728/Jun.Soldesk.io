// 번호 지정

var p1 = 1;
var p2 = 2;
var p3 = 3;
var p4 = 4;
var p5 = 5;
var p6 = 6;

// 랜덤 번호 뽑기 


r1 = Math.floor(Math.random()*45)+1;
document.write(r1);
document.write("<br>");

// 중복 검사 r2~r6

while(true){
    r2 = math.floor(math.random()*45)+1;
    if(r1 != r2){
        document.write(r2);
        document.write("<br>")
        break;
    }
}

while(true){
    r3 = math.floor(math.random()*45)+1;
    if(r3 != r1 && r3 != r2){
        document.write(r3);
        document.write("<br>")
        break;
    }
}

while(true){
    r4 = math.floor(math.random()*45)+1;
    if(r4 != r1 && r4 != r2 && r4 != r3){
        document.write(r3);
        document.write("<br>")
        break;
    }
}

while(true){

    r5 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    if(r5 != r1 && r5 != r2 && r5 != r3 && r5 != r4){
        document.write(r5);
        document.write("<br>");
        break;
    }
}



while(true){

    r6 = Math.floor(Math.random() * 45) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

    if(r6 != r1 && r6 != r2 && r6 != r3 && r6 != r4 && r6 != r5){
        document.write(r6);
        document.write("<br>");
        break;
    }
}

// 승리 조건

var win = 0;

if(p1 == r1){
    win = win + 1;
}
if(p1 == r2){
    win = win + 1;
}
if(p1 == r3){
    win = win + 1;
}
if(p1 == r4){
    win = win + 1;
}
if(p1 == r5){
    win = win + 1;
}
if(p1 == r6){
    win = win + 1;
}

if(p2 == r1){
    win = win + 1;
}
if(p2 == r2){
    win = win + 1;
}
if(p2 == r3){
    win = win + 1;
}
if(p2 == r4){
    win = win + 1;
}
if(p2 == r5){
    win = win + 1;
}
if(p2 == r6){
    win = win + 1;
}


if(p3 == r1){
    win = win + 1;
}
if(p3 == r2){
    win = win + 1;
}
if(p3 == r3){
    win = win + 1;
}
if(p3 == r4){
    win = win + 1;
}
if(p3 == r5){
    win = win + 1;
}
if(p3 == r6){
    win = win + 1;
}


if(p4 == r1){
    win = win + 1;
}
if(p4 == r2){
    win = win + 1;
}
if(p4 == r3){
    win = win + 1;
}
if(p4 == r4){
    win = win + 1;
}
if(p4 == r5){
    win = win + 1;
}
if(p4 == r6){
    win = win + 1;
}


if(p5 == r1){
    win = win + 1;
}
if(p5 == r2){
    win = win + 1;
}
if(p5 == r3){
    win = win + 1;
}
if(p5 == r4){
    win = win + 1;
}
if(p5 == r5){
    win = win + 1;
}
if(p5 == r6){
    win = win + 1;
}

if(p6 == r1){
    win = win + 1;
}
if(p6 == r2){
    win = win + 1;
}
if(p6 == r3){
    win = win + 1;
}
if(p6 == r4){
    win = win + 1;
}
if(p6 == r5){
    win = win + 1;
}
if(p6 == r6){
    win = win + 1;
}

document.wirte("win:"+win);