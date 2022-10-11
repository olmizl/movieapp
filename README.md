# WMT ( WHAT IS MOVIE TODAY )

오늘의 인기 영화를 선별하여 보여주는 사이트입니다

## 주요 기능

(1) TMDB의 API를 이용하여 데이터 실시간 연동 <br/>
(2) REACT로 제작하여 새로고침 없이 페이지 렌더링 <br/>
(3) 검색기능을 이용하여 선별된 영화 외에도 영화 검색 가능


## 메인페이지
![wmtmain](https://user-images.githubusercontent.com/111400649/194866202-17cda7f8-dd94-40a9-974a-f9777b9bc8a6.PNG)

## 기능구현[1]
![movie00](https://user-images.githubusercontent.com/111400649/194997327-b4c5c108-6a3d-4d7e-84bf-6b4fd473a074.PNG)
REACT의 useEffect 기능의 axios와 map을 통한 반복 을 api데이터 렌더링을 통해 구현

## 기능구현[2]
![wmt02](https://user-images.githubusercontent.com/111400649/194997328-9ab156bf-8e70-40a7-b923-7516d818d3b1.png)
반복되어 나온 개별 영화 클릭시 세부 사항 데이터 추출

## 기능구현[3]
![movie_search](https://user-images.githubusercontent.com/111400649/194997331-c8bb8d07-815e-4625-a042-631c204d958d.jpg)
REACT의 ROUTER을 통한 검색결과 url query 가져오기 기능 및 qs 라이브러리 기능 구현

## 기능구현[4]
![movie_click](https://user-images.githubusercontent.com/111400649/194997330-2a961ad3-3af8-409e-a6b7-870b129fb9bf.jpg)
영화 디테일 화면의 cast 클릭시 배우의 디테일 화면 구성 / 다른 출연작 클릭시 새로운 화면 구성
