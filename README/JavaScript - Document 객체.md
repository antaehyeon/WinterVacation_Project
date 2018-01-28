# JavaScript - Document 객체

> DOM의 시작점, 문서전체를 의미하는 노드

- Document

  - HTMLDocument : HTML 문서 전체를 의미하는 객체

- document.childNodes

  - document.childNodes[0]

    `<!DOCTYPE html>`

  - document.childNodes[1]

    ```
    <html>
    	<head></head>
    	<body id="start">_</body>
    </html>
    ```

- ### 주요 API

- 노드 생성 API

  >document의 한 사용으로는 문서에 포함될 객체를 생성해줌 (document.createElement)

  - createElement()
  - createTextNode()

- 문서 정보 API

  - title
  - URL
  - referrer
  - lastModified

![](https://i.imgur.com/Se2byMa.png)

