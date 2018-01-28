# JavaScript - jQuery node 제어 API

1. ### 추가

   > [jQuery Manipulation](http://api.jquery.com/category/manipulation/)

   ![](https://i.imgur.com/Gqgyg5d.png)

   ```javascript
   <div class="target">
       content1
   </div>
    
   <div class="target">
       content2
   </div>
    
   <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
   <script>
       $('.target').before('<div>before</div>');
       $('.target').after('<div>after</div>');
       $('.target').prepend('<div>prepend</div>');
       $('.target').append('<div>append</div>');
   </script>
   ```

   - before : 해당 태그 위쪽 (전) 에 위치
   - after : 해당 태그 아래쪽 (후) 에 위치
   - prepend : `<div>` 태그 안쪽의 내용 (content1) 윗줄에 위치
   - append : `<div>` 태그 안쪽의 내용 (content1) 아랫줄에 위치

   `$('.target').before('<div>before</div>');`

   ```
   before
   content1
   before
   content2
   ```

   `$('.target').after('<div>after</div>');`

   ```
   before
   content1
   after
   before
   content2
   after
   ```

   `$('.target').prepend('<div>prepend</div>');`

   ```
   before
   prepend
   content1
   after
   before
   prepend
   content2
   after
   ```

   `$('.target').append('<div>append</div>');`

   ```
   before
   prepend
   content1
   append
   after
   before
   prepend
   content2
   append
   after
   ```

   - 제어하고자 하는 대상들이 **복수로 존재할 때, 그 객체들에게 모두 적용**됨

2. ### 제거

   > 제거와 관련된 API

   1. remove

      > 선택된 element 를 제거

   2. empty

      > 선택된 element의 텍스트 노드를 제거

   ```html
   <div class="target" id="target1">
       target 1
   </div>
    
   <div class="target" id="target2">
       target 2
   </div>
    
   <input type="button" value="remove target 1" id="btn1" />
   <input type="button" value="empty target 2" id="btn2" />
   <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
   <script>
       $('#btn1').click(function(){
           $('#target1').remove();
       })
       $('#btn2').click(function(){
           $('#target2').empty();
       })
   </script>
   ```

   ![](https://i.imgur.com/46LF19u.gif)

3. ### 바꾸기

   - ### 교체

     > Element들을 바꾸기 위해서 관련된 API를 설명

     ```javascript
         $('#btn1').click(function() {
           $('<div>replaceAll</div>').replaceAll('#target1');
         })
         $('#btn2').click(function() {
           $('#target2').replaceWith('<div>replaceWith</div>');
         })
     ```

     - replaceAll은 **제어 대상이 뒤**에 있고
     - replaceWitth 는 **제어 대상이 앞**에 있음
     - 기능은 동일함

   - ### 복제

     ```javascript
     <div class="target" id="target1">
         target 1
     </div>
      
     <div id="source">source</div>
      
     <input type="button" value="append source to target 1" id="btn1" />
     <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
     <script>
         $('#btn1').click(function(){
             $('#target1').append($('#source'));
         })
     </script>
     ```

     - clone 함수가 붙으며, 교체와 같이 제어대상이 어디에 위치하냐에 따라서
     - replaceAll / replaceWith 가 사용됨

   - ### 이동

     ```html
     <div class="target" id="target1">
         target 1
     </div>
      
     <div id="source">source</div>
      
     <input type="button" value="append source to target 1" id="btn1" />
     <script src="//code.jquery.com/jquery-1.11.0.min.js"></script>
     <script>
         $('#btn1').click(function(){
             $('#target1').append($('#source'));
         })
     </script>
     ```

     - `#source` 를 `#target1` 의 하위 내용으로 추가됨

     ![](https://i.imgur.com/1LZoUdK.png)

     ![](https://i.imgur.com/lp4msrS.png)