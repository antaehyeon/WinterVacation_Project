# cookie 4 : shopping cart 2

- /cart/:id 에 대한 Route 구성

  ```js
  app.get('/cart/:id', function(req, res) {
    var id = req.params.id;
    if (req.cookies.cart)
      var cart = req.cookies.cart;
    else
      var cart = {};

    if(!cart[id])
      cart[id] = 0;

    cart[id] = parseInt(cart[id]) + 1;

    res.cookie('cart', cart);
    // res.send(cart);
    res.redirect('/cart');
  })
  ```

  - res.send(cookie) 에 대한 코드로 /cart/:id 에 접속한다면 cookie 에 대한 1이 증가해서 cookie의 상태를 출력함
    ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-07%20%EC%98%A4%ED%9B%84%201.45.20.png)
    - cart 에 대한 데이터 저장형식 (Object) 를 잘 참고
  - 만약 /cart/:id 의 값이 존재하지 않는다면, if문으로 처리
    - cart[id] = 0
  - 최종적으로 res 에 대한 redirect 를 /cart 로 처리
    - RETURN Cannot GET /cart