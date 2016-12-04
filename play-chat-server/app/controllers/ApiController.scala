package controllers

import javax.inject.Singleton

import play.api.mvc.{Action, Controller}

/**
  * chat API endpoint
  *
  * Created by shindo on 2016/12/04.
  */
@Singleton
class ApiController extends Controller {

  /**
    * This is for test.
    * e.g. when call "/api/ping", then return "pong" as a plain text.
    * @return
    */
  def pong = Action {
    Ok("pong")
  }

}
