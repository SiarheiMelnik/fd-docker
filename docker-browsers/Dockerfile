FROM fdbase/fd

MAINTAINER Siarhei Melnik <siarhei.m.a@gmail.com>

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
