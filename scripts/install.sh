#!/bin/bash


curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 4.4.5
node -e "console.log('Running Node.js ' + process.version)"
node --version
npm --version
sudo ln -s /usr/local/bin/npm /usr/bin/npm
#cd /usr/local/projects/source
npm install -g forever