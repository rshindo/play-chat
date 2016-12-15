package com.github.rshindo.playchat.json

import java.util.Date

import play.api.libs.functional.syntax._
import play.api.libs.json.{JsPath, Writes}

/**
  * Created by shindo on 2016/12/05.
  */
case class Message(messageId: Long,
                   text: String,
                   userId: String,
                   postedTime: Date)

object Message {

  implicit val f = Writes.dateWrites("yyyy-MM-dd HH:mm:ss")

  implicit val messageWrites: Writes[Message] = (
    (JsPath \ "messageId").write[Long] and
      (JsPath \ "text").write[String] and
      (JsPath \ "userId").write[String] and
      (JsPath \ "postedTime").format(f)
    )(unlift(Message.unapply))

}
