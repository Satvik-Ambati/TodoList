#!/bin/bash

#sudo yum install -y gcc-c++ make
# sudo curl -sL https://rpm.nodesource.com/setup_9.x | sudo -E bash -
# sudo yum install nodejs
#sudo yum install nodejs npm --enablerepo=epel
#yum load-transaction /tmp/yum_save_tx.2018-12-26.18-41.fvQbtl.yumtx


# yum -y update
# curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
# nvm --version

# nvm install node
# sudo yum install gcc-c++ make

# node --version
# npm --version

# $PATH
# whereis npm 
# whereis node
#cp /root/.nvm/versions/node/v11.6.0/bin/npm /usr/bin/env
#sudo apt-get install npm


# set -e
# yum -y update
# # install general libraries like Java or ImageMagick
# yum -y install default-jre ImageMagick

# sudo curl -sL https://rpm.nodesource.com/setup_10.x | sudo -E bash -
# #yum -y install nodejs
# sudo yum -y install nodejs npm --enablerepo=epel
# node --version
# npm --version

# whereis node
# whereis npm

curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 4.4.5
node -e "console.log('Running Node.js ' + process.version)"
node --version
npm --version
sudo ln -s /usr/local/bin/npm /usr/bin/npm
cd /usr/local/projects/source
npm install forever
#  npm install -g forever
echo "Hi"


