$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "Checking/Verifying HomgePage functions and elements",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements",
  "keyword": "Feature"
});
formatter.before({
  "duration": 7567045359,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify home page title",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-home-page-title",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I should see the pagetitle as \"Sogeti Book Shop1\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "HomePage",
      "offset": 9
    }
  ],
  "location": "stepDefHomePage.i_am_on(String)"
});
formatter.result({
  "duration": 2538344546,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sogeti Book Shop1",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 31835593,
  "error_message": "junit.framework.AssertionFailedError\n\tat junit.framework.Assert.fail(Assert.java:55)\n\tat junit.framework.Assert.assertTrue(Assert.java:22)\n\tat junit.framework.Assert.assertTrue(Assert.java:31)\n\tat StepDefinitions.stepDefHomePage.i_should_see_the_pagetitle_as(stepDefHomePage.java:26)\n\tat ✽.Then I should see the pagetitle as \"Sogeti Book Shop1\"(HomePage.feature:7)\n",
  "status": "failed"
});
formatter.after({
  "duration": 864088120,
  "status": "passed"
});
});