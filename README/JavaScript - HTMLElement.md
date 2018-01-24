# JavaScript - HTMLElement

1. ### 단수와 복수

   > 객체를 제어하기 위해서는 객체를 찾아야 한다

   ```html
   <ul>
       <li>HTML</li>
       <li>CSS</li>
       <li id="active">JavaScript</li>
   </ul>
   <script>
       var li = document.getElementById('active');
       console.log(li.constructor.name);
       var lis = document.getElementsByTagName('li');
       console.log(lis.constructor.name);
   </script>
   ```

   - `console.log(li.constructor.name);`
     - 리턴 값 : HTMLLIElement (HTML-LI-Element)
     - 리턴이 하나**(단일)**만 리턴된다
   - `console.log(lis.constructor.name);`
     - 리턴 값 : HTMLCollection (HTML-Collection)
     - 리턴이 **복수**로 리턴된다
     - 유사배열

2. ### HTML Element

   ```html
   <a id="anchor" href="http://opentutorials.org">opentutorials</a>
   <ul>
       <li>HTML</li>
       <li>CSS</li>
       <li id="list">JavaScript</li>
   </ul>
   <input type="button" id="button" value="button" />
   <script>
       var target = document.getElementById('list');
       console.log(target.constructor.name);
    
       var target = document.getElementById('anchor');
       console.log(target.constructor.name);
    
       var target = document.getElementById('button');
       console.log(target.constructor.name);
    
   </script>
   ```

   - `console.log(target.constructor.name);`

     - 리턴 값 : HTML**LI**Element

   - `console.log(target.constructor.name);`

     - 리턴 값 : HTML**Anchor**Element

   - `console.log(target.constructor.name);`

     - 리턴 값 : HTML**Input**Element

   - 각각의 태그명에 따라서 리턴 값이 달라짐

   - 객체가 다르다 = Property가 다르다 = 기능이 다르다

     - 공통적인 태그의 성격을 가지고 있지만 (HTMLElement)

     - 각각의 기능이 세세하게 다르기 때문에 객체가 다른 것임

       - HTMLLIElement

         ```html
         interface HTMLLIElement : HTMLElement {
                    attribute DOMString       type;
                    attribute long            value;
         };
         ```

       - HTMLAnchroElement

         ```html
         interface HTMLAnchorElement : HTMLElement {
                    attribute DOMString       accessKey;
                    attribute DOMString       charset;
                    attribute DOMString       coords;
                    attribute DOMString       href;
                    attribute DOMString       hreflang;
                    attribute DOMString       name;
                    attribute DOMString       rel;
                    attribute DOMString       rev;
                    attribute DOMString       shape;
                    attribute long            tabIndex;
                    attribute DOMString       target;
                    attribute DOMString       type;
           void               blur();
           void               focus();
         };
         ```

       - 모두 **HTMLElement 를 상속받고 있음**

3. ### DOM Tree

   ![](https://i.imgur.com/64HB6xI.png)

   - Document Object Model Tree
     - 위에서 봤던 `HTMLElement` 객체들은
     - 부모를 `HTMLElement` 로 지니고 있고
     - 그 부모는 `Element` 이며
     - 최종 부모는 `Node` 이다