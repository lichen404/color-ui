#!/usr/bin/env bash
rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m "deploy" &&
git remote add origin git@github.com:lichen404/color-ui.git &&
git push origin master:gh-pages -f &&
cd -
