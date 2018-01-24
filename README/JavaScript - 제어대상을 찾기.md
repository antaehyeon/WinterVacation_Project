# JavaScript - 제어대상을 찾기

> DOM을 통해 문서를 제어하려면
>
> 가장 먼저 해야할 것은 제어 대상을 찾아야 한다

1. ### getElementsByTagName

   ```html
   <!DOCTYPE html>
   <html>
   <body>
   <ul>
       <li>HTML</li>
       <li>CSS</li>
       <li>JavaScript</li>
   </ul>
   <script>
       var lis = document.getElementsByTagName('li');
       for(var i=0; i < lis.length; i++){
           lis[i].style.color='red';
       }
   </script>
   </body>
   </html>
   ```

   - `<li>HTML</li>` 를 `<li style="color: red"</li>` 로 바꾸려고 함!
   - `var lis = document.getElementsByTagName('li')`
     - document : 문서 전체를 의미
     - getElementsByTagName('li')
       - li 태그들을 가져와서 lis 에 반환

   ```html
   <!DOCTYPE html>
   <html>
   <body>
   <ul>
       <li>HTML</li>
       <li>CSS</li>
       <li>JavaScript</li>
   </ul>
   <ol>
       <li>HTML</li>
       <li>CSS</li>
       <li>JavaScript</li>
   </ol>
   <script>
       var ul = document.getElementsByTagName('ul')[0];
       var lis = ul.getElementsByTagName('li');
       for(var i=0; lis.length; i++){
           lis[i].style.color='red';
       }
   </script>
   </body>
   </html>
   ```

   - 만약에 li 태그들이 많은데 위쪽의 li 3개만 가져오고 싶을때는 ?

   - 문서 전체에서 ul의 첫번째 (배열 0번째) 값을 ul에 담고

   - ul에서의 getElementsByTagName 을 통해 문서를 제어함

     ![](https://i.imgur.com/P53QOXb.png)

2. ### getElementsByClassName

   ```html
   <!DOCTYPE html>
   <html>
   <body>
   <ul>
       <li>HTML</li>
       <li class="active">CSS</li>
       <li class="active">JavaScript</li>
   </ul>
   <script>
       var lis = document.getElementsByClassName('active');
       for(var i=0; i < lis.length; i++){
           lis[i].style.color='red';   
       }
   </script>
   </body>
   </html>
   ```

   - class가 active인 객체들에 대해서 제어할 수 있음

3. ### getElementById

   > 복수가 아님 (하나의 결과만 리턴됨)

   ```html
   <!DOCTYPE html>
   <html>
   <body>
   <ul>
       <li>HTML</li>
       <li id="active">CSS</li>
       <li>JavaScript</li>
   </ul>
   <script>
       var li = document.getElementById('active');
       li.style.color='red';
   </script>
   </body>
   </html>
   ```

   - 가장 성능이 좋음
   - **id 라는 것은 특정한 객체 하나만을 식별함**
     - 즉, 문서에서 한번밖에 호출될 수 없음 (같은 id에 대해서는)

4. ### querySelector

   ```html
   <!DOCTYPE html>
   <html>
   <body>
   <ul>
       <li>HTML</li>
       <li>CSS</li>
       <li>JavaScript</li>
   </ul>
   <ol>
       <li>HTML</li>
       <li class="active">CSS</li>
       <li>JavaScript</li>
   </ol>

   <script>
       var li = document.querySelector('li');
       li.style.color='red';
       var li = document.querySelector('.active');
       li.style.color='blue';
   </script>
   </body>
   </html>
   ```

   - querySelector('li') 는 하나만을 리턴함
     - 앞에 All이 붙어있다면 유사배열로 리턴함