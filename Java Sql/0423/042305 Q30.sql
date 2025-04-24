show databases;

use my_cat;

create table board (
	b_no int primary key auto_increment, 	#글번호
	b_title char(100) not null,				#글제목
    b_id char(20) not null,					#작성자id
	b_datetime datetime not null,			#작성시간
    b_hit int default 0 not null,			#조회수    
    b_text text								#글내용
);
desc board;
drop table board;
insert into board (b_title,b_id,b_datetime,b_text) 
values (
'헬로'
,
'cat1'
,
now()
,
'글입니다. 글글.....글....'
);

select * from board;

select * from board order by b_no desc;
