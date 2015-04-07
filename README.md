# build

sudo docker build -rm -t fd-base/fd .
sudo docker build -rm -t fd-karma/fd .

# run tests
sudo docker run -v $PWD:/opt/karma -i -t fd-karma/fd
