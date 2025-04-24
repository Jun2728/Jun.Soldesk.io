var str_id = "";
var str_pw = "";

var input_id;
var input_pw;

window.onload = function(){ // html 문서가 다 읽어진 후에 실행되는 함수임. 이걸 써야 아래 h1 태그(id=a)에 대한 접근이 가능해짐


    input_id = document.getElementById("id");
    input_pw = document.getElementById("pw");

//todo

    // str_id = input_id.value;
    // str_pw = input_pw.value;

    

}

function login(){

    // alert("id:"+str_id+" pw:"+str_pw);
    // alert("id:"+input_id.value+" pw:"+input_pw.value);

    var local_id = input_id.value;
    var local_pw = input_pw.value;

    if(local_id == "cat" && local_pw == "1234"){
        alert("로그인 성공");
    }else{
        alert("로그인 실패");
    }
}
 	


// 스크린 리더 지원 사용 설정
 
// 스크린 리더 기능을 사용하려면 Ctrl+Alt+Z을(를) 누르세요. 단축키에 대해 알아보려면 Ctrl+슬래시을(를) 누르세요.익명의 코알라님이 문서 작업에 참여했습니다.


var str_id = "";
var str_pw = "";

var input_id;
var input_pw;

window.onload = function(){ // html 문서가 다 읽어진 후에 실행되는 함수임. 이걸 써야 아래 h1 태그(id=a)에 대한 접근이 가능해짐


input_id = document.getElementById("id");
input_pw = document.getElementById("pw");

//todo

// str_id = input_id.value;
// str_pw = input_pw.value;



}

function login(){

// alert("id:"+str_id+" pw:"+str_pw);
// alert("id:"+input_id.value+" pw:"+input_pw.value);

var local_id = input_id.value;
var local_pw = input_pw.value;

if(local_id == "cat" && local_pw == "1234"){
alert("로그인 성공");
}else{
alert("로그인 실패");
}
}