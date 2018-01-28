# JavaScript - TEXT 객체

![](https://i.imgur.com/WfLi8c3.png)

```javascript
<p id="target1"><span>Hello world</span></p>
<p id="target2">
    <span>Hello world</span>
</p>
<script>
var t1 = document.getElementById('target1').firstChild;
var t2 = document.getElementById('target2').firstChild;
 
console.log(t1.firstChild.nodeValue);
try{
    console.log(t2.firstChild.nodeValue);   
} catch(e){
    console.log(e);
}
console.log(t2.nextSibling.firstChild.nodeValue);
 
</script>
```

- target1 은 기타 문자가 존재하지 않음 (공백, 줄바꿈 등)

  `var t1 = document.getElementById('target')`

  `t1` => `<p id="target1">_</p>`

  `t1.firstChild` => `<span>Hello world</span>`

  `t1.firstChild.firstChild` => `"Hello world"`

- target2 는 기타 문자가 존재함

  - DOM에서는 공백또한 제어할 수 있기 때문에 하나의 객체로 식별

  `var t2 = document.getElementById('target2')`

  `t2.firstChild.nextSibling` => `<span>Hello world</span>`

  `t2.firstChild.nextSibling` => `"Hello world"`

- ### 주요 기능

- ### 값 (텍스트 노드의 값을 가져오는 API)

  - data
  - nodeValue

  `    <li id="target">html</li>`

  ```javascript
  var t = document.getElementById('target').firstChild;
  console.log(t.nodeValue);
  console.log(t.data);
  ```

  ```
  RETURN

  html
  html
  ```

- ### 조작 API

  - appendData()

    > 끝에 메세지가 출력됨

    ```javascript
    function callAppendData(){
      target.appendData(data.value);
    }
    ```

  - deleteData()

    ```javascript
        function callDeleteData(){
            target.deleteData(start.value, end.value);
        }
    ```

  - insertData()

    ```javascript
        function callInsertData(){
            target.insertData(start.value, data.value);
        }
    ```

  - replaceData()

    ```javascript
        function callReplaceData(){
            target.replaceData(start.value, end.value, data.value);
        }
    ```

  - subStringData()

    ```javascript
        function callSubstringData(){
            alert(target.substringData(start.value, end.value));
        }
    ```