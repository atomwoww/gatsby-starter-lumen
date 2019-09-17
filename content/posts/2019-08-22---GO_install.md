---
layout: post
title: Go lang Getting Started
subtitle: Go language install
categories: program
tags: [go,linux]
author: atom
---
## Linux, macOS, and FreeBSD tarballs

## Download the archive and extract it into /usr/local, creating a Go tree in /usr/local/go. For example

```bash
tar -C /usr/local -xzf go$VERSION.$OS-$ARCH.tar.gz
```

Choose the [archive file](https://golang.org/dl/) appropriate for your installation. For instance, if you are installing Go version 1.2.1 for 64-bit x86 on Linux, the archive you want is called go1.2.1.linux-amd64.tar.gz.

(Typically these commands must be run as root or through sudo.)

Add /usr/local/go/bin to the PATH environment variable. You can do this by adding this line to your /etc/profile (for a system-wide installation) or $HOME/.profile:

```bash
export PATH=$PATH:/usr/local/go/bin
```

**Note:** changes made to a profile file may not apply until the next time you log into your computer. To apply the changes immediately, just run the shell commands directly or execute them from the profile using a command such as source $HOME/.profile.
