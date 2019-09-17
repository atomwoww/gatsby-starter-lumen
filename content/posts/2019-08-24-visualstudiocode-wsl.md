---
layout: post
title:  windows10에서 wsl을 이용하여 개발하기
description: ubuntu on windows10
date:   2019-08-24 00:00:00 +0800
categories: program
tag: [visual studio code, wsl, ubuntu, windows10]
---

* content
{:toc}

## windows10 의 WSL(Windows Subsystem for Linux) 사용하기

windows10에서 개발을 하다보면 환경변수나 기타 빌드도구들이 windows 환경에서는 너무 안맞는 경우가 많다. PowerShell은 솔직히 아직 어떻게 쓰는건지 모르겠고, youtube의 대부분 동영상 강의들은 ubuntu환경이나 mac의 경우가 대부분인데 이것을 그대로 따라하기는 너무 어렵다.  
주로 ubuntu로 nodejs나 python을 이용하여 개발을 하는데 이 때 github로 올린 파일을 windows나 linux에서 그대로 사용하려면 환경을 맞춰야 적합하다.  
하지만 집에서도 main pc나 노트북에 ubuntu를 설치를 하면 너무 불편하고 그렇다고 듀얼부팅을 하기엔 스토리지가 너무 아까웠다.  
그래서 WSL을 이용해보기로 했다.

## WSL 설치

[WSL 설치방법](https://docs.microsoft.com/ko-kr/windows/wsl/install-win10)  
위의 링크를 누르면 microsoft 홈페이지에서 wsl을 설치하는 방법이 자세히 나온다. 
관리자 권한으로 Powershell을 열고 아래긔 명령어로 wsl을 설치하고 재부팅하면 사용할 수 있다.

```PowerShell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
```

재부팅후 Microsoft Store에 가서 우분투를 설치하면 된다.
![ubuntu]("media/ubuntu_install.JPG")

나는 18.04 버젼을 설치하였다.
설치된 Ubuntu 18.04를 실행하고 커맨트 창에 vs code 실행 명령어를 치면

```shell
code .
```

![ubuntucli]("media/ubuntu_cli.JPG")

visual studio code가 Remote WSL모드로 실행된다. Remote WSL extention이 없으면 바로 install 로 넘어간다.
이제 visual studio code에서 원하는 폴더를 open해서 마치 native ubuntu를 사용하듯이 쓸수있다.
