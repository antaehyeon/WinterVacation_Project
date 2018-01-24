# JavaScript - 사용자와 커뮤니케이션 하기

1. ### JavaScript - 사용자와 커뮤니케이션 (1/3) : alert

   > 사용자와 커뮤니케이션 하는 방법
   >
   > 사용자의 입력 정보를 받아서 처리하는 등

   ```html
   <!DOCTYPE html>
   <html>
       <body>
           <input type="button" value="alert" onclick="alert('hello world');" />
       </body>
   </html>
   ```

   - 경고창(alert 창)은 실행이 끝나기 전까지 다음 작업이 실행되지 않음
   - 요즘에는 console.log 를 사용

2. ### JavaScript - 사용자와 커뮤니케이션 (2/3) : confirm

   `confirm('ok?')`

   ![](https://i.imgur.com/EcJsn0f.png)

   - 취소와 확인창이 제공됨
     - 확인을 누르면 ture 리턴
     - 취소를 누르면 false 리턴

   ```html
   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="utf-8">
       <title></title>
     </head>
     <body>
       <input type="button" value="confirm" onclick="func_confirm()"  />
       <script>
         function func_confirm() {
           if (confirm('ok?')) {
             alert('ok')
           } else {
             alert('calcel');
           }
         }
       </script>
     </body>
   </html>
   ```

3. ### JavaScript - 사용자와 커뮤니케이션 (3/3) : prompt

   > 사용자가 입력한 값을 받아서 JavaScript가 얻어낼 수 있는 기능

   `prompt('id?')`

   ![](https://i.imgur.com/BecMJSO.png)

   - 사용자가 **입력한 값이 리턴 값으로 제공**됨

   ```html
   <!DOCTYPE html>
   <html>
       <body>
           <input type="button" value="prompt" onclick="func_prompt()" />
           <script>
               function func_prompt(){
                   if(prompt('id?') === 'egoing'){
                       alert('welcome');
                   } else {
                       alert('fail');
                   }
               }
           </script>
       </body>
   </html>
   ```

   ​























