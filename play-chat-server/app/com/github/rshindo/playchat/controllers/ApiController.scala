package controllers

import javax.inject.{Inject, Singleton}

import com.github.rshindo.playchat.repository.MessageRepository
import play.api.libs.json.Json
import play.api.mvc.{Action, Controller}

/**
  * chat API endpoint
  *
  * Created by shindo on 2016/12/04.
  */
@Singleton
class ApiController @Inject()(messageRepository: MessageRepository) extends Controller {

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

}
