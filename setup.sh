#!/bin/sh

SET_UP_DB=/scripts/mongo.js 
for f in $SET_UP_DB
do
	echo "Files read is $f"
	mongo $f
done




