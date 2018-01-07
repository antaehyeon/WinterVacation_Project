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
  ![](https://github.com/antaehyeon/WinterVacation_Project/tree/master/Image/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202018-01-07%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.09.10.png)

- 최종 결과물
  ![](https://github.com/antaehyeon/WinterVacation_Project/tree/master/Image/%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202018-01-07%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%201.11.32.png)