#!/bin/bash

# copy deploy files to remote server
sudo scp -i ./ssh/id_rsa -r ../dist/. root@178.128.78.21:/var/www/evanwhite.info

