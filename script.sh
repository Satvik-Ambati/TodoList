#! /bin/bash

node app | newman run "test.postman_collection.json" | exit

