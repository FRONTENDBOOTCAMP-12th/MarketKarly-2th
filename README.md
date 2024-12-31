<div align="center">
   <h1>마켓컬++릿(Lit) </h1>
</div>

![PerfectDeplo2](./public/readme/introduce-project.webp)

<div align="center">

<a href="https://marketkalit2th.netlify.app/">🌐 마켓컬릿 사이트</a>
<br><br>

</div>

> **마켓컬리, Lit으로 재해석하다 : Lit(e)한 기술로 만든 Heavy한 퀄리티**

- **Lit 로고의 블루 컬러 컨셉**으로 트렌디한 스타일의 인기 쇼핑 사이트(Market-Kurly)를 클론 코딩하였습니다.
- **멋쟁이 사자처럼 프론트엔드 부트캠프 12기 바닐라 프로젝트(2024.12.12~2025.01.03)** 참여 작품입니다.

<br>

> **목차**

1. [마켓컬++릿(Lit)](#)
2. [팀 소개](#team-🔥-perfect-deplo2-🔥-가-만들었습니다)
3. [시스템 구성 및 설계](#🛠️-시스템-구성-및-설계-🛠️는-이렇습니다)
   - [전체 시스템 흐름](#🔄-전체-시스템-흐름)
   - [개발 환경](#🚀-개발-환경)
   - [ERD](#🏷️-erd)
4. [결과물](#🖥️-결과물-🖥️-살펴보기)

   - [사이트맵](#🗺️-사이트맵)
   - [시연](#🕹️-시연)
   - [주요 기능](#🎯-주요-기능)
   - [성능 최적화 및 부하 테스트 완료](#🕵️‍♂️-성능-최적화-및-부하-테스트-완료)

   <br>
   <br>

## TEAM 🔥 Perfect Deplo2 🔥 가 만들었습니다

### 👩‍💻 팀 & 멤버

![PerfectDeplo2](./public/readme/perfect-deplo2.webp)

> **Perfect Deplo2** : Perfect Deployment by team 2

<br>

<table width="100%">
    <tr>
        <td align="center">
            <img height="120px" width="120px" src="https://avatars.githubusercontent.com/u/61653740?v=4"/>
        </td>
        <td>
            <a href="https://github.com/cow-coding">이강현</a> | 스크럼 마스터 <br> <br></code>  <code>PocketBase</code> <code>Sign-up</code> <code>Footer </code>
        </td>
    </tr>
    <tr>
        <td align="center">
            <img height="120px" width="120px" src="https://avatars.githubusercontent.com/u/61653740?v=4"/>
        </td>
        <td >
            <a href="https://github.com/sunbi-s">민준기</a> | 스크럼 마스터 <br> <br></code>  <code>데이터ETL</code> <code>배치학습</code> <code>Footer </code>
        </td>
    </tr>
    <tr>
        <td align="center">
            <img height="120px" width="120px" src="https://avatars.githubusercontent.com/u/61653740?v=4"/>
        </td>
        <td >
            <a href="https://github.com/hawe66">장한나</a> | 스크럼 마스터 <br> <br></code>  <code>데이터ETL</code> <code>배치학습</code> <code>Footer </code>
        </td>
    </tr>
    <tr>
        <td align="center">
            <img height="120px" width="120px" src="https://avatars.githubusercontent.com/u/61653740?v=4"/>
        </td>
        <td >
            <a href="https://sweetdev.tistory.com">김주희</a> | 스크럼 마스터 <br> <br></code>  <code>Header</code> <code>Review&Inquiry</code> <code>ProductListPage </code>
        </td>
    </tr>
</table>

### 🤝 협업 방식

- 프로젝트에 들어가기에 앞서 🔗[코드 컨벤션 규칙](https://github.com/nurimeansworld/strawberry_market/projects/1) 및 🔗[네이밍 전략](https://github.com/nurimeansworld/strawberry_market/issues) 등을 세워두어 통일성을 높였습니다.
- 🔗[GitHub Projects](https://github.com/nurimeansworld/strawberry_market/projects/1)와 🔗[Issues](https://github.com/nurimeansworld/strawberry_market/issues)를 사용하여 진행도와 상황을 꾸준히 공유하였습니다.
- 주간회의를 진행하여 작업 방향이나 코드 고민에 대해 나누었고, 주간회의 결과를 수행한 일일 스크럼을 🔗[Wiki](https://github.com/nurimeansworld/strawberry_market/issues)를 사용하여 기록하였습니다.

<br>
<br>
<br>

## 🛠️ 시스템 구성 및 설계 🛠️는 이렇습니다

### 🔄 전체 시스템 흐름

![PerfectDeplo2](./public/readme/system-architecture.webp)

### 🚀 개발 환경

| 분류                    | 기술                                                                                                                                                                                                                                                                                                                 |
| ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 프론트엔드              | ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black) |
| 빌드 도구               | ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)                                                                                                                                                                                                                      |
| 백엔드                  | ![Pocketbase](https://img.shields.io/badge/Pocketbase-009688?style=for-the-badge&logo=databricks&logoColor=white)                                                                                                                                                                                                    |
| 패키지 매니저           | ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)                                                                                                                                                                                                                         |
| 협업 툴                 | ![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=notion&logoColor=white) ![Discord](https://img.shields.io/badge/Discord-5865F2?style=for-the-badge&logo=discord&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white) |
| 코드 품질 도구          | ![Prettier](https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=prettier&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)                                                                                                    |
| 디자인 & 개발 환경(IDE) | ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white)                                                                                       |
| 호스팅                  | ![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)                                                                                                                                                                                                             |

### 🏷️ ERD

![PerfectDeplo2](./public/readme/erd.webp)

<br>
<br>
<br>

## 🖥️ 결과물 🖥️ 살펴보기

![Simple-Site-Map](./public/readme/simple-site-map.webp)

### 🗺️ 사이트맵

![Site-Map](./public/readme/site-map.webp)

### 🕹️ 시연

|                                              메인                                              |                                           회원가입                                           |                                           로그인                                           |
| :--------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------: |
| ![메인페이지](https://github.com/user-attachments/assets/be299b48-1ba3-4313-925d-c7b6147b6215) | ![회원가입](https://github.com/user-attachments/assets/40e1f8e1-b7c6-4fb8-8db8-97dde9087a7c) | ![로그인](https://github.com/user-attachments/assets/0d772b16-0195-49a5-9324-3d32d30b1c70) |

|                                           로그아웃                                           |                                           상품 목록                                            |                                              상품 상세                                              |                                           장바구니                                           |
| :------------------------------------------------------------------------------------------: | :--------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: |
| ![로그아웃](https://github.com/user-attachments/assets/28d484fe-910a-4aa9-8e60-484ea4c8941f) | ![상품리스트](https://github.com/user-attachments/assets/7d816b82-0e70-48fa-a67c-c494dffa11a6) | ![상품 상세페이지](https://github.com/user-attachments/assets/01028d6e-cf29-46f1-b38d-24607615b15e) | ![장바구니](https://github.com/user-attachments/assets/658568b7-f719-41d3-b992-c2dcb1c03d02) |

### 🎯 주요 기능

<details><summary style="font-weight: bold; font-size: 14px;">스포츠 경기 일정 및 결과 서비스</summary>

- 기능 설명: 사용자는 축구, 농구, 야구 경기의 일정과 결과를 확인할 수 있습니다. 이 데이터는 Rapid API를 통해 가져오며, DB에 저장됩니다.
- 데이터 업데이트: Scheduler를 활용해 15분마다 경기 결과 데이터를 업데이트합니다. 이는 Timezone 및 API 호출 제한을 고려한 결정입니다.
- 스케일 아웃: 서버의 확장성을 고려하여, 필요시 Scheduler를 별도의 서비스로 분리하여 이벤트를 처리할 수 있도록 계획하였습니다.
- 사용자 상호 작용: 각 경기 일정에 대해 사용자가 댓글을 달 수 있는 기능을 제공합니다.
<br><br>
</details>

<details><summary style="font-weight: bold; font-size: 14px;">핫딜 및 상품 구매 서비스
</summary>

- 상품 제공: 스포츠 유니폼, 사인볼, 기념품 등 다양한 상품을 판매합니다.
- 기능: 상품 검색, 리뷰 확인, 장바구니 기능을 포함합니다.
- 특별 행사 및 할인: 사용자에게 최상의 거래를 제공하기 위해 특별 행사 및 할인 정보를 제공합니다.
- 성능 최적화: Redis Sorted Set을 사용해 대용량 트래픽 처리를 계획하고 있으며, 동시성 문제는 비관적 락을 통해 해결할 예정입니다.<br><br>
</details>

<details><summary style="font-weight: bold; font-size: 14px;">응원 댓글 작성 서비스
</summary>

- WebSocket방식 : 사용자는 각 경기에 대해 응원 댓글을 작성할 수 있으며, 댓글은 WebSocket 방식을 통해 실시간으로 갱신됩니다.<br><br>
</details>

<details><summary style="font-weight: bold; font-size: 14px;">대용량 데이터 처리 및 트래픽 대응
</summary>

- 데이터베이스 설계: 경기 일정, 결과, 사용자 댓글 등의 대용량 데이터를 효율적으로 처리하기 위해 최적화된 데이터베이스 설계를 적용합니다.
- 최적화 전략: 데이터베이스 쿼리 최적화, 캐싱 전략, 데이터 파티셔닝을 통해 빠른 데이터 처리 속도를 보장합니다.
- 스케일링 및 로드 밸런싱: 스포츠 이벤트 중 발생하는 급격한 트래픽 증가에 대응하기 위해 확장 가능한 서버 구조를 설계하고, 로드 밸런싱 및 오토 스케일링 전략을 채택합니다.
- 성능 테스트: nGrinder를 이용한 부하테스트 및 최적화를 통해 100~300만 건의 댓글 데이터 처리를 위한 성능을 확보합니다.실시간으로 갱신됩니다.<br><br>
</details>
<br>

### 🕵️‍♂️ 성능 최적화 및 부하 테스트 완료

- 경기 일정 및 결과 데이터에 대한 데이터베이스 쿼리 최적화<br>
- nGrinder를 이용한 성능 테스트 및 최적화 수행<br>
- Redis와 JPA를 사용하여 대용량 트래픽에 대한 정합성 및 동시성 처리
