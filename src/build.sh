#!/usr/bin/env bash
pushd ./en
docker run --rm --name slate -v $(pwd)/build:/srv/slate/build -v $(pwd)/source:/srv/slate/source slatedocs/slate build
pushd ../..
mv build/* ../../
