#!/bin/sh
if [[ $1 = "" ]]; then
  echo "commit信息为空"
else
  git add .
  git commit -m $1
  git push
fi
