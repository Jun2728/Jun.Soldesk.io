// 문14	조건문	switch	prompt 함수를 이용하여 숫자 값을 하나 입력 받기					X (안됨)	O (됨)	이유: prompt로 입력받은 숫자가 변수에 들어갈 때 문자열로 들어감				
// 			1	이면	1	라고 팝업 출력		case 1:	case "1":		case 뒤에 문자열도 가능함		ex	case "고양이":
// 			2	//	2	//								
// 			3	//	3	//		주의:	입력받은 값은 전부 문자로 인식함. 즉 위 예제에서 100을 입력 시 변수 s 는 "100" 문자열이 됨.					
// 			그 외의 경우이면		1,2,3 이 아닙니다	//								

var s = prompt("값을 입력하세요 :");
switch(s){
    case "1":
        alert("1임");
        break;
    case "2":
        alert("2임");
        break;
    case "3":
        alert("3임");
        break;
    default:
        alert("1,2,3 아님")        ;

}