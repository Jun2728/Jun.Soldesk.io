var random=Math.floor(Math.random()*100)+1;

for( var i=1;  i <= random;  i=i+1  ) {
    if ( i == 7 ) 
    { //    황금고양이 출력
        document.write(i);

        document.write("<img id='goldcat' src='cat.jpg'>");

        // var gold_cat_img = document.getElementById("goldcat");        

        // gold_cat_img.style.borderColor = "yellow";

        // gold_cat_img.style.borderStyle = "solid";

        // gold_cat_img.style.borderWidth = "230px";

    } else {    // 생 고양이 출력
        document.write(i);
        document.write("<img src='cat.jpg'>");
    }
}
