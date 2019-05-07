# Springboot Warehouse App for OpenLegacy ;)

This is a simple Angular app created with `ng` and `spring boot`.

The spring boot app provides a simple back end with some basic REST endpoints to demonstrate CRUD.

Minimum Requirements to run the app locally:

* git
* maven
* docker
* docker-compose

To run the app locally, in a semi-production fashion, use git to clone this project somewhere locally, then `cd` to the project root and run `mvn package`, and then run `docker-compose up -d` (this runs the docker containers detached from the console).  When your ready to tear down the app, run `docker-compose down`.  To build the app and run it all in one command, you can use `mvn package && docker-compose up -d`

To view the application, point your browser to: http://localhost:3000

To view the api docs, point your browser to http://localhost:3000/api-docs/swagger-ui.html 

*Please note the application uses an [ephemeral](https://www.merriam-webster.com/dictionary/ephemeral) (in-memory) database, so once the application is torn down your changes will be lost.
