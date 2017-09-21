$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HomePage.feature");
formatter.feature({
  "line": 1,
  "name": "Checking/Verifying HomgePage functions and elements",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements",
  "keyword": "Feature"
});
formatter.before({
  "duration": 19838884138,
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
  "name": "I should see the pagetitle as \"Sogeti Book Shop\"",
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
  "duration": 6659544798,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sogeti Book Shop",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 191359854,
  "status": "passed"
});
formatter.after({
  "duration": 1891504145,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 10,
  "name": "Verify ALL home page Links leads to the correct page",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#(Except for nav bar as it has mousehover function)"
    }
  ],
  "line": 13,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on \"\u003cLink\u003e\" (using xpath \"\u003cxpath\u003e\")",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the pagetitle as \"\u003cTitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 17,
  "name": "",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;",
  "rows": [
    {
      "cells": [
        "link",
        "xpath",
        "Title"
      ],
      "line": 19,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;1"
    },
    {
      "cells": [
        "1st Carousel",
        "//*[@id\u003d\u0027carousel\u0027]/ul/li[1]/a/figure/img",
        "The App Effect"
      ],
      "line": 20,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;2"
    },
    {
      "cells": [
        "2nd Carousel",
        "//*[@id\u003d\u0027carousel\u0027]/ul/li[2]/a/figure/img",
        "Collaboration in the Cloud"
      ],
      "line": 21,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;3"
    },
    {
      "cells": [
        "3rd Carousel",
        "//*[@id\u003d\u0027carousel\u0027]/ul/li[3]/a/figure/img",
        "Neil\u0027s Quest for Quality"
      ],
      "line": 22,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;4"
    },
    {
      "cells": [
        "Contact us",
        "//*[@id\u003d\u0027contact-link\u0027]/a",
        "Contact"
      ],
      "line": 23,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;5"
    },
    {
      "cells": [
        "Sign in",
        "//*[@id\u003d\u0027_desktop_user_info\u0027]/div/a/i",
        "Login"
      ],
      "line": 24,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;6"
    },
    {
      "cells": [
        "ict Logo",
        "//*[@id\u003d\u0027_desktop_logo\u0027]/a/img",
        "Sogeti Book Shop"
      ],
      "line": 25,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;7"
    },
    {
      "cells": [
        "PopProdLink1",
        "//*[@id\u003d\u0027content\u0027]/section/div/article[1]/div/a/img",
        "Neil\u0027s Quest for Quality"
      ],
      "line": 26,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;8"
    },
    {
      "cells": [
        "PopProdLink2",
        "//*[@id\u003d\u0027content\u0027]/section/div/article[2]/div/a/img",
        "Quality Supervision"
      ],
      "line": 27,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;9"
    },
    {
      "cells": [
        "PopProdLink3",
        "//*[@id\u003d\u0027content\u0027]/section/div/article[3]/div/a/img",
        "The App Effect"
      ],
      "line": 28,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;10"
    },
    {
      "cells": [
        "PopProdLink4",
        "//*[@id\u003d\u0027content\u0027]/section/div/article[4]/div/a/img",
        "Dark Side of Social Media"
      ],
      "line": 29,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;11"
    },
    {
      "cells": [
        "PopProdLink5",
        "//*[@id\u003d\u0027content\u0027]/section/div/article[5]/div/a/img",
        "IoTMap"
      ],
      "line": 30,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;12"
    },
    {
      "cells": [
        "PopProdLink6",
        "//*[@id\u003d\u0027content\u0027]/section/div/article[6]/div/a/img",
        "Virtual Concept"
      ],
      "line": 31,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;13"
    },
    {
      "cells": [
        "PopProdLink7",
        "//*[@id\u003d\u0027content\u0027]/section/div/article[7]/div/a/img",
        "Open for Business"
      ],
      "line": 32,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;14"
    },
    {
      "cells": [
        "PopProdLink8",
        "//*[@id\u003d\u0027content\u0027]/section/div/article[8]/div/a/img",
        "VINT Report Game"
      ],
      "line": 33,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;15"
    },
    {
      "cells": [
        "AllProductLink",
        "//*[@id\u003d\u0027content\u0027]/section/a",
        "Home"
      ],
      "line": 34,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;16"
    },
    {
      "cells": [
        "BksCollectdImg",
        "//*[@id\u003d\u0027content\u0027]/a/img",
        "Welcome to ICT Books"
      ],
      "line": 35,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;17"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 16388486295,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify ALL home page Links leads to the correct page",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#(Except for nav bar as it has mousehover function)"
    }
  ],
  "line": 13,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on \"\u003cLink\u003e\" (using xpath \"//*[@id\u003d\u0027carousel\u0027]/ul/li[1]/a/figure/img\")",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the pagetitle as \"The App Effect\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 5430225482,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLink\u003e",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027carousel\u0027]/ul/li[1]/a/figure/img",
      "offset": 34
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 6248983353,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The App Effect",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 416810582,
  "status": "passed"
});
formatter.after({
  "duration": 2388365991,
  "status": "passed"
});
formatter.before({
  "duration": 15324463690,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify ALL home page Links leads to the correct page",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#(Except for nav bar as it has mousehover function)"
    }
  ],
  "line": 13,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on \"\u003cLink\u003e\" (using xpath \"//*[@id\u003d\u0027carousel\u0027]/ul/li[2]/a/figure/img\")",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the pagetitle as \"Collaboration in the Cloud\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 5804114150,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLink\u003e",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027carousel\u0027]/ul/li[2]/a/figure/img",
      "offset": 34
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 6867295134,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Collaboration in the Cloud",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 99979764,
  "status": "passed"
});
formatter.after({
  "duration": 1722509906,
  "status": "passed"
});
formatter.before({
  "duration": 15354382689,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify ALL home page Links leads to the correct page",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#(Except for nav bar as it has mousehover function)"
    }
  ],
  "line": 13,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on \"\u003cLink\u003e\" (using xpath \"//*[@id\u003d\u0027carousel\u0027]/ul/li[3]/a/figure/img\")",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the pagetitle as \"Neil\u0027s Quest for Quality\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 5553624948,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLink\u003e",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027carousel\u0027]/ul/li[3]/a/figure/img",
      "offset": 34
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 10137848451,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Neil\u0027s Quest for Quality",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 136557412,
  "status": "passed"
});
formatter.after({
  "duration": 1862276093,
  "status": "passed"
});
formatter.before({
  "duration": 14426548046,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify ALL home page Links leads to the correct page",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#(Except for nav bar as it has mousehover function)"
    }
  ],
  "line": 13,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on \"\u003cLink\u003e\" (using xpath \"//*[@id\u003d\u0027contact-link\u0027]/a\")",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the pagetitle as \"Contact\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 6120238495,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLink\u003e",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027contact-link\u0027]/a",
      "offset": 34
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 4416214458,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Contact",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 128835230,
  "status": "passed"
});
formatter.after({
  "duration": 1889089462,
  "status": "passed"
});
formatter.before({
  "duration": 14810603010,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify ALL home page Links leads to the correct page",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#(Except for nav bar as it has mousehover function)"
    }
  ],
  "line": 13,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on \"\u003cLink\u003e\" (using xpath \"//*[@id\u003d\u0027_desktop_user_info\u0027]/div/a/i\")",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the pagetitle as \"Login\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 6482751855,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLink\u003e",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027_desktop_user_info\u0027]/div/a/i",
      "offset": 34
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 7514253350,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 571500582,
  "status": "passed"
});
formatter.after({
  "duration": 1938156259,
  "status": "passed"
});
formatter.before({
  "duration": 15578534602,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify ALL home page Links leads to the correct page",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#(Except for nav bar as it has mousehover function)"
    }
  ],
  "line": 13,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on \"\u003cLink\u003e\" (using xpath \"//*[@id\u003d\u0027_desktop_logo\u0027]/a/img\")",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the pagetitle as \"Sogeti Book Shop\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 5268296354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLink\u003e",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027_desktop_logo\u0027]/a/img",
      "offset": 34
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 4749139042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sogeti Book Shop",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 39234030,
  "status": "passed"
});
formatter.after({
  "duration": 1415581467,
  "status": "passed"
});
formatter.before({
  "duration": 18915463968,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Verify ALL home page Links leads to the correct page",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#(Except for nav bar as it has mousehover function)"
    }
  ],
  "line": 13,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on \"\u003cLink\u003e\" (using xpath \"//*[@id\u003d\u0027content\u0027]/section/div/article[1]/div/a/img\")",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the pagetitle as \"Neil\u0027s Quest for Quality\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 3832334007,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLink\u003e",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027content\u0027]/section/div/article[1]/div/a/img",
      "offset": 34
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 3860630768,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Neil\u0027s Quest for Quality",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 89652771,
  "status": "passed"
});
formatter.after({
  "duration": 1798298665,
  "status": "passed"
});
formatter.before({
  "duration": 17945003719,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Verify ALL home page Links leads to the correct page",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#(Except for nav bar as it has mousehover function)"
    }
  ],
  "line": 13,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on \"\u003cLink\u003e\" (using xpath \"//*[@id\u003d\u0027content\u0027]/section/div/article[2]/div/a/img\")",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the pagetitle as \"Quality Supervision\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 7141559848,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLink\u003e",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027content\u0027]/section/div/article[2]/div/a/img",
      "offset": 34
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 6303084609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Quality Supervision",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 75286893,
  "status": "passed"
});
formatter.after({
  "duration": 1904378367,
  "status": "passed"
});
formatter.before({
  "duration": 20265720515,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify ALL home page Links leads to the correct page",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;10",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#(Except for nav bar as it has mousehover function)"
    }
  ],
  "line": 13,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on \"\u003cLink\u003e\" (using xpath \"//*[@id\u003d\u0027content\u0027]/section/div/article[3]/div/a/img\")",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the pagetitle as \"The App Effect\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 6585519984,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLink\u003e",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027content\u0027]/section/div/article[3]/div/a/img",
      "offset": 34
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 3891511340,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "The App Effect",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 83709607,
  "status": "passed"
});
formatter.after({
  "duration": 1776761096,
  "status": "passed"
});
formatter.before({
  "duration": 14363260982,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify ALL home page Links leads to the correct page",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;11",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#(Except for nav bar as it has mousehover function)"
    }
  ],
  "line": 13,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on \"\u003cLink\u003e\" (using xpath \"//*[@id\u003d\u0027content\u0027]/section/div/article[4]/div/a/img\")",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the pagetitle as \"Dark Side of Social Media\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 4932103728,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLink\u003e",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027content\u0027]/section/div/article[4]/div/a/img",
      "offset": 34
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 5924129591,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dark Side of Social Media",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 266575059,
  "status": "passed"
});
formatter.after({
  "duration": 1894012093,
  "status": "passed"
});
formatter.before({
  "duration": 15804359774,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify ALL home page Links leads to the correct page",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;12",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#(Except for nav bar as it has mousehover function)"
    }
  ],
  "line": 13,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on \"\u003cLink\u003e\" (using xpath \"//*[@id\u003d\u0027content\u0027]/section/div/article[5]/div/a/img\")",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the pagetitle as \"IoTMap\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 5443107966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLink\u003e",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027content\u0027]/section/div/article[5]/div/a/img",
      "offset": 34
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 4703059015,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "IoTMap",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 253513623,
  "status": "passed"
});
formatter.after({
  "duration": 1488275684,
  "status": "passed"
});
formatter.before({
  "duration": 15125339723,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify ALL home page Links leads to the correct page",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;13",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#(Except for nav bar as it has mousehover function)"
    }
  ],
  "line": 13,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on \"\u003cLink\u003e\" (using xpath \"//*[@id\u003d\u0027content\u0027]/section/div/article[6]/div/a/img\")",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the pagetitle as \"Virtual Concept\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 5223175492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLink\u003e",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027content\u0027]/section/div/article[6]/div/a/img",
      "offset": 34
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 5745518776,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Virtual Concept",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 58902502,
  "status": "passed"
});
formatter.after({
  "duration": 1418009564,
  "status": "passed"
});
formatter.before({
  "duration": 15628080460,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Verify ALL home page Links leads to the correct page",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;14",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#(Except for nav bar as it has mousehover function)"
    }
  ],
  "line": 13,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on \"\u003cLink\u003e\" (using xpath \"//*[@id\u003d\u0027content\u0027]/section/div/article[7]/div/a/img\")",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the pagetitle as \"Open for Business\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 4833390242,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLink\u003e",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027content\u0027]/section/div/article[7]/div/a/img",
      "offset": 34
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 5440750306,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Open for Business",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 48055443,
  "status": "passed"
});
formatter.after({
  "duration": 1354177979,
  "status": "passed"
});
formatter.before({
  "duration": 14598293108,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Verify ALL home page Links leads to the correct page",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;15",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#(Except for nav bar as it has mousehover function)"
    }
  ],
  "line": 13,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on \"\u003cLink\u003e\" (using xpath \"//*[@id\u003d\u0027content\u0027]/section/div/article[8]/div/a/img\")",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the pagetitle as \"VINT Report Game\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 5028651488,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLink\u003e",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027content\u0027]/section/div/article[8]/div/a/img",
      "offset": 34
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 5579876091,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VINT Report Game",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 113407638,
  "status": "passed"
});
formatter.after({
  "duration": 1654572751,
  "status": "passed"
});
formatter.before({
  "duration": 15378594787,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify ALL home page Links leads to the correct page",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;16",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#(Except for nav bar as it has mousehover function)"
    }
  ],
  "line": 13,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on \"\u003cLink\u003e\" (using xpath \"//*[@id\u003d\u0027content\u0027]/section/a\")",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the pagetitle as \"Home\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 4951126098,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLink\u003e",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027content\u0027]/section/a",
      "offset": 34
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 5282324328,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Home",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 142865194,
  "status": "passed"
});
formatter.after({
  "duration": 1344268128,
  "status": "passed"
});
formatter.before({
  "duration": 14675315455,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Verify ALL home page Links leads to the correct page",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-all-home-page-links-leads-to-the-correct-page;;17",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 9,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 11,
      "value": "#(Except for nav bar as it has mousehover function)"
    }
  ],
  "line": 13,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I click on \"\u003cLink\u003e\" (using xpath \"//*[@id\u003d\u0027content\u0027]/a/img\")",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "I should see the pagetitle as \"Welcome to ICT Books\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 4437376966,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "\u003cLink\u003e",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027content\u0027]/a/img",
      "offset": 34
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 8734611729,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome to ICT Books",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 147466181,
  "status": "passed"
});
formatter.after({
  "duration": 1819981864,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 39,
  "name": "Verify home nav bar links",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#(mouseover function - the sub menu drops when hovering over the home button)"
    }
  ],
  "line": 42,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I hover over the \"home\" button (using xpath \"//*[@id\u003d\u0027category-2\u0027]/a\")",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I click on \"\u003cSubMenuLink\u003e\" (using xpath \"\u003cxpath\u003e\")",
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see the pagetitle as \"\u003cTitle\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 47,
  "name": "",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links;",
  "rows": [
    {
      "cells": [
        "SubMenuLink",
        "xpath",
        "Title"
      ],
      "line": 49,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links;;1"
    },
    {
      "cells": [
        "Architecture",
        "//*[@id\u003d\u0027category-13\u0027]/a",
        "Architecture"
      ],
      "line": 50,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links;;2"
    },
    {
      "cells": [
        "BI \u0026 Analytics",
        "//*[@id\u003d\u0027category-14\u0027]/a",
        "BI \u0026 Analytics"
      ],
      "line": 51,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links;;3"
    },
    {
      "cells": [
        "Cloud",
        "//*[@id\u003d\u0027category-15\u0027]/a",
        "Cloud"
      ],
      "line": 52,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links;;4"
    },
    {
      "cells": [
        "Cybersecurity",
        "//*[@id\u003d\u0027category-16\u0027]/a",
        "Cybersecurity"
      ],
      "line": 53,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links;;5"
    },
    {
      "cells": [
        "Digital",
        "//*[@id\u003d\u0027category-17\u0027]/a",
        "Digital"
      ],
      "line": 54,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links;;6"
    },
    {
      "cells": [
        "High Tech",
        "//*[@id\u003d\u0027category-18\u0027]/a",
        "High Tech"
      ],
      "line": 55,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links;;7"
    },
    {
      "cells": [
        "Innovation",
        "//*[@id\u003d\u0027category-19\u0027]/a",
        "Innovation"
      ],
      "line": 56,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links;;8"
    },
    {
      "cells": [
        "QA and Testing",
        "//*[@id\u003d\u0027category-12\u0027]/a",
        "QA and Testing"
      ],
      "line": 57,
      "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 14851170055,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Verify home nav bar links",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#(mouseover function - the sub menu drops when hovering over the home button)"
    }
  ],
  "line": 42,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I hover over the \"home\" button (using xpath \"//*[@id\u003d\u0027category-2\u0027]/a\")",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I click on \"Architecture\" (using xpath \"//*[@id\u003d\u0027category-13\u0027]/a\")",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see the pagetitle as \"Architecture\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 5683139197,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home",
      "offset": 18
    },
    {
      "val": "//*[@id\u003d\u0027category-2\u0027]/a",
      "offset": 45
    }
  ],
  "location": "stepDefHomePage.i_hover_over_the_button_using_xpath(String,String)"
});
formatter.result({
  "duration": 739944759,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Architecture",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027category-13\u0027]/a",
      "offset": 40
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 6194932475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Architecture",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 285285350,
  "status": "passed"
});
formatter.after({
  "duration": 1708333727,
  "status": "passed"
});
formatter.before({
  "duration": 15705935762,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Verify home nav bar links",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#(mouseover function - the sub menu drops when hovering over the home button)"
    }
  ],
  "line": 42,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I hover over the \"home\" button (using xpath \"//*[@id\u003d\u0027category-2\u0027]/a\")",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I click on \"BI \u0026 Analytics\" (using xpath \"//*[@id\u003d\u0027category-14\u0027]/a\")",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see the pagetitle as \"BI \u0026 Analytics\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 5190459816,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home",
      "offset": 18
    },
    {
      "val": "//*[@id\u003d\u0027category-2\u0027]/a",
      "offset": 45
    }
  ],
  "location": "stepDefHomePage.i_hover_over_the_button_using_xpath(String,String)"
});
formatter.result({
  "duration": 797776278,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BI \u0026 Analytics",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027category-14\u0027]/a",
      "offset": 42
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 5923177760,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BI \u0026 Analytics",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 169277684,
  "status": "passed"
});
formatter.after({
  "duration": 1700046909,
  "status": "passed"
});
formatter.before({
  "duration": 15245971798,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Verify home nav bar links",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#(mouseover function - the sub menu drops when hovering over the home button)"
    }
  ],
  "line": 42,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I hover over the \"home\" button (using xpath \"//*[@id\u003d\u0027category-2\u0027]/a\")",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I click on \"Cloud\" (using xpath \"//*[@id\u003d\u0027category-15\u0027]/a\")",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see the pagetitle as \"Cloud\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 5808155072,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home",
      "offset": 18
    },
    {
      "val": "//*[@id\u003d\u0027category-2\u0027]/a",
      "offset": 45
    }
  ],
  "location": "stepDefHomePage.i_hover_over_the_button_using_xpath(String,String)"
});
formatter.result({
  "duration": 832273042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cloud",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027category-15\u0027]/a",
      "offset": 33
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 7563387703,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cloud",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 459121050,
  "status": "passed"
});
formatter.after({
  "duration": 1981306151,
  "status": "passed"
});
formatter.before({
  "duration": 15544514904,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Verify home nav bar links",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#(mouseover function - the sub menu drops when hovering over the home button)"
    }
  ],
  "line": 42,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I hover over the \"home\" button (using xpath \"//*[@id\u003d\u0027category-2\u0027]/a\")",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I click on \"Cybersecurity\" (using xpath \"//*[@id\u003d\u0027category-16\u0027]/a\")",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see the pagetitle as \"Cybersecurity\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 5645227770,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home",
      "offset": 18
    },
    {
      "val": "//*[@id\u003d\u0027category-2\u0027]/a",
      "offset": 45
    }
  ],
  "location": "stepDefHomePage.i_hover_over_the_button_using_xpath(String,String)"
});
formatter.result({
  "duration": 767941556,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cybersecurity",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027category-16\u0027]/a",
      "offset": 41
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 6278560117,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cybersecurity",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 67826641,
  "status": "passed"
});
formatter.after({
  "duration": 1463766246,
  "status": "passed"
});
formatter.before({
  "duration": 15576008648,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Verify home nav bar links",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links;;6",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#(mouseover function - the sub menu drops when hovering over the home button)"
    }
  ],
  "line": 42,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I hover over the \"home\" button (using xpath \"//*[@id\u003d\u0027category-2\u0027]/a\")",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I click on \"Digital\" (using xpath \"//*[@id\u003d\u0027category-17\u0027]/a\")",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see the pagetitle as \"Digital\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 5534550040,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home",
      "offset": 18
    },
    {
      "val": "//*[@id\u003d\u0027category-2\u0027]/a",
      "offset": 45
    }
  ],
  "location": "stepDefHomePage.i_hover_over_the_button_using_xpath(String,String)"
});
formatter.result({
  "duration": 642637097,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027category-17\u0027]/a",
      "offset": 35
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 6505858739,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Digital",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 80347402,
  "status": "passed"
});
formatter.after({
  "duration": 1432206703,
  "status": "passed"
});
formatter.before({
  "duration": 14962310140,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Verify home nav bar links",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links;;7",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#(mouseover function - the sub menu drops when hovering over the home button)"
    }
  ],
  "line": 42,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I hover over the \"home\" button (using xpath \"//*[@id\u003d\u0027category-2\u0027]/a\")",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I click on \"High Tech\" (using xpath \"//*[@id\u003d\u0027category-18\u0027]/a\")",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see the pagetitle as \"High Tech\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 7156213042,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home",
      "offset": 18
    },
    {
      "val": "//*[@id\u003d\u0027category-2\u0027]/a",
      "offset": 45
    }
  ],
  "location": "stepDefHomePage.i_hover_over_the_button_using_xpath(String,String)"
});
formatter.result({
  "duration": 818353937,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "High Tech",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027category-18\u0027]/a",
      "offset": 37
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 6616403502,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "High Tech",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 892554102,
  "status": "passed"
});
formatter.after({
  "duration": 2127429574,
  "status": "passed"
});
formatter.before({
  "duration": 15616754320,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Verify home nav bar links",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links;;8",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#(mouseover function - the sub menu drops when hovering over the home button)"
    }
  ],
  "line": 42,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I hover over the \"home\" button (using xpath \"//*[@id\u003d\u0027category-2\u0027]/a\")",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I click on \"Innovation\" (using xpath \"//*[@id\u003d\u0027category-19\u0027]/a\")",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see the pagetitle as \"Innovation\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 5224688449,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home",
      "offset": 18
    },
    {
      "val": "//*[@id\u003d\u0027category-2\u0027]/a",
      "offset": 45
    }
  ],
  "location": "stepDefHomePage.i_hover_over_the_button_using_xpath(String,String)"
});
formatter.result({
  "duration": 925146603,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Innovation",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027category-19\u0027]/a",
      "offset": 38
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 6050288710,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Innovation",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 100365121,
  "status": "passed"
});
formatter.after({
  "duration": 2415942216,
  "status": "passed"
});
formatter.before({
  "duration": 16040543390,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Verify home nav bar links",
  "description": "",
  "id": "checking/verifying-homgepage-functions-and-elements;verify-home-nav-bar-links;;9",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 38,
      "name": "@yes"
    }
  ]
});
formatter.step({
  "comments": [
    {
      "line": 40,
      "value": "#(mouseover function - the sub menu drops when hovering over the home button)"
    }
  ],
  "line": 42,
  "name": "I am on \"HomePage\"",
  "keyword": "Given "
});
formatter.step({
  "line": 43,
  "name": "I hover over the \"home\" button (using xpath \"//*[@id\u003d\u0027category-2\u0027]/a\")",
  "keyword": "When "
});
formatter.step({
  "line": 44,
  "name": "I click on \"QA and Testing\" (using xpath \"//*[@id\u003d\u0027category-12\u0027]/a\")",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "I should see the pagetitle as \"QA and Testing\"",
  "matchedColumns": [
    2
  ],
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
  "duration": 5543350174,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "home",
      "offset": 18
    },
    {
      "val": "//*[@id\u003d\u0027category-2\u0027]/a",
      "offset": 45
    }
  ],
  "location": "stepDefHomePage.i_hover_over_the_button_using_xpath(String,String)"
});
formatter.result({
  "duration": 783365169,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA and Testing",
      "offset": 12
    },
    {
      "val": "//*[@id\u003d\u0027category-12\u0027]/a",
      "offset": 42
    }
  ],
  "location": "stepDefHomePage.i_click_on_using_xpath(String,String)"
});
formatter.result({
  "duration": 7616032356,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "QA and Testing",
      "offset": 31
    }
  ],
  "location": "stepDefHomePage.i_should_see_the_pagetitle_as(String)"
});
formatter.result({
  "duration": 361659242,
  "status": "passed"
});
formatter.after({
  "duration": 2145434715,
  "status": "passed"
});
});