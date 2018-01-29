# jQuery - 엘리먼트의 제어

> jQuery 는 엘리먼트를 제어하는 일관되고 풍부한 기능을 제공

- [Manipulation](http://api.jquery.com/category/manipulation/)

- 자식으로 삽입(`.append()`, `.appendTo()`, `.html()`, `.prepend()`, `.prependTo()`, `.text()`)

  ```html
  <!-- http://api.jquery.com/append/ -->
  <!DOCTYPE html>
  <html>
      <head>
          <style>
              p {
                  background:yellow;
              }
          </style>
          <script src="http://code.jquery.com/jquery-latest.js"></script>
      </head>
      <body>
          <p>
              I would like to say:
          </p>
          <script>$("p").append("<strong>Hello</strong>");</script>
      </body>
  </html>
  ```

  - `p` 태그 안에 삽입


- 형제로 삽입 (`.after()`, `.before()`, `.insertAfter()`, `.insertBefore()`)

  ```html
  <!-- http://api.jquery.com/after/ -->
  <!DOCTYPE html>
  <html>
      <head>
          <style>
              p {
                  background:yellow;
              }
          </style>
          <script src="http://code.jquery.com/jquery-latest.js"></script>
      </head>
      <body>
          <p>
              I would like to say:
          </p>
          <script>$("p").after("<b>Hello</b>");</script>
      </body>
  </html>
  ```

  - `p` 태그 외부에 삽입

- 부모로 감싸기 (`.unwrap()`, `.wrap()`, `.wrapAll()`, `.wrapInner()`)

  ```html
  <!-- http://api.jquery.com/wrap/ -->
  <!DOCTYPE html>
  <html>
      <head>
          <style>
              div {
                  border:2px blue solid;
                  margin:2px;
                  padding:2px;
              }
              p {
                  background:yellow;
                  margin:2px;
                  padding:2px;
              }
              strong {
                  color:red;
              }
          </style>
          <script src="http://code.jquery.com/jquery-latest.js"></script>
      </head>
      <body>
          <span>Span Text</span>
          <strong>What about me?</strong>
          <span>Another One</span>
          <script>$("span").wrap("<div><div><p><em><b></b></em></p></div></div>");</script>
      </body>
  </html>
  ```

  - `span` 태그의 부모태그로 삽입됨

- 삭제 (`.detach()`, `.empty()`, `.remove()`, `.unwrap()`)

  ```html
  <!-- http://api.jquery.com/remove/ -->
  <!DOCTYPE html>
  <html>
      <head>
          <style>
              p {
                  background:yellow;
                  margin:6px 0;
              }
          </style>
          <script src="http://code.jquery.com/jquery-latest.js"></script>
      </head>
      <body>
          <p>
              Hello
          </p>
          how are
          <p>
              you?
          </p>
          <button>
              Call remove() on paragraphs
          </button>
          <script>
              $("button").click( function () {
                  $("p").remove();
              });
          </script>
      </body>
  </html>
  ```

- 치환 (`.replaceAll()`, `.replaceWith()`)

  ```html
  <!-- http://api.jquery.com/replaceAll/ -->
  <!DOCTYPE html>
  <html>
      <head>
          <script src="http://code.jquery.com/jquery-latest.js"></script>
      </head>
      <body>
          <p> Hello </p>
          <p> cruel </p>
          <p> World </p>
          <script>$("<b>Paragraph. </b>").replaceAll("p"); // check replaceWith() examples        </script>
      </body>
  </html>
  ```

- 클래스 (`.addClass()`, `.hasClass()`, `.removeClass()`, `.toggleClass()`)

  ```html
  <!-- http://api.jquery.com/toggleClass/ -->
  <!DOCTYPE html>
  <html>
      <head>
          <style>p {
                  margin: 4px;
                  font-size:16px;
                  font-weight:bolder;
                  cursor:pointer;
              }
              .blue {
                  color:blue;
              }
              .highlight {
                  background:yellow;
              }
          </style>
          <script src="http://code.jquery.com/jquery-latest.js"></script>
      </head>
      <body>
          <p class="blue"> Click to toggle </p>
          <p class="blue highlight"> highlight </p>
          <p class="blue"> on these </p>
          <p class="blue"> paragraphs </p>
          <script>
               $("p").click( function () {
                   $(this).toggleClass("highlight");
               });
           </script>
      </body>
  </html>
  ```

- 속성제어 (`.attr()`, `.prop()`, `.removeAttr()`, `.removeProp()`, `.val()`)

  ```html
  <!DOCTYPE html>
  <html>
      <head>
          <style>p {
                  color:blue;
                  margin:8px;
              }
          </style>
          <script src="http://code.jquery.com/jquery-latest.js"></script>
      </head>
      <body>
          <input type="text" value="some text"/>
          <p>
          </p>
          <script>$("input").keyup( function () {
                  var value = $(this).val();
                  $("p").text(value);
              }).keyup();</script>
      </body>
  </html>
  ```

  ​