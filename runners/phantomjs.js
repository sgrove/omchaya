#!/usr/bin/env phantomjs

// reusable phantomjs script for running clojurescript.test tests
// see http://github.com/cemerick/clojurescript.test for more info

var p = require('webpage').create();
var sys = require('system');

p.settings.XSSAuditingEnabled=false;
p.settings.localToRemoteUrlAccessEnabled=true;
p.settings.webSecurityEnabled=false;

for (var i = 1; i < sys.args.length; i++) {
  p.injectJs(sys.args[i]);
}

p.onConsoleMessage = function (x) {
  var line = x;
  if (line !== "[NEWLINE]") {
    console.log(line.replace(/\[NEWLINE\]/g, "\n"));
  }
};

p.evaluate(function () {
  cemerick.cljs.test.set_print_fn_BANG_(function(x) {
    console.log(x.replace(/\n/g, "[NEWLINE]")); // since console.log *itself* adds a newline
  });
});

var success = p.evaluate(function () {
  var results = cemerick.cljs.test.run_all_tests();
  console.log(results);
  return cemerick.cljs.test.successful_QMARK_(results);
});

phantom.exit(success ? 0 : 1);
