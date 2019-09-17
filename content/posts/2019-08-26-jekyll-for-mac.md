---
layout: post
title: Jekyll로 블로그 시작하기 위한 준비 for Mac
subtitle: Go language install
categories: troubleshooting
tags: [jekyll,mac]
author: atom
---

* content
{:toc}

## Permission문제에 직면하다

Mac OS 에서 bundler, jekyll을 설치할때 permission 문제가 발생하였다.

> ERROR:  While executing gem ... (Gem::FilePermissionError)
> You don't have write permissions for the /Library/Ruby/Gems/2.3.0  directory.

ubuntu에서는 비교적 간편하게 ruby를 설치한 후 bundler와 jekyll을 설치할 수 있었는데 Mac의 경우는 그대로 설치할 수가 없었다.  
우회하여 찾은 해결책은 local에 설치하는 방법이다.

일단 ruby의 버젼 정보를 찾고 신규 버젼을 설치 후 해당 루비버젼을 global로 설정하여 local에서 부를 수 있도록 하는 것이다.
일단 [공식사이트](https://jekyllrb-ko.github.io/docs/installation/)의 도움을 받아 Homebrew를 이용하여 상위버전 루비를 설치한다.

루비는 패키지 버젼에 따라 매우 까다롭게 굴기에 [github pages](https://pages.github.com/versions/)에 호스팅 할 환경 그대로 설치하는것이 좋다.

``` bash
$ /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
$ brew install ruby
$ ruby -v
ruby 2.5.3p105 (2018-10-18 revision 65156) [x86_64-darwin17]
```

rbenv를 설치한 후 결과를 확인

```bash
# rbenv 와 ruby-build 설치
$ brew install rbenv

# 자신의 쉘 환경에 rbenv 가 연동되도록 설정
$ rbenv init

# 설치결과 검사
$ curl -fsSL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-doctor | bash
Checking for `rbenv' in PATH: /usr/local/bin/rbenv
Checking for rbenv shims in PATH: OK
Checking `rbenv install' support: /usr/local/bin/rbenv-install (ruby-build 20190423)
Counting installed Ruby versions: 3 versions
Checking RubyGems settings: OK
Auditing installed plugins: OK
```

이제 원하는 환경을 사용할 수 있도록 rbenv를 global로 설정하여 해당 버젼을 쓸수있도록 수정하자.

```bash
$ rbenv install 2.5.3
ruby-build: use openssl from homebrew
Downloading ruby-2.5.3.tar.bz2...
-> https://cache.ruby-lang.org/pub/ruby/2.5/ruby-2.5.3.tar.bz2
Installing ruby-2.5.3...
ruby-build: use readline from homebrew
Installed ruby-2.5.3 to /usr/local/var/rbenv/versions/2.5.3
$ rbenv global 2.5.3
$ ruby -v
ruby 2.5.3p105 (2018-10-18 revision 65156) [x86_64-darwin17]
```

최종적을 Ruby Executable Path(EXECUTABLE DIRECTORY)를 확인한다

```bash
Junseokui-MacBook-Pro:blog junseokoh$ gem env
RubyGems Environment:
  - RUBYGEMS VERSION: 2.7.6
  - RUBY VERSION: 2.5.3 (2018-10-18 patchlevel 105) [x86_64-darwin17]
  - INSTALLATION DIRECTORY: /usr/local/var/rbenv/versions/2.5.3/lib/ruby/gems/2.5.0
  - USER INSTALLATION DIRECTORY: /Users/junseokoh/.gem/ruby/2.5.0
  - RUBY EXECUTABLE: /usr/local/var/rbenv/versions/2.5.3/bin/ruby
  - EXECUTABLE DIRECTORY: /usr/local/var/rbenv/versions/2.5.3/bin
  - SPEC CACHE DIRECTORY: /Users/junseokoh/.gem/specs
  - SYSTEM CONFIGURATION DIRECTORY: /usr/local/var/rbenv/versions/2.5.3/etc
  - RUBYGEMS PLATFORMS:
    - ruby
    - x86_64-darwin-17
  - GEM PATHS:
     - /usr/local/var/rbenv/versions/2.5.3/lib/ruby/gems/2.5.0
     - /Users/junseokoh/.gem/ruby/2.5.0
  - GEM CONFIGURATION:
     - :update_sources => true
     - :verbose => true
     - :backtrace => false
     - :bulk_threshold => 1000
  - REMOTE SOURCES:
     - https://rubygems.org/
  - SHELL PATH:
     - /usr/local/var/rbenv/versions/2.5.3/bin
     - /usr/local/Cellar/rbenv/1.1.2/libexec
     - /usr/local/var/rbenv/shims
     - /usr/local/bin
     - /usr/bin
     - /bin
     - /usr/sbin
     - /sbin
     - /Applications/Visual Studio Code.app/Contents/Resources/app/bin
     - /Applications/Visual Studio Code.app/Contents/Resources/app/bin
```

이제 bundle install 이 되는지 확인하고 serve로 실행해보자

```bash
$ gem install bundler jekyll
$ bundle install
$ bundle exec jekyll serve
 Auto-regeneration: enabled for '/Users/junseokoh/Documents/blog/'
    Server address: http://127.0.0.1:4000/
  Server running... press ctrl-c to stop.
```

여기까지 되었다면 설정이 완료된 것이다. 물론 파일이 없으면 마지막은 실행이 안될것이니 jekyll로 블로그 만들기를 참조하면 좋다. Remote server에서 작업하거나 다른 서버에서 열수 있게 하려면 host ip를 적어주는 것이 좋다.

```bash
$ bundler exec jekyll serve --host 0.0.0.0
 Auto-regeneration: enabled for '/Users/junseokoh/Documents/blog/'
    Server address: http://0.0.0.0:4000/
  Server running... press ctrl-c to stop.
```
