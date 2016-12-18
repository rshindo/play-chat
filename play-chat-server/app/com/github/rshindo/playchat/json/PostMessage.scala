package com.github.rshindo.playchat.json

import play.api.libs.functional.syntax._
import play.api.libs.json.{JsPath, Reads}

/**
  * Created by shindo on 2016/12/18.
  */
case class PostMessage(text: String, userId: String, channelId: Long)

object PostMessage {

  implicit val postMessageReads: Reads[PostMessage] = (
    (JsPath \ "text").read[String] and
      (JsPath \ "userId").read[String] and
      (JsPath \ "channelId").read[Long]
    )(PostMessage.apply _)

}
