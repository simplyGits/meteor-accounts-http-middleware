// Import Tinytest from the tinytest Meteor package.
import { Tinytest } from "meteor/tinytest";

// Import and rename a variable exported by meteor-accounts-http-middleware.js.
import { name as packageName } from "meteor/accounts-http-middleware";

// Write your tests here!
// Here is an example.
Tinytest.add('accounts-http-middleware - example', function (test) {
  test.equal(packageName, "accounts-http-middleware");
});
