## To Do List
React + TypeScript + Vite 를 사용해 할일 앱을 만들었습니다.

기능은 추가, 삭제, 검색 및 조회 로 이루어져 있습니다.
1. 추가
2. 삭제
3. 수정
4. 검색 및 조회

상태 관리 시 useState, useReducer 등 React에서 제공하는 Hooks을 사용하였습니다.

DB는 웹 브라우저의 기본적으로 내장되어 있는 DB인 Web Storage를 활용하여 제작 하였습니다.

### 실행 방법
URL : https://react-todolist-eta-one.vercel.app/

### Components
경로 : src/components

- 헤더 (Header)

  오늘 날짜를 보여주는 컴포넌트 입니다.

- 에디터 (Editor)

  할 일을 추가 하는 컴포넌트 입니다.
  
  - Add 버튼 클릭 시 / 키보드 엔터 클릭 시 추가 되도록 기능 구현.
  - useRef를 활용해 Add 버튼 클릭 시 입력을 하지 않았을 경우 입력창(input)에 포커스 되도록 설정.

- 리스트 (List)
  
  할 일 리스트를 보여주는 컴포넌트 입니다.
  
  - filter를 활용해 검색 기능 구현.
  - 웹 스토리지에 저장된 리스트 구현.

- 할일 아이템 (TodoItem)

  할 일의 개별 컴포넌트 입니다.
  
  - 수정, 삭제 구현.
  - 수정 클릭 시 입력창(input)으로 변경 되고 Edit버튼이 Check 버튼으로 변경 될 수 있도록 구현.
  - 체크박스 클릭 시 선택 값이 저장 될 수 있도록 구현.

