FROM mongo:latest

COPY setup.sh /docker-entrypoint-initdb.d/

COPY mongo.js /scripts/


