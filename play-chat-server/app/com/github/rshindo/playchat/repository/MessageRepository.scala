package com.github.rshindo.playchat.repository

import java.time.{Instant, ZoneId, ZoneOffset}
import java.util.Date
import javax.inject.Singleton

import com.github.rshindo.playchat.entity.Message
import com.github.rshindo.playchat.json.{Message => MessageJson}
import scalikejdbc.DB

/**
  * Created by shindo on 2016/12/05.
  */
@Singleton
class MessageRepository {

  def findByChannelId(channelId: Long): List[MessageJson] = {
    val messageList = DB readOnly { implicit session =>
      Message.findByChannelId(channelId)
    }
    messageList.map { m =>
      MessageJson(
        messageId = m.messageId,
        text = m.text,
        userId = m.userId,
        postedTime = Date.from(m.postedTime.atZone(ZoneId.systemDefault()).toInstant)
      )
    }
  }

}
