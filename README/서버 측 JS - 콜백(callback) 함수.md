# 콜백(callback) 함수

### 콜백(callback) 함수 (중요하게 사용되는 개념이니 익숙해질 것)

- [JavaScript Sort](https://www.w3schools.com/jsref/jsref_sort.asp)

  ![스크린샷 2017-12-29 오후 9.57.55](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202017-12-29%20%EC%98%A4%ED%9B%84%209.57.55.png)

  ```js
  a = [3, 1, 2]; a.sort(); console.log(a);
  [1, 2, 3]

  a = [3, 1, 2]; function b(v1, v2){ return v2-v1; }; a.sort(b); console.log(a);
  [3, 2, 1]

  a = [3, 1, 2]; function b(v1, v2){ return v1-v2; }; a.sort(b); console.log(a);
  [1, 2, 3]

  a = [3, 1, 2]; function b(v1, v2){ return 0; }; a.sort(b); console.log(a);
  [3, 1, 2]

  a = [3, 1, 2]; function b(v1, v2){ console.log('c', v1, v2); return 0; }; a.sort(b); console.log(a);
  c 3 1
  c 1 2
  [3, 1, 2]

  a = [3, 1, 2]; a.sort(function(v1, v2){return v2-v1}); console.log(a); // 익명함수
  [3, 2, 1]
  ```

  - 콜백함수는 function b 이며, sort라는 함수가 필요할 때 마다 내부적으로 호출함
  - 사용자가 호출하는 함수가 아닌, 누군가에 의해서 호출당하는 함수이므로 Call-Back 함수라고 불릴수도 있지 않을까 (이고잉님 생각)