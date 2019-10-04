# Getting started with REST

*Goals:* Learn the basics of HTTP and REST by building a simple API.

*Prerequisites:* Exposure to Node.js and Express, basic understanding of client-server communication.

*References:*

- [Git Documentation](https://git-scm.com/doc)
- [Introduction to the Linux Terminal](https://www.digitalocean.com/community/tutorials/an-introduction-to-the-linux-terminal)
- [MDN: Getting Started with the Web](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web)

## Cloning the lab repository

*In a Web browser:*

These instructions assume that you are looking at the GitHub page for this repository within a Web browser, after accepting the assignment via GitHub Classroom.

1. From the GitHub page for this repository, click on the green "Clone or Download" button to reveal the repository URL.
2. Copy this URL.

*In a BASH terminal:*

1. Clone the Lab repository by entering the following command, replacing *PATH_TO_REPO* by pasting the URL you copied above. `git clone PATH_TO_REPO Lab06`
2. Enter the newly created repository folder by *changing your working directory* (i.e., "going into the folder"). `cd Lab06`
3. List the contents of your working directory to see that it contains this _README.md_ file as well as a directory named _server_. `ls -a`
4. Install our server's module dependencies (listed in _package.json_): `npm install`

## Define a data model for resources

A data model describes the structure and content of data resources. Thre are many approaches to defining such models. For now, we will start by creating a JavaScript object prototype that includes the attributes we want our model to have.

It's common practice to store the descriptions of models in a separate location.

- Create a subdirectory named _models_ underneath the _server_ folder of this project. In Git Bash, enter the command `mkdir server/models`.

Now let's assume we are creating a model to represent the players of our "dungeon crawler" game. Using Brackets or other IDE, create a new file named _player.js_ underneath your new _models_ directory.

Before writing any code, it is worthwhile to plan out your model. Discuss among your team, and using code comments write a description of a Player model that includes the purpose of the model as well as a list of what attributes you think you'll need. Among your attributes, be sure that you have a _name_ as well as _x_ and _y_ coordinates, though you should also have other data.

Once you have a plan for your Player model, implement the model as a JavaScript object prototype.

__Follow along with your instructor to write the necessary code.__

This file should now provide a good start upon which to build a rudimentary RESTful API.

## Outlining your controllers

Before we can build an API, we need more than just the models - we also need _controllers_ that we can use to manipulate the models. These controllers are objects that manage a set of operations the we can perform on our resources.

Create a new subdirectory named _controllers_ underneath the _server_ directory of your project using the following command: `mkdir server/controllers`.

Next, use Brackets (or your chosen IDE) to create a file named _playerController.js_ inside this new _controllers_ directory. Start off your file with the following code:

```javascript
// the "../models" portion of the path indicates where the
// model file is in relation to this controller file
player = require("../models/player.js");
```

The operations we will need are the four basic CRUD operations. At a minimum, we should be able to:

- create a new instance of our model
- read one instance of our model (or its attributes)
- update the attributes of any instance of our model
- delete an instance of our model

Initially, we will implement empty _stubs_ for each of these operations, which we will fill in later.

__Follow along with your instructor to write the necessary code.__

## Planning your routes

In a RESTful API, the URI paths that correspond to specific resources or collections are known as _routes_. Before we can actually write code to implement the server handling of these routes, we need to have a good idea of what the routes will be.

A place to start is to have the following for each model:

- a route that corresponds to a collection of multiple (all or some) instances
- a route that corresponds to each specific, single instance

In this activity, let's begin all of our API routes with the string "/api" and then add onto that. An important rule of thumb is that a collection should have a plural name in its route, and individual instances should be referenced within the collection using some unique identifier (or uniquely identifying criteria). For example, let's plan to make the following routes in this activity:

- `/api/players` for the collection of all player instances
- `/api/players/:name` for the player with particular (unique) name

Notice that in the second route we have a colon to start `:name`. This colon will not really be part of the route. Rather, it is used here to indicate that `name` is a _query parameter_ - it is not meant literally but will be replaced by a specific name in an actual route.

Now, using Brackets or your chosen IDE, let's create a new file named _routes.js_ inside of our _server_ directory. To define our routes using Express.js, we will rely on an object called a `Router`. We'll also need to load our controller module.

To do all this, start you file off with the following statements:

```javascript
express = require("express"); // loads the Express module
playerCtlr = require("./controllers/playerController.js");

router = express.Router(); // creates/gets a Router object
```

Next, we will set up our routes to handle several different kinds of requests. In fact, we want to handle up to four kinds of requests for each route, identified by the HTTP Method header. For example:

```javascript
router.route("/players")
  .get(playerCtlr.listActors)
```

__Follow along with your instructor to write the necessary code.__

Now that we have the routes connected to the controller, we start to see how the pieces fit together. Let's go back to our controller now and fill in the missing functionality.

__Follow along with your instructor to write the necessary code.__

Finally, we need to connect these routes to our application. In your _server.js_ file, uncomment the two lines that refer to the router. We are now ready to test our application.

Launch your server using the `node server/app.js` command in GitBash. The first most basic test is to load the whole collection of player resources by pointing your browser at the appropriate route on your server: `localhost:3000/api/players`.

You should see a list containing the data for all your player instances. If not, check your browsers Network and Console tabs in the developer tools. Ask your instructor for help if you cannot find the source of the problem.

# Deliverables

Be sure to commit and push all your work to complete this Lab. In class we will discuss and reinforce the concepts and techniques touched on here in this Lab, as well as others... including JavaScript Object Notation (JSON).

```
$ git add server
$ git commit -m "Completed Lab 6."
$ git push
```

## Future work

Try adding another model and the associated controller and routes. For example, maybe an _Item_ model or _Room_ model. Make sure that you understand how the pieces connect and how to do this again from scratch.

