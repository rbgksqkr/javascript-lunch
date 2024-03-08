# 우아한테크코스 레벨1 점심 뭐 먹지 미션(javascript-lunch)

## UI

- [x] 카테고리, 거리는 셀렉트 박스, 이름/설명/참고 링크는 텍스트 인풋을 사용한다.
  - [x] 설명, 참고 링크의 입력은 선택으로 한다.
    - [ ] 참고 링크의 경우 url이 아닐시 에러메시지를 보여준다.
  - [x] 카테고리, 이름, 거리의 입력은 필수로 한다.
    - [ ] 필수입력 누락시 에러메시지를 보여준다.
- [x] 음식점 목록을 필터링 할 수 있다.
  - [x] 음식점 전체를 확인할 수 있다.
  - [x] 카테고리별로 확인할 수 있다.
  - [x] 이름순으로 확인할 수 있다.
  - [x] 거리순으로 확인할 수 있다.

## 음식점 목록

- [x] 정렬할 수 있다.
  - [x] 이름순으로 정렬할 수 있다.
  - [x] 거리순으로 정렬할 수 있다.
- [x] 음식점 목록에 새로운 음식점을 추가할 수 있다.
- [x] 카테고리별로 필터링해서 확인할 수 있다.
- [x] 새로고침해도 추가한 음식점 정보들이 유지되기 위하여 local storage에 저장한다.

## 음식점

- [x] 카테고리, 이름, 거리(도보 이동 시간), 설명, 참고 링크를 갖는다.
  - [x] 설명, 참고 링크의 입력은 선택으로 한다.
  - [x] 카테고리, 이름, 거리의 입력은 필수로 한다.
- [x] 카테고리는 "한식", "중식", "일식", "아시안", "양식", "기타" 중 하나를 선택한다.
- [x] 거리는 캠퍼스로부터 도보로 걸리는 시간(분). 5, 10, 15, 20, 30 중 하나를 선택한다.
- [x] 해당 음식점의 카테고리가 선택된 카테고리와 일치하는 지 확인한다.
