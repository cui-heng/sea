#!/bin/bash

# install node_module
yarn

# build 
yarn build

# start server
pm2 start 