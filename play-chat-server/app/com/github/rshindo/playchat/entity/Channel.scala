package com.github.rshindo.playchat.entity

import java.time.LocalDateTime

import scalikejdbc._
import scalikejdbc.jsr310._

/**
  * Created by shindo on 2016/12/18.
  */
case class Channel(channelId: Long, title: String, insertDate: LocalDateTime)

object Channel extends SQLSyntaxSupport[Channel] {

  override val tableName = "channels"
  override val columnNames = Seq("channel_id", "title", "insert_date")
  override val columns = Seq("channel_id", "title", "insert_date")

  def create(title: String)(implicit session: DBSession): Channel = {
    val insertDate = LocalDateTime.now();
    val id = withSQL {
      insertInto(Channel).namedValues(
        column.title -> title,
        column.insertDate -> insertDate
      )
    }.updateAndReturnGeneratedKey().apply()
    Channel(id, title, insertDate)
  }

  def findAll()(implicit session: DBSession): List[Channel] = {
    val c = Channel.syntax("c")
    sql"""SELECT ${c.result.channelId}, ${c.result.title}, ${c.result.insertDate}
         FROM ${Channel.as(c)}
       """
      .map { rs => Channel(c.resultName)(rs) }
      .list()
      .apply()
  }

  def apply(s: ResultName[Channel])(rs: WrappedResultSet): Channel = {
    Channel(
      channelId = rs.long(s.channelId),
      title = rs.string(s.title),
      insertDate = rs.localDateTime(s.insertDate)
    )
  }

}
