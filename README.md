# build

sudo docker build -rm -t fdbase/fd .

sudo docker build -rm -t fdkarma/fd .

# run tests
sudo docker run -v $PWD:/opt/karma -i -t fdkarma/fd
