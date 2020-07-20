#!/usr/bin/env bash

PROTOC_GEN_TS_PATH="./node_modules/.bin/protoc-gen-ts"
IN_DIR="./protocol"
OUT_DIR="./gen"
OUT_DIR_TS="./gen/types"
PROTOCOL_BUILD_TMP="./protocol-build-tmp"

mkdir -p $OUT_DIR
mkdir -p $OUT_DIR_TS
mkdir -p $PROTOCOL_BUILD_TMP
cp -r $IN_DIR $PROTOCOL_BUILD_TMP

for dir in $(find "${PROTOCOL_BUILD_TMP}" -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq); do
  echo $(find "${dir}" -name '*.proto')
  sed -i -E "s/ \[ \(validate.rules(.*)\];/;/g" $(find "${dir}" -name '*.proto')
  sed -i -E "/validate.proto/d" $(find "${dir}" -name '*.proto')
  protoc --experimental_allow_proto3_optional \
  --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
  --js_out="import_style=commonjs,binary:${OUT_DIR}" \
  --ts_out="service=grpc-web:${OUT_DIR_TS}" \
  --proto_path=$PROTOCOL_BUILD_TMP \
  --proto_path=$(go env GOPATH)/src/github.com/envoyproxy/protoc-gen-validate \
  $(find "${dir}" -name '*.proto')
done
cp -R gen/protocol/* .
cp -R gen/types/protocol/* .
rm -r $OUT_DIR
rm -r $PROTOCOL_BUILD_TMP
