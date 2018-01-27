# JavaScript - 조회 API

- getElementsBy
- document.getElementsBy* 메소드를 이용해서 엘리멘트를 조회함
  - document 는 문서 전체를 의미하는 엘리먼트

```html
<ul>
    <li class="marked">html</li>
    <li>css</li>
    <li id="active">JavaScript
        <ul>
            <li>JavaScript Core</li>
            <li class="marked">DOM</li>
            <li class="marked">BOM</li>
        </ul>
    </li>
</ul>
<script>
    var list = document.getElementsByClassName('marked');
    console.group('document');
    for(var i=0; i<list.length; i++){
        console.log(list[i].textContent);
    }
    console.groupEnd();
     
    console.group('active');
    var active = document.getElementById('active');     
    var list = active.getElementsByClassName('marked');
    for(var i=0; i<list.length; i++){
        console.log(list[i].textContent);
    }
    console.groupEnd();
</script>
```

- document.getElementsByClassName('active')
  - textContent : 엘리먼트가 가지고 있는 텍스트를 반환
  - 리턴 값
    - HTML
    - DOM
    - BOM
  - document는 문서 전체를 담당하고 있으므로 active class 에 대해 모두 가져옴
- active = document.getElementById('active')
  - list = active.getElementsByClassName('marked')
  - 리턴 값
    - DOM
    - BOM
  - active 의 id를 가진 객체로 범위를 제한했으므로, 하위의 active class 만 가져옴



















