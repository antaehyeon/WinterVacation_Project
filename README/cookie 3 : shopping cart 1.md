# cookie 3 : shopping cart 1

> http://localhost:3003/products

- products 에 대한 get route 구성

  ```js
  app.get('/products', function(req, res){
    var output = '';
    for (var name in products) {
      output += `
      <li>
        <a href="/cart/${name}">${products[name].title}</a>
      </li>`;
    }
    res.send(`<h1>Products></h1><ul>${output}</ul><a href="/cart">Cart</a>`);
  })
  ```

- 배열 데이터 선언

  ```js
  var products = {
    1:{title:'The history of web 1'},
    2:{title:'The next web'}
  };
  ```

- console.log(products[name].title)
  ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-07%20%EC%98%A4%ED%9B%84%201.09.10.png)

- 최종 결과물
  ![](https://github.com/antaehyeon/WinterVacation_Project/blob/master/Image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202018-01-07%20%EC%98%A4%ED%9B%84%201.11.32.png)

