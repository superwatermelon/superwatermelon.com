Potential options for application langs:

* Node.js / io.js + Express + Browserify is the most simple and natural option
  but boring as am already doing this for the stuartw.io blog.
* Clojure + Ring + ClojureScript could be a fun option.
* Scala + Akka + Play is a bit overkill for this project.
* Python + Tornado isn't a particularly good fit.
* PHP + Silex would be boring for me as I've done it to death.

Requirements:

* Mainly front-end content
* Contact form
* Back-end admin (separate app)
  * List contact requests

Many writes, some reads, minimal updates, minimal relations which seems to
point to some basic document stores.

Datasources:

* MongoDB is the most simple and natural option, but again may be a bit of a
  boring option.
* MySQL / MariaDB is a boring option and not particularly well suited to the
  task.
* Cassandra would definitely be overkill for this application.
* PostgreSQL would be more interesting but is a bit overkill.
* Event Store might be an interesting option, non-starter as it is written in
  C#. This can be run using Mono and they seem to support that, however, would
  rather use a Linux based technology. 

Prototype in Clojure + ClojureScript

