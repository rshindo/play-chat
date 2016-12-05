package com.github.rshindo.playchat.entity

import java.sql.Date

import scalikejdbc._

/**
  * Created by shindo on 2016/12/05.
  */
case class Message(messageId: Long,
                   text: String,
                   userId: String,
                   channelId: Long,
                   postedTime: Date)

object Message extends SQLSyntaxSupport[Message] {

  override val tableName = "messages"
  override val columnNames = Seq("message_id", "text", "user_id", "channel_id", "posted_time")

  def create(text: String, userId: String, channelId: Long)(implicit session: DBSession): Message = {
    val postedTime = new Date(new java.util.Date().getTime)
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
    withSQL {
      selectFrom(Message as m).where.eq(m.channelId, channelId)
    }
      .map { rs =>
        Message(
          messageId = rs.get(m.resultName.messageId),
          text = rs.get(m.resultName.text),
          userId = rs.get(m.resultName.userId),
          channelId = rs.get(m.resultName.channelId),
          postedTime = rs.get(m.resultName.postedTime)
        )
      }.list().apply()
  }

}