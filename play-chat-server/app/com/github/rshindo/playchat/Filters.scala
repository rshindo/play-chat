import javax.inject._

import play.api._
import play.api.http.HttpFilters

/**
  *
  * @param env
  */
@Singleton
class Filters @Inject() (
  env: Environment) extends HttpFilters {

  override val filters = {
    Seq.empty
  }

}
