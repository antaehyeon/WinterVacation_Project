# jQuery - 탐색

> Chain Context 를 유지하면서 제어의 대상이 되는 엘리먼트를 변경하는 기법

- 하나의 chain Context를 유지하면서 각각의 대상을 변경

![](https://i.imgur.com/f5VVPf7.png)

- 각각 입력한 jQuery 구문에 따라서 해당되는 항목들이 빨간색으로 표시됨
- `addClass('s')` 이후 `removeClass('s')` 로 꼭 Class를 해제 해야 함
  - 나머지 부분이 영향받을 수 있음