#!/bin/bash

sudo yum install -y gcc-c++ make
sudo curl -sL https://rpm.nodesource.com/setup_9.x | sudo -E bash -
sudo yum install nodejs

sudo npm install forever -g