#!/usr/bin/env bash

docker build -t app-node .
docker run -t -v $(dirname $(pwd))"/app":/home/app -p 9090:9090 app-node