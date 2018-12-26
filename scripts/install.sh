#!/bin/bash

yum install -y gcc-c++ make
curl -sL https://rpm.nodesource.com/setup_9.x | sudo -E bash -
yum install nodejs

npm install forever -g