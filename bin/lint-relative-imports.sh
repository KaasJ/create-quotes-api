#!/usr/bin/env bash

echo 'Checking for no relative imports...'

if [ "$#" -eq 0 ]; then
    echo "Found no files"
    exit
fi

if grep --color=always -r "from '../" "$@"; then
  echo "Found relative imports. Use absolute imports to continue."
  exit 1
else
  echo "Found no relative imports."
fi