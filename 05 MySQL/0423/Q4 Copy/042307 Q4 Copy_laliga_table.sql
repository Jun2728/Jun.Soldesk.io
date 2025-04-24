use my_cat;

create table laliga_rank(                        	
	id int primary key auto_increment,
	
	t_rank int,
	t_name char(50),
	t_points int,
    t_matches int,
	t_wins int,
    t_draws int,
    t_losees int,
    t_gs int, # gs: goals scored
    t_gc int, # gc: goals conceded
    t_gd int, # gd: goal difference
    t_ec char(20) # euro_competition : 챔스, 유로파, 컨퍼런스, 중위권, 강등권
);	

drop table if exists laliga_rank;
delete from laliga_rank;
select count(*) from laliga_rank;

select * from laliga_rank;
desc laliga_rank;
#챔피언스 리그
insert into laliga_rank values(NULL,1,'FC 바르셀로나', 76, 33, 24, 4, 5, 89, 32, 57, '챔피언스 리그');
insert into laliga_rank values(NULL,2,'레알 마드리드', 69, 32, 21, 6, 5, 65, 31, 34, '챔피언스 리그');
insert into laliga_rank values(NULL,3,'아틀레티코 마드리드', 63, 32, 18, 9, 5, 53, 27, 26, '챔피언스 리그');
insert into laliga_rank values(NULL,4,'아틀레틱 빌바오', 57, 32, 15, 12, 5, 49, 26, 23, '챔피언스 리그');
insert into laliga_rank values(NULL,5,'비야레알 CF', 52, 31, 14, 10, 7, 55, 42, 13, '챔피언스 리그');
#유로파 리그
insert into laliga_rank values(NULL,6,'레알 베티스', 51, 32, 14, 9, 9, 45, 40, 5, '유로파 리그');
#컨퍼런스 리그
insert into laliga_rank values(NULL,7,'RCD 마요르카', 44, 33, 12, 8, 13, 31, 38, -7, '컨퍼런스 리그');
#중위권
insert into laliga_rank values(NULL,8,'셀타 비고', 43, 32, 12, 7, 13, 47, 49, -2, '중위권');
insert into laliga_rank values(NULL,9,'레알 소시에다드', 42, 32, 12, 6, 14, 32, 36, -4, '중위권');
insert into laliga_rank values(NULL,10,'라요 바예카노', 41, 32, 10, 11, 11, 35, 39, -4, '중위권');
insert into laliga_rank values(NULL,11,'CA 오사수나', 41, 32, 9, 14, 9, 39, 46, -7, '중위권');
insert into laliga_rank values(NULL,12,'헤타페 CF', 39, 32, 10, 9, 13, 31, 29, 2, '중위권');
insert into laliga_rank values(NULL,13,'RCD 에스파뇰', 39, 32, 10, 9, 13, 35, 41, -6, '중위권');
insert into laliga_rank values(NULL,14,'발렌시아 CF', 39, 33, 9, 12, 12, 37, 49, -12, '중위권');
insert into laliga_rank values(NULL,15,'세비야 FC', 37, 32, 9, 10, 13, 35, 43, -8, '중위권');
insert into laliga_rank values(NULL,16,'지로나 FC', 34, 32, 9, 7, 16, 39, 51, -12, '중위권');
insert into laliga_rank values(NULL,17,'UD 라스팔마스', 32, 32, 8, 8, 16, 38, 52, -14, '중위권');
#강등권
insert into laliga_rank values(NULL,18,'데포르티보 알라베스', 31, 32, 7, 10, 15, 34, 46, -12, '강등권');
insert into laliga_rank values(NULL,19,'CD 레가네스', 29, 32, 6, 11, 15, 29, 48, -19, '강등권');
insert into laliga_rank values(NULL,20,'레알 바야돌리드', 16, 32, 4, 4, 24, 23, 76, -53, '강등권');

#Q5 - 챔피언스 리그 출전 팀만 보기
select * from laliga_rank where t_ec = '챔피언스 리그';
#Q6 - 특정 순위 팀 삭제
delete from laliga_rank where t_rank = 17;
#Q7 - 특정  팀 이름 수정
update laliga_rank set t_name = '알라베스' where t_rank='18';
#Q8 - 순위가 7 이상인 팀 출력
select * from laliga_rank where t_rank >= 7;
#Q9 - 순위가 4위 이상이면서 '드'가 들어간 팀 출력
select * from laliga_rank where t_name like '%드%' and t_rank >=4;
#Q10 - 순위 테이블에 총 주급 출력
ALTER TABLE laliga_rank ADD weekly_pay int default 0;
#Q11 - 순위 목록을 득점 순위로 정렬 및 동위의 경우 득실차 순위로 정리
select * from laliga_rank order by t_gs;
select * from laliga_rank order by t_gs asc; #올림차순
select * from laliga_rank order by t_gs desc; #내림차순
select * from laliga_rank order by t_gs desc, t_gd desc;
#Q12 - 특정 팀 주급 수정 및 주급 순으로 정렬
update laliga_rank set weekly_pay = 1000 where t_rank=9;
update laliga_rank set weekly_pay = 500 where t_rank=15;
select * from laliga_rank order by weekly_pay desc;
#Q16 - 순위표 중 순위, 이름만 뽑아보기
select t_rank as '팀순위', t_name as '레알 소시에다드' from laliga_rank;
