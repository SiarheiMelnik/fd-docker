FROM fdbrowsers/fd

MAINTAINER Siarhei Melnik <siarhei.m.a@gmail.com>

RUN mkdir -p /opt/karma

WORKDIR /opt/karma

RUN npm install -g karma-cli karma karma-mocha \
	karma-chai karma-chrome-launcher \
	karma-coverage karma-junit-reporter \
	karma-sinon karma-webpack \
	karma-firefox-launcher mocha chai

CMD xvfb-run --server-args='-screen 0, 1024x768x24' karma start
