# 🎄 WISH TREE

<div align="center">
  <img src="https://github.com/user-attachments/assets/c06ac282-4180-4f64-9e6f-fdb4b349881e" alt="WishTree Screenshot" width="400"/>
</div>
<br>

크리스마스 소원 트리는 나만의 소원을 작성하고, 다른 이들의 소원을 응원하며 함께 따뜻한 마음을 나눌 수 있는 공간입니다. 

## 💻 Project
프로젝트는 `Next.js`와 `TypeScript`를 사용해 개발되었으며, 이 저장소는 프론트엔드 개발 내용을 담고 있습니다. 
반응형 웹사이트로, 데스크탑과 모바일 환경 모두에서 이용 가능합니다.

## 🧑🏻‍🤝‍🧑🏻 Contributors

| Role                | Name   |
|---------------------|--------|
| 🎨 UI Designer      | 정선형 |
| 🎵 BGM Composer     | 최윤서 |
| 💻 FrontEnd         | 채민아 |
| 🛠 BackEnd          | 김유선 |

## 👀 Purpose
WishTree는 작은 아이디어에서 출발한 토이 프로젝트입니다.  
프론트엔드, 백엔드, 디자이너, 그리고 BGM 작곡가까지 총 4명이 모여 각자의 전공 분야를 살려 협업했습니다.  
개발뿐만 아니라 디자인과 음악까지 더해, 하나의 서비스를 완성해가는 과정을 경험하는 것이 이번 프로젝트의 가장 큰 목적이었습니다.  

## 🛠 Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)



## 🏠 Main features
- **카카오 로그인**: 로그인 상태에 따라 맞춤 화면 제공
- **소원 작성 및 관리**: 소원 작성, 조회, 수정 가능
- **오브제 선택**: 소원을 트리에 거는 오브제 선택 기능
- **소원 조회**: 내 소원과 다른 사람의 소원 확인 가능
- **댓글 작성**: 내 소원과 다른 사람의 소원에 댓글 작성 가능

## 🧱 Detail features

### MainPage
- 로그인하지 않은 경우: 카카오 로그인 버튼 표시
- 로그인했지만 소원을 작성하지 않은 경우: 소원 쓰기 버튼 표시
- 소원을 작성한 경우: 소원 완료 페이지 및 다른 사람들의 소원 목록 표시

### WriteWishPage
- 이름을 불러오고, 소원을 작성하여 저장

### SelectObjectPage
- 사용자가 오브제를 선택해 소원을 트리에 걸 수 있음

### WishPage
- **FriendWish**: 다른 사용자의 소원을 선택해 상세 내용을 확인 가능
- **MyWish**: 내가 작성한 소원을 조회하고 수정 가능
- **WriteComment**: 소원(내 소원/다른 사람 소원)에 댓글 작성 가능


## 🏗️ Architecture

앱 라우터 방식의 디렉토리 구조를 가지며 아토믹 디자인으로 아키텍처 설계 되었습니다. 

```
|- wishtree
   |- shared
      |- hooks
      |- utils
      |- constants
      |- components
         |- atoms
         |- molecules
         |- templates
   |- public
      |- assets
   |- src
      |- app
         |- (root)
         |- write
         |- selectobj
         |- wish
            |- [id]
            |- mywish
```


## User Interface

**카카오 로그인**
<div style="display: flex; justify-content: center;">
 <img src="https://github.com/user-attachments/assets/380859ab-109d-4148-8dfd-ceddd4fa9826" alt="kakaologin" width="300"/>
</div>

<br>

**소원 작성**

<img src="https://github.com/user-attachments/assets/475c359d-1a6e-4b39-8c1c-5ec0767dc0ac" alt="writewish" width="300"/>

<br>

**소원 조회 및 댓글 작성**
<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="https://github.com/user-attachments/assets/fb5ac94b-3273-476a-922c-dba5a2b92a8f" alt="IMG_6562" width="300"/>
  <img src="https://github.com/user-attachments/assets/b75ba95c-b279-466a-bea3-eda70af5c3b0" alt="IMG_6563" width="300"/>
</div>

<br>

**소원 목록 랜덤 표시**
<div style="display: flex; justify-content: center; gap: 10px;">
  <img src="https://github.com/user-attachments/assets/c873befb-5dc4-4445-af88-3fb832f3e06f" alt="IMG_7106" width="200"/>
  <img src="https://github.com/user-attachments/assets/16900fb0-a9c6-4ef3-94e4-67809dea0f95" alt="IMG_7105" width="200"/>
  <img src="https://github.com/user-attachments/assets/b5505eb3-119c-404c-b2ff-1569c652ecf8" alt="IMG_7103" width="200"/>
</div>

<br>

**애니메이션 효과** 

<img src="https://github.com/user-attachments/assets/0d002ff3-9b22-4a2e-b31f-c5dd437b9b26" alt="animation" width="300"/>



