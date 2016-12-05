# messages schema
# --- !Ups

CREATE TABLE messages (
    message_id bigint(20) NOT NULL AUTO_INCREMENT,
    text varchar(1000) NOT NULL,
    user_id varchar(20) NOT NULL,
    channel_id bigint(20) NOT NULL,
    posted_time datetime NOT NULL,
    PRIMARY KEY (message_id),
    FOREIGN KEY (channel_id)
        REFERENCES channels (channel_id)
        ON DELETE CASCADE
);

INSERT INTO messages (message_id, text, user_id, channel_id, posted_time) VALUES
(1, 'Hello!', 'John', 1, '2016-12-05 10:00'),
(2, 'What''s up ?', 'Linus', 1, '2016-12-05 10:15');

# --- !Downs

DROP TABLE messages;