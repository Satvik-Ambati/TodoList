#!/bin/bash

sudo yum install -y gcc-c++ make
sudo curl -sL https://rpm.nodesource.com/setup_9.x | sudo -E bash -
sudo yum install nodejs

yum load-transaction /tmp/yum_save_tx.2018-12-26.18-41.fvQbtl.yumtx
sudo apt-get install npm
sudo npm install forever -g