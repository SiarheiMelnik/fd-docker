FROM fdbase/fd

MAINTAINER Siarhei Melnik <siarhei.m.a@gmail.com>

ADD http://mirrors.jenkins-ci.org/war/1.596/jenkins.war /opt/jenkins.war

RUN chmod 644 /opt/jenkins.war

ENV JENKINS_HOME /jenkins

ENTRYPOINT ["java", "-jar", "/opt/jenkins.war"]

EXPOSE 8080

CMD [""]
