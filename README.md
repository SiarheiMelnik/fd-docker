# build

sudo docker build --rm -t fdbase/fd .

sudo docker build --rm -t fdjenkins/fd .

sudo docker build --rm -t fdmongo/fd .

sudo docker build --rm -t fdbrowsers/fd .

sudo docker build --rm -t fdkarma/fd .

sudo docker build --rm -t fdprotractor/fd .

# run tests
sudo docker run -v $PWD:/opt/karma -i -t fdkarma/fd

#without sudo

Add the docker group if it doesn't already exist.

sudo groupadd docker

Add the connected user "${USER}" to the docker group.

sudo gpasswd -a ${USER} docker

Restart the Docker daemon

sudo service docker restart

Logout
