# JavaScript - Node의 종류API

1. ### nodeType, nodeName

   > node의 종류를 파악할 수 있는 property에 대해서 살펴볼 것

   ```html
   for(var name in Node){
      console.log(name, Node[name]);
   }
   ```

   ![](https://i.imgur.com/OP2wol8.png)

   - Node가 가지고 있는 리스트의 여러 타입들을 보여줌
     - Nodex.TEXT_NODE = 3
     - 각각 상수를 가지고 있음


   - Node.nodeType : node의 Type을 의미함

   - Node.nodeName : node의 이름 (태그명을 의미)


![](https://i.imgur.com/zLnhoxc.png)

- `body.nodeType`은 1을 의미하므로 `ELEMENT_NODE` 성격을 지니고 있음

- `body.firstChild.nodeType` 은 3을 출력하므로 `TEXT_NODE` 성격을 지니고 있음

- `document.nodeType` 은 9를 출력하므로 `DOCUMENT_NODE` 성격을 지니고 있음

- 해당 숫자를 통해서 엘리먼트가 어떤 타입인지 알 수 있음

- 비교할 때 숫자를 통해서 비교할 수 있지만 기억하기 힘드므로

- `Node.` 로 접근하면 됨

  ![](https://i.imgur.com/FxkNoyN.png)

  - Node.TEXT_NODE

  ![](https://i.imgur.com/oSzA8op.png)

  - nodeName은 위와 같이 출력됨

2. ### 재귀 함수 1

   > nodeName을 이용해서 하위 엘리먼트를 접근, 기능을 만들어 보는 것이 목표

   ```html
   <!DOCTYPE html>
   <html>
   <body id="start">
   <ul>
       <li><a href="./532">html</a></li>
       <li><a href="./533">css</a></li>
       <li><a href="./534">JavaScript</a>
           <ul>
               <li><a href="./535">JavaScript Core</a></li>
               <li><a href="./536">DOM</a></li>
               <li><a href="./537">BOM</a></li>
           </ul>
       </li>
   </ul>
   <script>
   function traverse(target, callback){
       if(target.nodeType === 1){
           //if(target.nodeName === 'A')
           callback(target);
           var c = target.childNodes;
           for(var i=0; i<c.length; i++){
               traverse(c[i], callback);
           }
       }
   }
   traverse(document.getElementById('start'), function(elem){
       console.log(elem);
   });
   </script>
   </body>
   </html>
   ```

   - 재귀함수 : 함수가 실행될 때 **자기 자신을 호출**하는 함수

   ```html
   traverse(document.getElementById('start'), function(elem){
       console.log(elem);
   });
   ```

   - 조회하고자 하는 엘리먼트를 **첫번째 인자로 전달**

     - document.getElementById('start')

     ![](https://i.imgur.com/lsMTLCz.png)

     - `console.log(elem)` 문에 의해서 로그가 출력됨

   ```javascript
   traverse(document.getElementById('start'), function(elem){
       elem.style.color = 'red';
   });
   ```

   - 위와 같이 모두 빨간색으로 변경할 수 있음

   ```javascript
   traverse(document.getElementById('start'), function(elem){
       if(elem.nodeName === 'A') {
   		elem.style.backgroundColor = 'blue';
       }
   });
   ```

   - 내부적으로 특정 태그만 한정할 수 있음	

3. ### 재귀 함수 2

> 재귀함수가 어떻게 동작하는지, 재귀함수 (traverse 함수)가 어떻게 작성되어야 이렇게 동작하는지

- 로직이 어떻게 구성되는지 먼저 생각

1. function traverse() {}

   1. 첫번 째 인자는 target
   2. 두번 째 인자는 callback
      - 자기자신을 실행시키기 위함

2. function traverse (target, callback) { traverse(callback); }

   > Body 태그 하위의 태그들을 호출하는 식 (되기적인 방법?)

   1. 자식 Element 들을 첫번 째 인자로 전달하는 방법을 순차적으로 진행

   ```javascript
   function traverse(target, callback) {
       callback(target);
       var c = target.childNodes;
       for (var i = 0; i<c.length; i++) {
         traverse(c[i], callback);
       }
   }
   traverse(document.getElementById('start'), function(elem){
       console.log(elem);
   });
   ```

   ![](https://i.imgur.com/lsMTLCz.png)

   ​



```javascript
function traverse(target, callback) {
  if (target.nodeType == Node.ELEMENT_NODE) {
    if (target.nodeName === 'A')
      callback(target);
    var c = target.childNodes;
    for (var i = 0; i<c.length; i++) {
      traverse(c[i], callback);
    }
  }
}
traverse(document.getElementById('start'), function(elem){
    console.log(elem);
});
```

![](https://i.imgur.com/t40Q8Go.png)

- 원하는(조회하고자 하는) 노드들을 필터링 할 수 있었고
- ChildNode, 자식노드를 조회
- traverse 를 통해 재귀함수 개념 파악
- 함수를 다른 함수의 인자로 전달하는 것을 통해서 함수가 값으로 사용될 수 있다는 사실
- 콜백함수