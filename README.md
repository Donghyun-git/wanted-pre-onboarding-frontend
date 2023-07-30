# wanted-pre-onboarding-frontend 사전 과제 (TodoList)

- 지원자의 성명

  - 안동현

- 사용 라이브러리

  ```{
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.4.0",
    "dotenv": "^16.3.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.10.1",
    "react-router-dom": "^6.14.2",
    "react-scripts": "5.0.1",
    "sass": "^1.64.1",
    "styled-components": "^6.0.5",
    "web-vitals": "^2.1.4"
    }

  ```

- 프로젝트의 실행 방법
  파일 내려 받은 후,

  ```zsh
   $ npm install
   $ npm start
  ```

- 데모 ( 배포 중 )

  - 배포환경

    - AWS EC2, NGINX, PM2

  - 배포 시 유의 사항
    - 데모 영상은 배포 링크로 대체 가능하며, 배포가 되었고 배포된 사이트에서 기능이 모두 동작하면 가산점이 부여됩니다. (x)
    - 배포된 사이트에서 기능이 정상동작 하지 않는다면 배포 가산점이 부여되지 않습니다. (x)
    - 기능이 정상 동작하지 않는 예시:
      1. 새로고침하면 404 에러 페이지 표출 (x)
      2. "/" URL이 아닌 "/signup"등의 경로로 바로 접속할 경우 404 에러 페이지 표출 등 (x)

- API
  > [https://www.pre-onboarding-selection-task.shop/](https://www.pre-onboarding-selection-task.shop)

## Assignment 구현 여부

- 모두 완료

## input 태그 data 속성 부여 여부

- 모두 명시해준 대로 부여 완료

### 부가 설명

- 완성도를 높이기 위해 로그인, 비 로그인 시 헤더 버튼이 다르게 나타납니다.

  - 로그인 상태
    - 헤더에 로그아웃 버튼 하나만 존재
  - 로그아웃 상태
    - 헤더에 로그인, 회원가입 버튼 두 개 존재
