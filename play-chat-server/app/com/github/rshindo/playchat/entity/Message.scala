package com.github.rshindo.playchat.entity

import java.sql.Date

import org.joda.time
import org.joda.time.LocalDateTime
import scalikejdbc._

/**
  * Created by shindo on 2016/12/05.
  */
case class Message(messageId: Long,
                   text: String,
                   userId: String,
                   channelId: Long,
                   postedTime: time.LocalDateTime)

object Message extends SQLSyntaxSupport[Message] {

  override val tableName = "messages"
  override val columnNames = Seq("message_id", "text", "user_id", "channel_id", "posted_time")
  override val columns = Seq("message_id", "text", "user_id", "channel_id", "posted_time")

  def create(text: String, userId: String, channelId: Long)(implicit session: DBSession): Message = {
    val postedTime = LocalDateTime.now();
    val id = withSQL {
      insertInto(Message).namedValues(
        column.text -> text,
        column.userId -> userId,
        column.channelId -> channelId,
        column.postedTime -> postedTime
      )
    }.updateAndReturnGeneratedKey().apply()
    Message(id, text, userId, channelId, postedTime)
  }

  def findByChannelId(channelId: Long)(implicit session: DBSession): List[Message] = {
    val m = Message.syntax("m")
    sql"""SELECT ${m.result.messageId}, ${m.result.text},
          ${m.result.userId}, ${m.result.channelId}, ${m.result.postedTime}
         FROM ${Message.as(m)} WHERE channel_id = ${channelId}"""
      .map(rs => Message(m.resultName)(rs)).list().apply()
  }

  def apply(s: ResultName[Message])(rs: WrappedResultSet): Message = {
    Message(
      rs.long(s.messageId),
      rs.string(s.text),
      rs.string(s.userId),
      rs.long(s.channelId),
      rs.jodaLocalDateTime(s.postedTime))
  }

}