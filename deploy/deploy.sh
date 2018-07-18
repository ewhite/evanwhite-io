#!/bin/bash
echo "Building updated website..."
yarn build
echo "Build complete. Deploying..."

echo "Copying /deploy folder to server."
echo "Please provide the passphrase for the relevant private key."
# copy deploy files to remote server
scp -i ./ssh/id_rsa -r ../dist/. root@178.128.78.21:/var/www/evanwhite.info
echo "Finished copying /deploy."

echo "Deploy complete. Website updated at: https://www.evanwhite.info"