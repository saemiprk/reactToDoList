#### To Do List
React + TypeScript + Vite 를 사용해 할일 앱을 만들었습니다.

기능은 추가, 삭제, 검색 및 조회 로 이루어져 있습니다.
1. 추가
2. 삭제
3. 검색 및 조회

상태 관리 시 useState, useReducer 등 React에서 제공하는 상태관리 Hooks을 사용 하였습니다.

DB는 웹 브라우저의 기본적으로 내장되어 있는 DB인 Web Storage를 활용하여 제작 하였습니다.

### 실행 방법
배포 된 URL 로 접속해서 기능 확인 해주시면 됩니다.

URL : https://react-todolist-eta-one.vercel.app/

### Components
경로 : src/component

- 헤더 (Header)

오늘 날짜를 보여주는 컴포넌트 입니다.

- 에디터 (Editor)

할 일을 추가 하는 컴포넌트 입니다.
1. Add 버튼 클릭 시 / 키보드 엔터 클릭 시 추가 기능 구현.
2. useRef를 활용해 Add 버튼 클릭 시 입력을 하지 않았을 경우 입력창(input)에 포커스 되도록 설정.

- 리스트 (List)

할 일 리스트를 보여주는 컴포넌트 입니다.
1. filter를 활용해 검색 기능 구현.
2. 웹 스토리지에 저장된 리스트 구현.

- 할일 아이템 (TodoItem)

할 일의 개별 컴포넌트 입니다.
1. Reducer을 통해 수정, 삭제 구현.
2. 수정 클릭 시 입력창(input)으로 변경 되고 Edit버튼이 Check 버튼으로 변경 될 수 있도록 구현.
3. 체크 클릭 시 선택 값이 저장 될 수 있도록 구현.

