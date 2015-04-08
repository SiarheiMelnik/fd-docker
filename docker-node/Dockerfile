FROM fdbase/fd

MAINTAINER Siarhei Melnik <siarhei.m.a@gmail.com>

RUN npm install -g pm2

COPY . /src

RUN cd /src; npm install

EXPOSE 3000

CMD ["node", "/src/app.js"]
