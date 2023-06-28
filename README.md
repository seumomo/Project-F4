# **멋쟁이 사자처럼 프론트엔드 스쿨 6기<br>HTML/CSS 프로젝트**

<div align="center">

[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2Fseumomo%2FProject-F4&count_bg=%233DACC8&title_bg=%23555555&icon=&icon_color=%23E7E7E7&title=hits&edge_flat=true)](https://hits.seeyoufarm.com)

</div>

# **_반응형 웹 OTT TAING 구현하기_**

## 목차 및 기간

- 목차

  1. 메인 페이지
  2. 검색창
  3. 랜딩 페이지
  4. 로그인 페이지
  5. 프로필 전환 페이지
  6. 회원가입 페이지
  7. 아이디/비밀번호 찾기 페이지

- 기간 : 2023 / 06 / 23 ~ 2023 / 06 / 28

## 프로젝트 진행 시 준수사항

- 적절한 헤딩 사용하기, 시맨틱 마크업에 신경쓰기
- 문법 오류 없도록 구현하기
- 페이지 단위로 구현하기
- 네이밍 시 BEM 패턴 사용하기
- 모두가 편하게 사용할 수 있는 웹 구현하기

## 배포 주소

<a target=_blank nooferrer noopener>taing-f4.netlify.app</a>

## **팀 구성**

### 팀 이름 : F4

- 강예나 : <a>https://github.com/yenaf</a>
  <br> => 메인 페이지 일부 / 검색창 / 랜딩 페이지
- 이예나 : <a>https://github.com/o0orang</a>
  <br> => 메인 페이지 일부 / 로그인 페이지
- 김태일 : <a>https://github.com/seumomo</a>
  <br> => 메인 페이지 일부 / 회원가입 페이지
- 이지수 : <a>https://github.com/jisulee97</a>
  <br> => 메인 페이지 일부 / 아이디/비밀번호 찾기 페이지

# 기술 스택

## 환경

<div align="center"><img src="https://img.shields.io/badge/visualstudiocode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white"></div>

## 사용 기술

<div align="center">
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=Sass&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>

## 소통

<div align="center"><img src="https://img.shields.io/badge/discord-5865F2?style=for-the-badge&logo=discord&logoColor=black"></div>

## 메인 페이지

(팀 전원)

<img src="./src/assets/images/TAING.png">

### 구역 분배

- **강예나**
  <br>header / visual 영역
- **이예나**
  <br>main 영역 (티빙에서 꼭 봐야 하는 콘텐츠, Quick VOD, 오직 티빙에만 있어요)
- **김태일**
  <br>main 영역 (실시간 인기 프로그램, 인기 LIVE 채널)
- **이지수**
  <br>main (배너 이미지, 이벤트) / footer 영역

### 검색창

(강예나)

### 랜딩 페이지

(강예나)

### 로그인 페이지

(이예나)

### 프로필 전환 페이지

(이예나)

### 회원가입 페이지

(김태일)

### 아이디/비밀번호 찾기 페이지

(이지수)

## 결과물

### 메인 페이지

(팀 전원)

### 어려웠거나 아쉬웠던 점

- 강예나
- 이예나

1. 반응형 구현이 예상보다 더 어려웠고 코드를 수정하면 연결되는 요소들이 바뀌어 신경써야할 점이 많았다. 학습이 많이 필요할 것 같다.
2. 기한 내 프로젝트를 하다보니 더 익숙한 flex만을 사용하고 grid를 활용해서 만들어보지 못해 아쉬웠다. 여러 레이아웃을 다른 방법으로 만들어보면서 공부해야겠다.

- 김태일

  1. 이미지를 배열할 때, `flex`와 `grid` 중에서 고민을 했었는데 `flex`가 서툴러서 어쩔 수 없이 `grid`를 선택하게 됐었다.
  2. 반응형 웹에 대한 이해가 부족했어서 이미지를 자연스럽게 동작하게 만들었더니 주변의 폰트나 아이콘이 이미지의 바깥으로 벗어나는 등 모든 요소를 반응형으로 구현하는 데에 서툴렀다. 특히 단위에 대한 이해가 부족했다.
  3. 1920px의 뷰포트에서 이미지가 일부 잘리고 있는데, 마우스로 드래그 해서 왼쪽으로 넘어갈 수 있게 구현하고 싶었으나 CSS로는 불가능한 것인지, 방법을 찾지 못했다.

- 이지수
  1. 메인페이지 안의 이벤트 부분을 이미지로 하나하나 넣었는데 자바스크립트를 사용해서 구현할 수 있었으면 더 좋았을걸 이라는 아쉬움이 있다.
  2. 반응형으로 구현을 하긴 하였지만 유연한 단위를 사용하지 못 하고 각 구역별로 크기를 설정하여 크기가 바뀌게끔 구현하였는데 다음에는 vw 단위를 사용하여 좀 더 유연하게 만들어볼 생각이다.

### 기억에 남거나 배운 점

- 강예나
- 이예나

  1. 메인 영역을 다 같이 만들다보니 깃을 통해 합치고 충돌을 확인하는게 시간도 많이 소요되고 어려웠다. 깃에 대한 많은 공부가 필요하다.
  2. 한달동안 배운 내용들을 프로젝트를 통해 활용할 수 있어서 재밌었다. 반응형을 만들기 위해 미디어 쿼리를 계속 사용해서 전보다 익숙해졌다.

- 김태일

  1. `grid`로 배열했던 이미지를 팀원과 `flex`로 배열하도록 통일시키며 사용하지 못하겠다고 생각했던 `flex`를 사용해보았다.
  2. 폰트나 아이콘 등을 반응형으로 동작하게끔 만들면서 `vw`단위를 사용해보았다. 계산하는 것이 조금 헷갈리기도 했지만 다음에 조금 더 자신있게 쓸 수 있을 것 같다.

- 이지수
  1. sass를 사용하여 mixin 을 만들어 반응형을 구현하였는데 기존에 css로 작업할 때 보다 훨씬 간편하고 유용했다. 앞으로 페이지 구현 시 sass를 좀 더 많이 사용해보면 이번 프로젝트보다 더 잘 쓸 수 있을 것 같다.
  2. 가장 많이 배운점은 협업의 중요성이다. 깃으로 팀원들과 코드를 공유하면서 많은 상황들을 겪었는데 아직 많이 부족하다는 것을 느꼈다. 많이 써보고 부딪혀보면서 익숙해져야겠다.

<br>

## 검색창

(강예나)

### 어려웠거나 아쉬웠던 점

### 기억에 남거나 배운 점

<br>

## 랜딩 페이지

(강예나)

### 어려웠거나 아쉬웠던 점

### 기억에 남거나 배운 점

<br>

## 로그인 페이지

(이예나)

### 어려웠거나 아쉬웠던 점

1. html을 작성하면서 지금보다 훨씬 시맨틱하게 마크업하기 위해서는 더 많은 고민이 필요함을 느꼈다.
2. 오타, 괄호와 같은 오류에 시간을 허비하는 점이 아쉬웠다.

### 기억에 남거나 배운 점

1. 메인에서 반응형을 다루는게 너무 어려웠지만 로그인 페이지에서는 많이 헤매지 않았다.
2. html, css로 구현하는데 한계가 있기 때문에 자바스크립트를 통해 더 많은 기능을 넣어보고 싶다는 욕심이 생겼다.

<br>

## 프로필 전환 페이지

(이예나)

### 어려웠거나 아쉬웠던 점

### 기억에 남거나 배운 점

<br>

## 회원가입 페이지

(김태일)

### 어려웠거나 아쉬웠던 점

### 기억에 남거나 배운 점

<br>

## 아이디/비밀번호 찾기 페이지

(이지수)

### 어려웠거나 아쉬웠던 점

아이디, 비밀번호 찾기 페이지에서는 css 보다 마크업 과정에서 많은 고민을 했었다. 아직 시멘틱 태그들에 익숙하지 않다보니 몇가지 추가하지 못 한 것들도 있는데 좀 더 완벽히 숙지하여 다음 프로젝트에서는 좀 더 완벽히 마크업을 하고 싶다.

### 기억에 남거나 배운 점

마크업을 하면서 어떤 요소들이 필요한지 다시 한번 알 수 있는 시간이었고 모든 페이지들을 반응형으로 구현하면서 반응형 페이지와 친해질 수 있는 좋은 경험을 한 것 같다.

# 시작 가이드

- `git clone https://github.com/seumomo/Project-F4.git`

* sass 1.63.6
  => `npm i sass`

- live-server 1.2.2
  => `npm i live-server`
