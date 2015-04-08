FROM fdbrowsers/fd

MAINTAINER Siarhei Melnik <siarhei.m.a@gmail.com>

RUN mkdir -p /opt/protractor

WORKDIR /opt/protractor

RUN npm install -g protractor

RUN webdriver-manager update

RUN webdriver-manager start

CMD xvfb-run --server-args='-screen 0, 1024x768x24' protractor
