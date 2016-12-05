# channels schema
# --- !Ups

CREATE TABLE channels (
    channel_id bigint(20) NOT NULL AUTO_INCREMENT,
    title varchar(200) NOT NULL,
    insert_date datetime,
    PRIMARY KEY (channel_id)
);

INSERT INTO channels(channel_id, title, insert_date) VALUES
(1, 'main', now()), (2, 'free space', now()), (3, 'developers', now());

# --- !Downs

DROP TABLE channels;
