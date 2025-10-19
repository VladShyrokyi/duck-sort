#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$ROOT_DIR/web"

echo "Running build..."
npm run build:prod

echo "Clearing ../example/web..."
rm -rf ../example/web/*

echo "Copying dist to ../example/web..."
cp -r dist/* ../example/web

echo "Deploy finished."