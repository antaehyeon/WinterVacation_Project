# JavaScript - Node 객체

> DOM에서 시조같은 역할 (최상위 객체)
>
> 모든 DOM 객체는 Node 객체를 상속받는다

![](https://i.imgur.com/YqHgYzd.png)

- Node 객체는 모든 객체를 상속받는다

- Node 객체는 각각의 객체들간의 관계성을 부여하는 API들이 존재

  ```html
  <ul>
  	<li>JavaScript</li>
  	<li>html</li>
  </ul>
  ```

  - Node.firstChild
    - 첫 형제
  - Node.lastChild
    - 마지막 형제
  - Node.nextSibling
    - 다음 형제
  - Node.perviousSibling
    - 이전 형제
  - Node.contains()
  - Node.hasChildNodes()

-  각각의 HTML **구성요소간에 어떻게 연결되어 있는가**를 프로그래밍적으로 알아낼 수 있는 매우 중요한 것

- HTML상에 있는 다양한 태그, 코멘트, 텍스트, 속성들이 어떻게 관계를 맺고 있는가

- 각각의 노드들은 어떻게 구체적으로 만들어져 있는가