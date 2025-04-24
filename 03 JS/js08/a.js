// 문8	조건문	switch	사용	랜덤 1~6	숫자를 뽑고	각 숫자가 나올 때 각 숫자에 맞는 주사위 이미지로 화면에 출력

var r = Math.floor(Math.random() * 6) + 1; // 1 ~ n 까지 범위내에서 랜덤하게 숫자 하나 뽑아주는 애.

switch(r){
    case 1:
        document.write("1");
        break;
    case 2:
        document.write("2");
        break;
    case 3:
        document.write("3");
        break;
    case 4:
        document.write("4");
        break;
    case 5:
        document.write("5");
        break;
    case 6:
        document.write("6");
        break;
}