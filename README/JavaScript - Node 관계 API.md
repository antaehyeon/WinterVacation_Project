# JavaScript - Node 관계 API

> 노드와 노드사이의 관계를 알아낼 수 있는 수단을 몇개 제공하는가에 대해서 알아볼 것

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title></title>
  </head>
  <body>
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
      var s = document.getElementById('start');
      console.log(1, s.firstChild); // #text
      var ul = s.firstChild.nextSibling
      console.log(2, ul); // ul
      console.log(3, ul.nextSibling); // #text
      console.log(4, ul.nextSibling.nextSibling); // script
      console.log(5, ul.childNodes); //text, li, text, li, text, li, text
      console.log(6, ul.childNodes[1]); // li(html)
      console.log(7, ul.parentNode); // body
      </script>
    </body>
  </body>
</html>
```

- start

  > 각각의 엘리먼트들을 기준으로 해서 어떻게 다른 엘리먼트들과 관계를 맺고있는지 프로그래밍적으로 알아내기

  `<body id="start">`

  1. `var start = document.getElementById('start');`

     - `start.firstChild`

     - return `#text`

       - body의 첫번 째 자식이 ul이 아니라는 것
       - 그러면 text의 정체는 ?

       ![](https://i.imgur.com/y0PIKQL.png)

       - 위와 같이 body 태그와 ul 태그 사이의 공백문자로 유추해볼 수 있음

     - body태그와 ul태그 사이의 아무런 공백없이 붙인다면

       - start.firstChild 시 `<ul></ul>` 이 리턴됨

     - `start.firstChild.nextSibling`

       - 같은 레벨에 있는 단위를 nextSibling 이라고 지칭함
       - body태그와 ul태그를 붙이지 않아도 `<ul></ul>` 이 리턴됨

     - ul 다음의 li 태그도 `firstChild.nextSibling` 형식으로 접근

     - `start.childNodes`

       - 유사배열로 자식 엘리먼트들을 리턴함

       ![](https://i.imgur.com/V9E8CZ6.png)

       ​























