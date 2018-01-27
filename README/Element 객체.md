# Element 객체

> element를 추상화 한 객체

- `var t = docment.getElementById('active')`

  - t가 가르키는 객체는 HTMLLIELEMENT 임
  - 부모는 HTMLELEMENT
    - 모든 Element에 대한 공통적인 기능을 제공
    - style 이라는 속성을 가지고 있음
  - 해당 객체의 부모는 ELEMENT
    - 모든 Element 에 대한 기능성을 제공

- 그러면 왜 대체 Element 와 HTMLElement를 구분하는 것일까?

  - DOM이 꼭 HTML 만을 제어하기 위한 언어는 아님
  - 마크업 언어를 제어하기 위한 언어다
    - HTML, XML, SVG, XUL
    - 모든 Element를 제어하기 위한 기능들은 Element 에
    - HTML을 특정으로 제어하기 위한 기능들은 HTMLElement 에
      - 꾸며주기 위해서 style 에 대한 속성이 제공됨
      - 다른 부분 (XML, SVG 등) 에서는 있을수도 있고, 없을수도 있고, 있어도 같은 기능을 제공하지 않을 수 있다
    - 다양한 언어를 지원하는데도 수월하게 익힐 수 있다
    - 다른 언어가 DOM이라는 것을 지원하고 있다면
    - 빠르게 익힐 수 있음

- 개발자 도구에서 특정 태그에 대한 Property 를 확인할 수 있음

  ![2018-01-25_101100](C:\Users\HYEON\Desktop\2018-01-25_101100.png)

  - DOM에 대한 구조적인 이해를 할 수 있도록

- Element 주요 기능

  - 식별자

    > 특정한 엘리먼트를 식별하기 위한 용도로 사용

    1. Element.classList
    2. Element.className
    3. Element.id
    4. Element.tagName

  - 조회

    > 엘리먼트의 하위 엘리먼트를 조회하는 API

    1. Element.getElementByClassName
    2. Element.getElementByTagName
    3. Element.querySelector
    4. Element.querySelectorAll

  - 속성

    > 엘리먼트의 속성을 알아내고 변경하는 API

    1. Element.getAttribute(name)
    2. Element.setAttribute(name, value)
    3. Element.hasAttribute(name)
    4. Element.removeAttribute(name)