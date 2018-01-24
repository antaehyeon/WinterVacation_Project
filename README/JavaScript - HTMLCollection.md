# JavaScript - HTMLCollection

> 복수, 단수인경우에 리턴되는 객체가 다르고
>
> 복수의 경우에는 HTMLCollection 에 담아서 리턴됨

- HTMLCollection

  ![](https://i.imgur.com/xNm4zde.png)

  - Element들이 담겨있는 유사배열
  - **목록이 실시간으로 갱신**된다는 특징을 가지고 있음

- `console.group('before')`

  ![](https://i.imgur.com/AOmpuH8.png)

  - `before` 라는 그룹으로 console 을 **묶을 수 있음**
  - 그리고 `console.groupEnd()` 로 종료

- `lis[1].parentNode.removeChild(lis[1]);`

  - 1번째 Element를 삭제

- **제거된 순간에 바로 반영되기 때문에 LIST를 재조회하지 않아도 됨**