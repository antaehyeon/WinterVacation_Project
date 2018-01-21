- # 서버 측 JS - Express, POST 방식을 이용한 정보의 전달 2 : form

  - jade 에서 해당 태그의 속성을 추가하고싶다 라고 한다면 아래와 같이 진행하면 됨

    ```jade
    DOCTYPE html
    html
      head
        meta(charset ='utf-8')
      body
    ```

  - 사용자가 입력한 정보들을 서버 어디로 전송할지가 애매함 = form 태그로 묶음

  - 서버의 어디로 전송될 것인가를 웹브라우저에 알려주는 것

    - form(action='/form_receiver')

      ```jade
        body
          form(action='/form_receiver')
            p
              input(type='text')
            p
              textarea
            p
              input(type='submit')
      ```

    - 이후 제출버튼을 클릭하게 되면 주소가

    - http://localhost:3000/form 에서 http://localhost:3000/form_receiver? 으로 변경됨 (query string)

    - RETURN **Cannot GET /form_receiver**

    - 사용자의 정보를 /form_receiver으로 전송할 준비는 끝

  - 그런데 데이터를 입력하는 필드가 여러개 있다면, 각각의 필드에 대한 ID(name)를 서버가 알 수 있어야 함

    ```jade
    DOCTYPE html
    html
      head
        meta(charset ='utf-8')
      body
        form(action='/form_receiver')
          p
            input(type='text' name='title')
          p
            textarea(name='description')
          p
            input(type='submit')
    ```

    - 각 필드에 대한 name을 지정 (title, description)
    - 그리고 제출을 클릭하면 URL은
      http://localhost:3000/form_receiver?title=hello&description=world 로 변경됨

  - 그러면, JavaScript 에서 form_receiver에 대한 get 코드를 삽입

    ```jade
    app.get('/form_receiver?', function(req, res) {
    	var title = req.query.title;
    	var description = req.query.description;

    	res.send(title + ',' + description);
    })
    ```

  - HTML에서 form 이라는 것은 URL을 생성해주는 작은 Application 이 되는것임

  - 웹브라우저는 form 태그에 의해 입력된 데이터에 의해 적당한 URL을 자동으로 생성해서 서버에게 보내주는 역할

  - 서버 (form_receiver) 은 사용자가 보낸 title, description 값을 저장할 수 있게 되는 것

  - 아직까지는 GET방식

    ```jade
    form(action='/form_receiver' method='get')

    form(action='/form_receiver' method='post')
    ```

    - 만약 form 태그에 method를 명시하지 않았을 경우 자동으로 설정되는 것은 get 방식임

    - 그런데 method='post' 라고 명시할 경우

      ```
      http://localhost:3000/form_receiver

      RETURN Cannot POST /form_receiver
      ```

      - query string이 생성되지 않으며, 내용또한 Error 을 리턴함

    - 일단 서버에 데이터가 전송이 되지 않는것은 아님

    - method='post' 일 경우, URL 로 전송하는 것이 아닌 우리눈에 보이지 않는 다른 방식으로 전송

    - 방식의 차이 (POST는 query string 을 이용하지 않음)