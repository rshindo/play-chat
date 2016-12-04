# channels schema
# --- !Ups

CREATE TABLE channels (
    channel_id bigint(20) NOT NULL AUTO_INCREMENT,
    title varchar(200) NOT NULL,
    insert_date timestamp,
    PRIMARY KEY (channel_id)
);

insert into channels(channel_id, title, insert_date) values
(1, 'main', now()), (2, 'free space', now()), (3, 'developers');

# --- !Downs

DROP TABLE channels;
