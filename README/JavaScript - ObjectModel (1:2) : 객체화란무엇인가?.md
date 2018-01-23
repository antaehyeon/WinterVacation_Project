# JavaScript - ObjectModel (1/2) : 객체화란무엇인가?

> Object Model 
>
> 자바스크립트를 통해서 브라우저를 제어하기 위해서는
>
> 자바스크립트로 제어할 수 있는 무엇(?) 이 준비되어야 한다
>
> 그 무엇이 Object Model !

- 테두리

  - JavaScript Core
  - BOM (Browser Object Model)
  - DOM

- 객체화

  > 객체를 만드는 것

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title></title>
    </head>
    <body>
      <img src="https://i.imgur.com/cOq0MeN.png" />
    </body>
  </html>
  ```

  - 간단하게 img 태그를 이용해서 이미지를 띄우는 HTML 구성
  - img 태그를 제어하려면 `Object` 여야 한다
  - 각각의 태그들마다 객체를 만들어놓고 준비 중
  - 태그에 해당하는 객체를 찾아서 어떠한 메소드를 호출한다던가, Property 값을 가져와서 객체를 제어함

- 객체를 제어해보자 !

  `var imgs = document.getElementsByTagName('img');`

  - **위의 구문을 통해서 객체(Object)를 찾아낸 것!**
  - Element**s** 이므로 배열을 리턴함

  ![](https://i.imgur.com/KAgRUI0.png)

  - 위와 같이 body 태그 안의 img 태그를 접근하려면 `imgs[0]` 으로 접근

  `imgs[0].style.width='300px';`

  - 위의 구문을 통해서 **객체를 제어**
  - width(가로)의 값이 **300px 로 고정됨**

  ![](https://i.imgur.com/VK7fBWV.png)

  `window.alert('Hello world');`

  ![](https://i.imgur.com/JhLhuD4.png)

  ​

  ​































