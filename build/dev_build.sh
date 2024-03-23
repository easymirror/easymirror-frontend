#!/bin/sh

echo "Building container for dev build..."
docker-compose -f ./docker-compose.yml up -d 