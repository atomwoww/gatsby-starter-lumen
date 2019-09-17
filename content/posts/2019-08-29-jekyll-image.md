---
layout: post
title: popup image 만들기 on jekyll
subtitle: 누르면 크게 보여주는 이미지
categories: blog
tags: [jekyll,blog]
author: atom
---

## wiki page처럼 이미지를 누르면 크게 보일 순 없을까

대부분의 웹페이지가 이미지를 누르면 커진다던가 효과를 준다던가 하는데 Jekyll theme은 도무지 지원하는 것이 없었다. 열심히 구글링을 하던 도중 결론을 내린것은 post할때 rendering된 이미지의 class를 이용하여 원하는데로 수정하는 것이었다.

이것을 이용하면 makrdown의 코드블럭도 좀 다양하게 바꿀수 있을것이라 예상되는데 이는 다음에 도전해보겠다.

1. image의 class 알아내기
2. class에 javascript로 다른 class로 넣어주기
3. popup으로 보여주는 javascript 퍼오기
4. 수정한 script를 사용할 수 있도록 html에 넣어주기

### image의 class 알아내기

>image의 class를 알아내기 위해선 간단하게 소스코드를 보는 것과 브라우저에서 보이는상태에서 요소 검사를 하면 바로 볼 수 있다
![브라우져에서검사]("media/2019-08-29-jekyll-image/스크린샷 2019-08-29 오후 4.04.52.png")

### javascript로 해당 클래스를 변경하기

>```javascript
>// 이미지 alt 속 내용을 캡션으로 만들어줌
>$('.post_content > p > img[alt]').replaceWith(function () {
>    return '<figure>'
>        + '<a href="' + $(this).attr('src') + '" class="mg-link">'
>        + '<img src="' + $(this).attr('src') + '" width="'
>        + $(this).attr('width') + '"' + '/></a>'
>        + '<figcaption class="caption">' + $(this).attr('alt') + '</figcaption>'
>        + '</figure>';
>});
>
>// 이미지를 magnific popup image viewer에 연결시킴
>$('.mg-link').magnificPopup({
>    type: 'image',
>    closeOnContentClick: true
>});
>```

### popup으로 보여주는 javascript 퍼오기

구글에서 popup 으로 보여주는 이미지의 코드를 가져와서 적절한 코드 위치에 저장한다. 나는 아래 스크립트를 가져왔다.  
[jquery.magnific-popup.min.js]({{ "styles/js/jquery.magnific-popup.min.js " | relative_url }})

### 수정한 script를 사용할 수 있도록 제일 하단에 html에 넣어주기 (`_layout/post.html`)

>```html
><script src="{{ '/styles/js/jquery.magnific-popup.min.js' | prepend: site.baseurl }}"></script>
><script src="{{ '/styles/js/popupimage.js' | prepend: site.baseurl }}"></script>
>```

### 해당 클래스에 css적용하기

>[_popup.sass](https://github.com/atomwoww/atomwoww.github.io/blob/63e6d3bc86f4eb354b94090a50a4e82d66ec225e/styles/css/popup.css)를 복사해서 sass로 빌드해준다
>빌드 명령어는 아래와 같다.
>
>```shell
>sass _sass/_popup.sass styles/css/popup.css
>```
>
>sass빌드에 관한 내용은 [여기]("https://sass-lang.com/guide")를 참고하면 된다.
>이제 해당 css를 링크해준다.
>나는 `head.html`에 링크해줬다
>
>```html
><link rel="stylesheet" href="{{ '/styles/css/popup.css' | prepend: site.baseurl }}">
>```
>
>이제 해당하는 스타일이 적용되었다.
