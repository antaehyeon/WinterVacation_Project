# Server Side JavaScript - Jade extends 2

> jade 파일에서 중복되는 코드를 없애보자 !

1. ### layout.jade 파일 생성

   - 두개의 jade 파일에서 중복되는 부분을 별도의 파일로 구성

     ```jade
     html
       head
       body
         ul
           li JavaScript
           li nodejs
           li expressjs
         article
     ```

   - 그리고 각각의 jade 파일에서 중복된 부분을 삭제

     ```jade
     add.jade
     form
       input(type="text")
       input(type="submit")
     ```

     ```js
     view.jade
     JavaScript is ....
     ```

2. ### 비어있는 부분에 대한 상속(Extends)을 추가

   ```jade
   view.jade
   extends ./layout
   block content
     | JavaScript is ....
   ```

   - ./layout 파일을 상속받고
   - 호출할 컨텐츠는 block content 를 실행한다
   - 이후 JavaScript is … 에 대한 구문은 태그로 인식할 경우가 있기 때문에 | 표시를 통해서 텍스트로 인식시켜준다

   ```jade
   add.jade
   extends ./layout
   block content
     form
       input(type="text")
       input(type="submit")
   ```

   - 마찬가지로 layout 파일을 상속받고
   - block content 에 대한 것을 호출한다
   - 들여쓰기 주의 !

3. ### 유지보수의 극대화

   - 만약에 ul 태그에서 ol 태그로 변경하고 싶다면

     ```jade
     html
       head
       body
         ul
           li JavaScript
           li nodejs
           li expressjs
         article
           block content
     ```

     ```jade
     ul => ol
     ```

     - 각각의 파일에 접근할 필요가 없이 한 파일로 **두개의 jade 파일을 동시에 변경**
     - **유지보수의 극대화**

4. ### [Includes](http://jade-lang.com/reference/includes)

   > 가져오다

   - 기존의 extends 와 비슷한 기능이지만 호출되는/호출당하는 입장이 다름