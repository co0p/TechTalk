A gentle introduction to angular 1.4.x
=======================================

presentation
------------

open the presentation/index.html and enjoy the ride.

demoApp
-------
The demo app contains most things someone would encounter in the wild
 - loading thirdparty libs (see app.js)
 - use constants (see app.js)
 - use directives (with/out isolated scope)
 - controller, service
 - promises, events using rootScope, ...

to run the app cd in demo folder and install dependencies
    npm install
    bower install

then run the app with:
    grunt serve

to run the backend stub server run:
    json-server database.json

You should see something like this:
![](https://github.com/co0p/techTalk/blob/master/presentation/demo.png)
