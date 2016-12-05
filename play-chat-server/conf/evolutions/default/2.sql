# messages schema
# --- !Ups

CREATE TABLE messages (
    message_id bigint(20) NOT NULL AUTO_INCREMENT,
    text varchar(1000) NOT NULL,
    user_id bigint(20) NOT NULL,
    channel_id bigint(20) NOT NULL,
    posted_time timestamp NOT NULL,
    PRIMARY KEY (message_id),
    FOREIGN KEY (channel_id)
        REFERENCES channels (channel_id)
        ON DELETE CASCADE
);

# --- !Downs

DROP TABLE messages;