피드백 내용

1. li의 tabindex

2. dailog

3. 너무 많은 설명 텍스트

4. 디자인 요소의 대체텍스트

5. 디자인 요소 구역의 시멘틱 테그

6. 네비게이션 내부의 section

7. div 태그의 적절한 사용

8. seo

9. 메타태그

   

   작업 순서

   1.  목차 디자인으로 분석
   2. 정렬에 따라 태그 부여
   3. 태그 기능에 따른 aria라벨링
   4. 메타태그 정리

   

   주의사항

     1. 목차정리

         	1. 디자인 구역은 di
               	2. 기능별 태그
                  	3. 클릭가능 = 버튼 or  a

   ​     

   ​     

        dl > json식으로 주요 콘텐츠만
        
        1. alt와 라벨 중복 x
        2. 속성의 중복 사용 ex) caption - label
        
        ​		태그 라벨링 
        
        1. a - label
        2. active요소 > dialog, button 등 role 주기
        3. 디자인적 요소에는 라벨링 x
        4. title과 레이블의 관계
        
        메타태그 
        
        1. title, keyword, canonical, description, property
        2. pavicon,icon

   

   

   

   role-dialog 는 h태그 필요

   애니메이션의 모듈화 > 종점이 같을 때 사용가능 > 시작지점을 애니가 아닌 속성으로 넣어주고 to속성을 갖는 키프레임애니 삽입, 

   애니메이션은 끌 수 있는 서비스 제공

문제점 1. 버튼으로 랩을 씌울시 hover 이벤트 사용 불가
문제점 2. table태그를 단일로 사용시 borderCollapse 속성 사용 이후 padding 사용 불가
문제점 3. 브라우니 쇼콜라 이미지의 경우 내부 사이즈가 다름, 이것의 hover이벤트를 css로 컨트롤 불가 js에서 제어



SEO를 위한 메타 태그 작성 시 

https://invisiblegold.com/blog/metatagsvskeywords/

구글의 경우 meta keyward가 검색점수에 포함되지 않는다.

<hr>

접근성

​	중복된 정보를 제거하면 html vaildator가 에러 처리 할 수 있다.

![KakaoTalk_20200412_175001472_02](https://user-images.githubusercontent.com/54830773/79099792-e85e7d00-7d9f-11ea-8979-5ab74bc3e241.jpg)
![KakaoTalk_20200412_175001472_03](https://user-images.githubusercontent.com/54830773/79099800-eac0d700-7d9f-11ea-954d-d37e1f854ef1.jpg)
![KakaoTalk_20200412_175001472_01](https://user-images.githubusercontent.com/54830773/79099806-ed233100-7d9f-11ea-8e14-b3f47c6b73e9.jpg)

메타태그 사용 이후 크롤링 결과

![클ㄹ](https://user-images.githubusercontent.com/54830773/79101092-d03c2d00-7da2-11ea-80c4-3b19387f2779.png)



h태그 가 display: none이어도 잘 크롤링이 되는 것이 확인 되었다.



https://invisiblegold.com/blog/metatagsvskeywords/

seo에서 meta keyword와 description의 차이

​	-과거 meta keyword의 과용, 악용으로 더 이상 메이저 검색엔진은 keyword를 지원하지않음.

> 잘 보면 네이버도 keyword 안쓴다.

![keyword](https://user-images.githubusercontent.com/54830773/79181463-6164df80-7e47-11ea-84a6-19f6524b5847.png)



http://blog.drakejin.me/Google-Search-Engine-1/