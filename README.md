# Angular Grid Example #

## Getting Started

To get you started you can simply clone the angular-grid-example repository and install the dependencies:

### Prerequisites

[http://git-scm.com/](http://git-scm.com/).

[http://nodejs.org/](http://nodejs.org/).

[http://npmjs.com/](http://npmjs.com/).


### Clone agvarea-app

Clone porject
```sh
   git clone git@gitlab.com:agvarea/agvarea-app.git
```

Move to folder of project
```sh
   cd agvarea-app/
```
### Install dependecies


We have two kinds of dependencies in this project: tools and angular framework code.  The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```sh
   npm install
```

Behind the scenes this will also call `bower install`.  You should find that you have two new
folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/js/public` - contains the angular framework files

*Note that the `public` folder was installed in the app folder makes
it easier to serve the files by a webserver.*

### Run the Application

```
grunt
```

Now browse to the app at `http://localhost:3000/`.

### Run unit tests

```
grunt tests
```

After run unit tests we can see a new folder:
```
covergae/
```

If we open `index.html` we can see an interactive coverage report of the app.

## Directory Layout

```
agvarea-app/                        --> all project files
	app/                            --> all of the source files for the application
		js/                         --> all files of the app (template and logic)
			controllers/            --> all controllers
				example.controller.js
				example2.controller.js
                ...
			directives/             --> all the directives
				example.directive.js
				example2.directive.js
                ...
			services/               --> all services
				example.service.js
                example2.service.js
                ...
		css/                        --> all css files
			example.style.css    
			example1.style.css
            ...		
		fonts/                      --> all fonts files
			example.font.eot
            example2.font.eot
			...
		imgages/                    --> all image files
			favicon/                --> favicon icon
			favicon.icon 		    --> favicon icon
			...
		app.js                      --> main application module
		config.js                   --> main config file of app (load dependencies)
		index.html                  --> app layout file (the main html template file of the app)
	node_modules/                   --> all npm dependencies
		...
	unit-test/                      --> all unit-test files
		example.controller.test.js  
		example2.controller.test.js
        example.service.test.js  
		...
	performance-test/               --> performance test files
	    Test.html
	    Test.js
	    Answer.js
	    Answer.2.js
	    ...
	coverage/                       --> coverage report
	    ...
	.bowerrc        --> bower configuration
	.gitignore      --> list of folders and files that are ignored by git
	.jshintrc       --> jshint config file
	bower.json      --> declarations of bower dependencies (only client-side)
	Gruntfile.js    --> declarations of grunt tasks
	package.json    --> declarations of tools needed by the projects (npm)
	README.md       --> this file
	server.js       --> config file for running the server with node and express
```

## Grunt Tasks

`default`      --> concurrent:default (Run Server)

`lint`         --> jshint (Static Code Analysis)

`tests`        --> karma:unitWithAuto (Run Unit Tests)

`less-compile` --> less:compile (Compile less files)


## Dependencies

### Basic Dependencies

[git](http://git-scm.com/).
[npm](https://www.npmjs.org/).
[bower](http://bower.io/).
[grunt](http://gruntjs.com/).
[node](http://nodejs.org/).
[express](http://expressjs.com/).
