FROM ubuntu:14.04.2

MAINTAINER Siarhei Melnik <siarhei.m.a@gmail.com>

RUN  echo "deb http://archive.ubuntu.com/ubuntu trusty main universe\n" > /etc/apt/sources.list \
  && echo "deb http://archive.ubuntu.com/ubuntu trusty-updates main universe\n" >> /etc/apt/sources.list

RUN apt-get update -qqy && \
  apt-get install -qqy \
  git wget build-essential libssl-dev curl python

RUN apt-get update -qqy && \
  apt-get install -qqy \
    xvfb

RUN \
  wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
  echo "deb http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list && \
  apt-get update -qqy && \
  apt-get install -qqy google-chrome-stable

RUN \
  apt-get update -qqy && \
  apt-get install -qqy firefox

# Install node

RUN git clone https://github.com/creationix/nvm.git ~/.nvm

RUN /bin/bash -c "source ~/.nvm/nvm.sh && nvm install 0.12.2 && \
  nvm alias default 0.12.2"

RUN /bin/bash -c "ln -s ~/.nvm/versions/node/v0.12.2/bin/node /usr/bin/node && \
  ln -s ~/.nvm/versions/node/v0.12.2/bin/npm /usr/bin/npm"
