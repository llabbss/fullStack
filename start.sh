#! /bin/bash
cd ./react-app

echo "node: $(node -v)"
echo "npm: v$(npm -v)"

npm run build

cd ./react-app/server

npm run server