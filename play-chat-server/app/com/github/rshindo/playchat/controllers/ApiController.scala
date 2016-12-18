package controllers

import javax.inject.{Inject, Singleton}

import com.github.rshindo.playchat.repository.{ChannelRepository, MessageRepository}
import play.api.libs.json.{JsValue, Json}
import play.api.mvc.{Action, Controller}

/**
  * chat API endpoint
  *
  * Created by shindo on 2016/12/04.
  */
@Singleton
class ApiController @Inject()(messageRepository: MessageRepository,
                              channelRepository: ChannelRepository) extends Controller {

  /**
    * This is for test.
    * e.g. when call "/api/ping", then return "pong" as a plain text.
    *
    * @return
    */
  def pong = Action {
    Ok("pong")
  }

  /**
    * fetch messages posted in the requested channel
    *
    * @param channelId
    * @return
    */
  def fetchMessages(channelId: Long) = Action {
    val json = Json.toJson(messageRepository.findByChannelId(channelId))
    Ok(json)
  }

  def postMessage(channelId: Long) = Action { request =>
    val jsonOpt = request.body.asJson
    jsonOpt match {
      case Some(json) =>
        val text = (json \ "text").as[String]
        val userId = (json \ "userId").as[String]
        messageRepository.save(text, userId, channelId)
        Ok
      case None =>
        BadRequest
    }
  }

  def fetchChannels() = Action {
    val json = Json.toJson(channelRepository.findAll())
    Ok(json)
  }

}
