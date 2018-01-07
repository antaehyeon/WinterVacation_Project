# cookie 5 : shopping cart 3

- Cart에 대한 Route 구성

  ```js
  app.get('/cart', function(req, res) {
    var cart = req.cookies.cart;
    if (!cart) {
      res.send('Empty !!');
    } else {
      var output = '';
      for (var id in cart) {
        output += `<li>${products[id].title} (${cart[id]})</li>`;
      }
    }
    res.send(`
      <h1>Cart</h1>
      <ul>${output}</ul>
      <a href="/products">Product List</a>`);
  })
  ```

  - cart[id].title 는 각 cart item 에 대한 제목을 나타냄
    - 맨 처음에 배열로 구성했던 부분
  - cart[id] 는 수량을 나타내는데 이에 대한 부분을 이해해 볼 것

- 결과 값

  ![1월-07-2018 14-10-13](/Users/hyeon/WinterVacation_Project/Image/1월-07-2018 14-10-13.gif)

  ​

- **Cookie는 server가 사용자의 웹브라우저에게 CRUD 하는 것이다**