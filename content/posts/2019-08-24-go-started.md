---
layout: post
title:  Go 시작하기
description: installation go
date:   2019-08-24 00:00:00 +0800
categories: program
tag: [go, server]
---

* content
{:toc}

## Go installation

* go lang  [Download](https://golang.org/dl/)
* /user/local에 설치하고 path를 잡아주기

아래와 같이 os맞는 tar를 받으면 된다

> tar -C /usr/local -xzf go{VERSION}.{OS}-{ARCH}.tar.gz

다운 받은후 install

``` bash
wget https://dl.google.com/go/go1.12.9.linux-amd64.tar.gz
sudo tar -C /usr/local -xzf go1.12.9.linux-amd64.tar.gz
```

```bash
cat <<EoF >> ~/.profile
export PATH=$PATH:/usr/local/go/bin
EoF
```

``` bash
source ~/.profile
```

이제 go가 잘 설치되었는지 확인한다.
> 자신의 워크스페이스를 생성  
test file 작성 (hello.go)  

``` go
package main

import "fmt"

func main() {
    fmt.Printf("hello, world\n")
}
```

빌드를 하고 난후 실행해본다.

``` bash
go/src/hello$ go build
go/src/hello$ ./hello
hello, world
```
