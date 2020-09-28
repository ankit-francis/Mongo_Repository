FROM mongo:latest

RUN mkdir -p /data/db2 \
    && echo "dbpath = /data/db2" > /etc/mongodb.conf \
    && chown -R mongodb:mongodb /data/db2

COPY . /data/db2

COPY setup.sh /docker-entrypoint-initdb.d/

COPY mongo.js /scripts/


