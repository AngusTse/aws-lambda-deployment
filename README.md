# aws-lambda-deployment

## Test

### How to write lambda unit test
https://medium.com/vandium-software/unit-testing-aws-lambda-functions-in-node-js-7ad6c8f5000

### Install
`npm install lambda-tester --save-dev`

`npm install mocha --save-dev`

`npm install chai --save-dev`

## Deploy with apex

http://apex.run/

`curl https://raw.githubusercontent.com/apex/apex/master/install.sh | sh`

### Install aws-cli

```
$ curl "https://s3.amazonaws.com/aws-cli/awscli-bundle.zip" -o "awscli-bundle.zip"
$ unzip awscli-bundle.zip
$ ./awscli-bundle/install -b ~/bin/aws
$ echo $PATH | grep ~/bin     // See if $PATH contains ~/bin (output will be empty if it doesn't)
$ export PATH=~/bin:$PATH     // Add ~/bin to $PATH if necessary
```
http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html

`apex --profile demo deploy`

`vim project.json`

`apex init`

`apex deploy`

`apex invoke hello`

## Deploy with travisCI

https://github.com/unfoldingWord-dev/door43.org/wiki/Deploying-to-AWS-from-Travis-CI
