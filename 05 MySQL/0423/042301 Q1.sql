
use my_cat;

create table visit_count(	#테이블 만들기. 칼럼(또는 필드 또는 열이름)은 딸랑 한개.
	count int
);
drop table visit_count;
show tables; 
  
select * from visit_count;
  
insert into visit_count values(0);	#데이터를 한 줄 넣기

update visit_count set count=count+1;

delete from visit_count;