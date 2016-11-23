# channels schema
# --- !Ups

CREATE TABLE channels (
    channel_id bigint(20) NOT NULL AUTO_INCREMENT,
    title varchar(200) NOT NULL,
    insert_date timestamp,
    PRIMARY KEY (channel_id)
);

# --- !Downs

DROP TABLE channels;
