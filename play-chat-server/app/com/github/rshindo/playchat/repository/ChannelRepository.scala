package com.github.rshindo.playchat.repository

import java.time.ZoneId
import java.util.Date
import javax.inject.Singleton

import com.github.rshindo.playchat.entity.Channel
import com.github.rshindo.playchat.json.{Channel => ChannelJson}
import scalikejdbc.DB

/**
  * Created by shindo on 2016/12/18.
  */
@Singleton
class ChannelRepository {

  def findAll(): List[ChannelJson] = {
    val channelList = DB readOnly { implicit session =>
      Channel.findAll()
    }
    channelList.map { c => ChannelJson(
      channelId = c.channelId,
      title = c.title,
      insertDate = Date.from(c.insertDate.atZone(ZoneId.systemDefault()).toInstant)
    )
    }
  }

  def create(title: String): ChannelJson = {
    val channel = DB autoCommit { implicit session =>
      Channel.create(title)
    }
    ChannelJson(
      channelId = channel.channelId,
      title = channel.title,
      insertDate = Date.from(channel.insertDate.atZone(ZoneId.systemDefault()).toInstant)
    )
  }

}
