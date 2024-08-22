#!/bin/bash
set -euo pipefail

tag=`date +%Y%m%d%H`
name="sea"
image_name=$name:$tag

echo "Get the latest code"
git pull

# Build Docker image
echo "Build docker image"
docker build . -t  $image_name


# Stop and remove old container
echo "Remove old docker image"
docker rm -f $name

# Start new container
echo "Run docker image"
docker run -d --name $name -e TZ=Asia/Shanghai -v /etc/localtime:/etc/localtime --network host $image_name