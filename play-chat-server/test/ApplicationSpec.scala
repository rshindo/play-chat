import org.scalatestplus.play._
import play.api.test._
import play.api.test.Helpers._

/**
 * Add your spec here.
 * You can mock out a whole application including requests, plugins etc.
 * For more information, consult the wiki.
 */
class ApplicationSpec extends PlaySpec with OneAppPerTest {

  "Routes" should {

    "send 404 on a bad request" in  {
      route(app, FakeRequest(GET, "/boum")).map(status(_)) mustBe Some(NOT_FOUND)
    }

  }

  "ApiController" should {

    "return pong" in {
      val response = route(app, FakeRequest(GET, "/api/ping")).get
      status(response) mustBe OK
      contentType(response) mustBe Some("text/plain")
      contentAsString(response) must equal("pong")
    }

  }

}
