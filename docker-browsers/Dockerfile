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

RUN /bin/bash -c "source ~/.nvm/nvm.sh && nvm install 0.10.38 && \
  nvm alias default 0.10.38"

RUN /bin/bash -c "unlink /usr/bin/node && \
	unlink /usr/bin/npm"

RUN /bin/bash -c "ln -s ~/.nvm/v0.10.38/bin/node /usr/bin/node && \
  ln -s ~/.nvm/v0.10.38/bin/npm /usr/bin/npm"
