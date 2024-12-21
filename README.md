# WishTree

크리스마스 소원 트리는 나만의 소원을 작성하고, 다른 이들의 소원을 응원하며 함께 따뜻한 마음을 나눌 수 있는 공간입니다. 


다듬어드린 문장은 다음과 같습니다:

## 💻 Project
이 프로젝트는 `Next.js`와 `TypeScript`를 사용해 개발되었으며, 프론트엔드 개발 내용을 담고 있습니다. 

반응형 웹사이트로, 데스크탑과 모바일 환경 모두에서 이용 가능합니다.

## 🧑🏻‍🤝‍🧑🏻 Contributors
- UI Designer: 정선형
- BGM Composer: 최윤서
- FrontEnd Developer: 채민아
- BackEnd Developer: 김유선

## 🔎 Purpose


## 주요 기능 


## 상세 기능 

### MainPage

#### NoWishTree
1. **카카오 로그인 버튼 표시:** 사용자가 토큰이 없는 경우.
2. **소원 쓰기 버튼 표시:** 토큰이 있지만 소원을 작성하지 않은 경우. 

#### WishTree
1. **소원 작성 완료 페이지:** 사용자가 소원을 작성한 경우 표시.

#### 메인 페이지 API

- **프론트엔드:** 토큰을 GET 요청으로 전송.
- **백엔드:** 토큰을 받고 소원을 작성했는지 여부를 판단.
  - **응답 내용:**
    - `true`: 소원을 작성한 경우, 15개의 랜덤 메시지(객체) 반환.
    - `false`: 소원을 작성하지 않은 경우.

**Note:** `useEffect`를 사용하여 항상 스토리지에 저장된 id를 삭제.

### WriteWishPage
- **이름 API GET 요청**
- 소원 작성 및 전역 상태에 저장

### SelectObjectPage
- 사용자가 오브제를 선택하고 소원을 트리에 걸기
- 소원 작성 POST 요청 예시:
  ```json
  {
    "message": "소원 내용",
    "objectId": "ob1"
  }

### WishPage

#### FriendWish
- 홈 화면에서 응답된 소원 목록에서 선택한 소원에 대해 아래와 같은 동작이 발생합니다:
  1. 소원의 `id`가 스토리지에 저장됩니다.
  2. 선택된 소원의 상세 정보가 API를 통해 `/api/wish/{id}` 경로로 요청됩니다. API 응답 예시는 다음과 같습니다:
    ```json
    {
      "success": "true",
      "response": {
        "name": "김산타",
        "wish": "이 소원이 이뤄지면 좋겠어요.",
        "comments": [
          {
            "id": 0,
            "name": "채산타",
            "comment": "응원할게요!",
            "created_at": "2024-12-07"
          },
          {
            "id": 1,
            "name": "햄스터",
            "comment": "할 수 있어요!",
            "created_at": "2024-12-07"
          }
        ],
        "error": "null"
      }
    }
    ```

#### MyWish
- 사용자가 자신의 소원을 조회하는 페이지로 이동 시, `/api/wish`를 통해 해당 소원의 정보를 반환받습니다.
- 응답 형식은 FriendWish와 동일합니다.

**Note:** 이 페이지에는 **수정하기 버튼**이 필요합니다. 버튼 클릭 시 소원을 수정할 수 있는 페이지로 이동합니다.

#### WriteComment
- **다른 사람의 소원에 답글 작성:** 
  - API 요청 경로: `/api/wish/{id}/comment`
  - 선택된 소원의 댓글을 작성하는 데 사용됩니다.
  
- **내 소원에 답글 작성:**
  - API 요청 경로: `/api/wish/comment`
  - 사용자 본인의 소원에 댓글을 작성하는 데 사용됩니다.

## 아키텍처 설계 

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
         |- main
         |- writewish
         |- selectobject
         |- wish
            |- [id]
            |- mywish
```