#!/bin/sh

echo "Building container for a production build..."
docker build \
--file Dockerfile.prod \
-t easymirror-platform-frontend:latest .