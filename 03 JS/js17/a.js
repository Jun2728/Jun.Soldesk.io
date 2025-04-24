// 문17	반복문 - 별찍기	
//      for		ex. 	for( ... ) {		
//          for( .. ) {	
//              ...
//          }	
//      }		
//      별 	"☆"			
//
//      별을 10개 * 10줄 = 100개 출력				

for(var i=1; i<=10; i=i+1){
    for(var j=1; j<=10; j=j+1){
        document.write("💖");
    }
    document.write("<br>");
}

document.write("<br>");

for(var i=1; i<=10; i=i+1){
    for(var j=1; j<=10; j=j+1){
        document.write("★");
    }
    document.write("<hr>")
}