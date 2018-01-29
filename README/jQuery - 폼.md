# jQuery - 폼

> 서버로 데이터를 전송하기 위한 수단

1. 예제 1 (`.focus()`, `.blur()`, `.change()`, `.select()`)

   ```html
   <!DOCTYPE html>
   <html>
       <head>
           <style>
               span {
               }
           </style>
           <script src="http://code.jquery.com/jquery-latest.js"></script>
       </head>
       <body>
           <p>
               <input type="text" />
               <span></span>
           </p>
           <script>
               $("input").focus( function () {
                   $(this).next("span").html('focus');
               }).blur( function() {
                   $(this).next("span").html('blur');
               }).change(function(e){
                   alert('change!! '+$(e.target).val());
               }).select(function(){
                   $(this).next('span').html('select');
               });
           </script>
       </body>
   </html>
   ```

   - `html` : event를 제공

2. 예제 2 (`.submit()`, `.val()`)

   ```html
   <!DOCTYPE html>
   <html>
       <head>
           <style>
               p {
                   margin:0;
                   color:blue;
               }
               div, p {
                   margin-left:10px;
               }
               span {
                   color:red;
               }
           </style>
           <script src="http://code.jquery.com/jquery-latest.js"></script>
       </head>
       <body>
           <p>
               Type 'correct' to validate.
           </p>
           <form action="javascript:alert('success!');">
               <div>
                   <input type="text" />
    
                   <input type="submit" />
               </div>
           </form>
           <span></span>
           <script>
               $("form").submit( function() {
                   if ($("input:first").val() == "correct") {
                       $("span").text("Validated...").show();
                       return true;
                   }
                   $("span").text("Not valid!").show().fadeOut(1000);
                   return false;
               });
           </script>
       </body>
   </html>
   ```

   - `input:first` : input 태그의 첫번째 요소를 리턴 `<input type="text" />`

