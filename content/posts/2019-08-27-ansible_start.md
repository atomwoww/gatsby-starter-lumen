---
layout: post
title: Ansible이란?
subtitle: ansible 장단점 소개
categories: program
tags: [ansible,yaml,infra,python]
author: atom
---

* content
{:toc}

## Ansible이란

* IT system의 자동화 도구이며, system설정, software 배포, 설치, 관리업무를 다룰 수 있다
* 중점목표는 쉬운사용이며, 보안과 안정성 또한 중요 목표이다
* 기존의 system변화를 최소화하기 위하여 openSSH를 이용한다.
* python으로 개발되고 YAML이라는 언어를 통해 정의할 수 있고 json으로 통신한다
  * python Github project 중 Rank 6
* 관리 대상 machine에 agent를 설치하지 않는다. 따라서 agent의 install, upgrade, scheduling 등이 필요하지 않는다

![ANSIBLE](https://mblogthumb-phinf.pstatic.net/MjAxODA4MDVfMTc3/MDAxNTMzNDY1Nzk1NDk0.VsluLSr0nvcJ2HMCpwukpPCWsf7Gz2A7w0S9T-K3tzUg.vgEqQVNxeKeBnf3rqXGpGy4BhCuwqqgI6-nBGBnuibUg.PNG.alice_k106/ansible-wide.png?type=w2)
## 장점

* 빠른 SSH통신, 빠른 provision이 가능
* 추후 상용환경에서 사용할 때 agent기반이면 방화벽 이슈, agent데몬관리라는 불편한 점이 존재
* 자동 배포환경이 쉬움
* 대부분이 [멱등성](https://ko.wikipedia.org/wiki/%EB%A9%B1%EB%93%B1%EB%B2%95%EC%B9%99)을 제공
* playbook
* ad-hoc 지원
* 병령 provisioning 지원
* [vagrant](https://www.vagrantup.com/) (hashiCorp)

> 멱등성(Idempotency)

* 여러번 적용해도 결과는 바뀌지 않음
* 바뀌는 것이 없으면 당연히 배포되어도 바뀌지 않음
* 바뀌는 부분이 있으면 그 부분만 반영
* shell, command, file module은 보장안됨

> Ansible에서의 멱등성이란?

여러번 ansible툴을 사용하더라도 동일한 결과가 나올수 있도록 제공되는 형태여야 한다. 매번 다른 결과가 나오거나 에러가 나온다면 멱등성이 보장되지 않는다. ansible툴은 거의 대부분 이 멱등성을 제공한다. 또한 멱등성 제공을 위해 조건절을 제공하고 있다. 예를 들면, 처음 ansible 스크릡트를 실행 후 다시 실행을 하면, 상황에 따라서는 파일이 append 될수 있으나 멱등성의 원칙은 언제나 실행해도 동일한 결과가 나와야 한다. 또한 파일 디렉토리를 생성 또는 삭제하는 `'create' 'remove'`와 같은 ansible 모듈을 실행 할 때 `'when'` 조건절을 이용할 수 있다.
