= Device Server


This is a simple server for:
a) crowdosourced location-bound devices*
b) proxying routing requests for the demo page to openrouteservice **


= How to run:

1. install node dependencies

   $> npm install

2. create database**

   $> sqlite3 <path/to/db/file>
   $sqlite> .read ./db/createDb.sql

3. Create config file

   $> cp config.js.sample config.js
   $> cat config.js
   
4. Start server

   $> node index
   listening on port 3000



= Notes

* Database foundation fetched from the osmcamera project
  (https://github.com/khris78/osmcamera)

** if you plan to use the demo page, make sure to replace the
   openrouteservice key in config.js

*** Make sure you're running the correct sqlite3 binary:

	$> which sqlite3.

Should print /usr/bin/sqlite3 or equivalent. If you've added the
android sdk to your path, that might get called instead. They're both
ok, but the one packed with the android sdk has readline support
disabled, so htting the arrow keys will just print control chars to
the terminal and will be more frustrating to use.

