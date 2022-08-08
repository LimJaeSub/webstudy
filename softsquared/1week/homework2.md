### 1. `<div>,<span>` 태그

div태그는 특정 구역을 분할하거나 분류할 때 사용한다. div 요소는 순수 컨테이너로써 아무것도 표현하지 않으며, 다른 요소를 묶어서 `class`나 `id`속성으로 css에서 꾸미기 쉽도록 돕거나 스크립트에서 dom메소드로 특정 구역을 표시하기 쉽게 만들어준다.

div 태그는 block태그로 inline속성인 `span`태그와 차이점이 있다.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div>block1</div>
    <div>block2</div>
    <span>inline1</span>
    <span>inline2</span>
  </body>
</html>
```

![](https://velog.velcdn.com/images/liso_o/post/82525691-7643-4b5d-8091-30ab58ff0b45/image.png)

위 코드를 작성하면 div태그는 block형태, span태그는 inline형태로 작성되는 것을 알아볼 수 있다.

### 2. `<img>` 태그

`<img>`태그는 문서에 이미지를 넣는 태그다.

img태그의 `src`속성은 필수 속성이며 포함하고자 하는 이미지의 경로를 지정한다.
`alt` 속성은 이미지의 설명을 나타내며 필수는 아니지만 해당 속성값을 읽어 이미지를 설명하므로 접근성 차원에서 굉장히 유용하다.

이미지의 경로는 절대경로와 상대 경로로 나뉘며, 절대경로는 해당 이미지의 주소를 직접적으로 작성하는 것이고

상대경로는 현재 프로젝트 내의 요소와의 상대적 경로를 나타낸다.

```html
<div>
  <p>here is image</p>
  <img src="이미지 주소" alt="dog" />
  <p>here is image2</p>
  <img src="image/KakaoTalk_20220808_180259942.jpg" alt="mokoko" />
</div>
```

![](https://velog.velcdn.com/images/liso_o/post/3aa97347-f64a-4f46-b776-9bbb37e3bc31/image.png)

### 3. `<input>` 태그

`<input>` 요소는 웹에서 사용자의 데이터를 입력받을 수 있는 컨트롤을 생성한다.

input은 type에 따라 입력받을 수 있는 유형이 달라진다. 또한 type에 따라 속성값도 달라진다.

- 자세한 내용은 https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#%EC%86%8D%EC%84%B1

`input`과 `label`은 보통 같이 쓰이는데 여기서 label의 속성인 for은 여러개의 input중 레이블 가능한 input요소의 id를 받아 for의 속성값과 일치하는 input을 라벨링해준다.

```html
<div class="input">
  <form action="" method="get">
    <label for="text">text:</label>
    <input type="text" name="text" id="text" minlength="5" maxlength="10" />

    <label for="password">password:</label>
    <input type="password" name="password" id="password" />

    <label for="email">email:</label>
    <input type="email" name="email" id="email" />

    <label for="tel">tel:</label>
    <input type="tel" name="tel" id="tel" />

    <label for="email">email:</label>
    <input type="email" name="email" id="email" />

    <label for="number">number:</label>
    <input type="number" name="number" id="number" />

    <label for="range">range:</label>
    <input type="range" name="range" id="range" />

    <button type="submit">submit</button>
  </form>
</div>
```

![](https://velog.velcdn.com/images/liso_o/post/8299c799-a96d-44c7-85db-2df959bdece7/image.png)

### 4. `<a>` 태그

`a`태그는 href 특성을 통해 다른 페이지 또는 url로 연결할 수 있는 하이퍼링크를 만든다.

```html
<div class="a">
  <ul>
    <li><a href="http://naver.com">naver</a></li>
    <li><a href="mailto:liso_o@naver.com">Email</a></li>
    <li><a href="tel:+01093403327">phone</a></li>
  </ul>
</div>
```

![](https://velog.velcdn.com/images/liso_o/post/35b1d16f-fae3-450d-9b57-ef591df6e1df/image.png)

### 5. id와 class

id 전역 특성은 문서 전체에서 유일한 고유식별자를 정의한다. class 역시 전역 특성이다.

- 전역 특성 : 모든 HTML에서 공통으로 사용할 수 있는 특성
- 고유식별자의 목적은 스크립트 및 스타일 적용 시 특정 요소를 식별하기 위함이다.

```html
<div id="firstid" class="firstClass firstdiv"></div>
```

다만 id는 정말 고유한 값을 가지고 있으며, class는 공백으로 구분이 가능하다.
