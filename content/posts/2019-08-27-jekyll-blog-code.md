---
layout: post
title: github Blog from Jekyll Code 수정
subtitle: github blog 사용하기
categories: blog
tags: [jekyll,blog]
author: atom
---

## code 수정하기

### jekyll theme download 후 unzip

```bash
wget https://github.com/luoyan35714/LessOrMore/archive/master.zip && unzip master.zip
cd LessOrMore-master
```

### `_config.yml`를 수정

* 처음 받은 코드의 모습  
![config]("media/2019-08-27-jekyll-blog-code/스크린샷 2019-08-27 오후 6.50.20.png" )
`name, email, author`을 맞게 수정해준다. 그리고 url은 github주소(`https://{사용자이름}.github.io`)

```yaml
    url: https://atomwoww.github.io
    baseurl: /
```

> github.com의 경우 userid.github.io 가 기본 page로 호스팅을 해준다.

### 불필요한 부분 제거

`meta_description, motto` 등은 내 블로그에선 사용하지 않았다. `baidu_analysis` 는 제거하고 나는 google analytics 를 사용할 것이다.

### html 수정

* 전체파일에서 중국어로 된 부분을 수정해 주었다

  | 원문 | 수정 |
  |---|---:|
  | 大类分解 | Categories |
  | 小类内聚 | Tags |
  | 目录 | List |
  
* `_include/header.html`수정

 25-42 라인에 있는 `<ul class="nav navbar-nav navbar-right">`구문은 난 쓰지 않는거라 여기고 삭제하였다.
![불필요파일]("media/2019-08-27-jekyll-blog-code/스크린샷 2019-08-27 오후 7.36.30.png")