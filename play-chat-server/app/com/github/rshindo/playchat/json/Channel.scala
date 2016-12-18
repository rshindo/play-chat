package com.github.rshindo.playchat.json

import java.util.Date

import play.api.libs.functional.syntax._
import play.api.libs.json.{JsPath, Writes}

/**
  * Created by shindo on 2016/12/18.
  */
case class Channel(channelId: Long, title: String, insertDate: Date)

object Channel {

  implicit val f = Writes.dateWrites("yyyy-MM-dd HH:mm:ss")

  implicit val channelWrites: Writes[Channel] = (
    (JsPath \ "channelId").write[Long] and
      (JsPath \ "title").write[String] and
      (JsPath \ "insertDate").format(f)
    ) (unlift(Channel.unapply))
}
