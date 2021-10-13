$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/Feature/RetailProducts.feature");
formatter.feature({
  "name": "Automation Testing of Retail Products",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Add Product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks on Add Products",
  "keyword": "Given "
});
formatter.step({
  "name": "user is redirected to Add Products page",
  "keyword": "When "
});
formatter.step({
  "name": "user adds \"\u003cProduct Name\u003e\", \"\u003cDescription\u003e\", \"\u003cMeta Tag Title\u003e\", \"\u003cMeta Tag Description\u003e\", \"\u003cMeta Tag Key\u003e\", \"\u003cProduct Key\u003e\" and \"\u003cModel Name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on save",
  "keyword": "And "
});
formatter.step({
  "name": "user gets \"\u003cValidation Message\u003e\" and check if the \"\u003cProduct Name\u003e\" \"\u003cModel\u003e\" entered is same as seen in the record",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Product Name",
        "Description",
        "Meta Tag Title",
        "Meta Tag Description",
        "Meta Tag Key",
        "Product Key",
        "Model Name",
        "Validation Message"
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Warning: Please check the form carefully for errors!"
      ]
    },
    {
      "cells": [
        "a",
        "Cordless_Earphones1",
        "a",
        "Air@100",
        "Air@123",
        "Air123,@@@",
        "a",
        "Warning: Please check the form carefully for errors!"
      ]
    },
    {
      "cells": [
        "Balloon@123",
        "Air Balloons@123",
        "Ball@100",
        "Ball@100",
        "Ball@123",
        "Ball123,@@@",
        "Ball@100",
        "Success: You have modified products!"
      ]
    }
  ]
});
formatter.background({
  "name": "Sign In",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is redirected to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Product page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_the_Product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks on Add Products",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_Add_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Add Products page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Add_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds \"\", \"\", \"\", \"\", \"\", \"\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_adds(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on save",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets \"Warning: Please check the form carefully for errors!\" and check if the \"\" \"\u003cModel\u003e\" entered is same as seen in the record",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_gets_and_check_if_the_entered_is_same_as_seen_in_the_record(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Sign In",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is redirected to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Product page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_the_Product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks on Add Products",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_Add_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Add Products page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Add_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds \"a\", \"Cordless_Earphones1\", \"a\", \"Air@100\", \"Air@123\", \"Air123,@@@\" and \"a\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_adds(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on save",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets \"Warning: Please check the form carefully for errors!\" and check if the \"a\" \"\u003cModel\u003e\" entered is same as seen in the record",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_gets_and_check_if_the_entered_is_same_as_seen_in_the_record(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Sign In",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is redirected to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Product page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_the_Product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Add Product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks on Add Products",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_Add_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Add Products page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Add_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user adds \"Balloon@123\", \"Air Balloons@123\", \"Ball@100\", \"Ball@100\", \"Ball@123\", \"Ball123,@@@\" and \"Ball@100\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_adds(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on save",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets \"Success: You have modified products!\" and check if the \"Balloon@123\" \"\u003cModel\u003e\" entered is same as seen in the record",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_gets_and_check_if_the_entered_is_same_as_seen_in_the_record(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Sign In",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is redirected to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Product page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_the_Product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cancel button Verification",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks on Add Products",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_Add_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Add Products page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Add_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on cancel",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_cancel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected back",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_back()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Edit Product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks on Edit Products",
  "keyword": "Given "
});
formatter.step({
  "name": "user is redirected to Edit Products page",
  "keyword": "When "
});
formatter.step({
  "name": "user edits \"\u003cProduct Name\u003e\", \"\u003cDescription\u003e\", \"\u003cMeta Tag Title\u003e\", \"\u003cMeta Tag Description\u003e\", \"\u003cMeta Tag Key\u003e\", \"\u003cProduct Key\u003e\" and \"\u003cModel Name\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks on save",
  "keyword": "And "
});
formatter.step({
  "name": "user gets \"\u003cValidation Message\u003e\" and check if the \"\u003cProduct Name\u003e\" \"\u003cModel\u003e\" entered is same as seen in the record",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Product Name",
        "Description",
        "Meta Tag Title",
        "Meta Tag Description",
        "Meta Tag Key",
        "Product Key",
        "Model Name",
        "Validation Message"
      ]
    },
    {
      "cells": [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "Warning: Please check the form carefully for errors!"
      ]
    },
    {
      "cells": [
        "a",
        "Cordless_Earphones1",
        "a",
        "Air@100",
        "Air@123",
        "Air123,@@@",
        "a",
        "Warning: Please check the form carefully for errors!"
      ]
    },
    {
      "cells": [
        "Airpods@123",
        "Cordless_Earphones1",
        "Air@100",
        "Air@100",
        "Air@123",
        "Air123,@@@",
        "Air@100",
        "Success: You have modified products!"
      ]
    }
  ]
});
formatter.background({
  "name": "Sign In",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is redirected to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Product page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_the_Product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit Product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks on Edit Products",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_Edit_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Edit Products page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Edit_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edits \"\", \"\", \"\", \"\", \"\", \"\" and \"\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_edits_and(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on save",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets \"Warning: Please check the form carefully for errors!\" and check if the \"\" \"\u003cModel\u003e\" entered is same as seen in the record",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_gets_and_check_if_the_entered_is_same_as_seen_in_the_record(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Sign In",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is redirected to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Product page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_the_Product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit Product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks on Edit Products",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_Edit_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Edit Products page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Edit_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edits \"a\", \"Cordless_Earphones1\", \"a\", \"Air@100\", \"Air@123\", \"Air123,@@@\" and \"a\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_edits_and(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on save",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets \"Warning: Please check the form carefully for errors!\" and check if the \"a\" \"\u003cModel\u003e\" entered is same as seen in the record",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_gets_and_check_if_the_entered_is_same_as_seen_in_the_record(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Sign In",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is redirected to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Product page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_the_Product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Edit Product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks on Edit Products",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_Edit_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Edit Products page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Edit_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user edits \"Airpods@123\", \"Cordless_Earphones1\", \"Air@100\", \"Air@100\", \"Air@123\", \"Air123,@@@\" and \"Air@100\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_edits_and(String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on save",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_save()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets \"Success: You have modified products!\" and check if the \"Airpods@123\" \"\u003cModel\u003e\" entered is same as seen in the record",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_gets_and_check_if_the_entered_is_same_as_seen_in_the_record(String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Sign In",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is redirected to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Product page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_the_Product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Cancel button Verification",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User clicks on Edit Products",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_Edit_Products()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Edit Products page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Edit_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on cancel",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_cancel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected back",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_back()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Filter Products",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Products page",
  "keyword": "Given "
});
formatter.step({
  "name": "user fills in \"\u003cProduct Name\u003e\",\"\u003cPrice\u003e\", \"\u003cModel\u003e\" and \"\u003cQuantity\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "selects \"\u003cStatus\u003e\" and \"\u003cImage\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on filter",
  "keyword": "And "
});
formatter.step({
  "name": "user gets results according to his filtered choices",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Product Name",
        "Price",
        "Model",
        "Quantity",
        "Status",
        "Image"
      ]
    },
    {
      "cells": [
        "Airpods@123",
        "0.0000",
        "Air@100",
        "1",
        "1",
        "*"
      ]
    },
    {
      "cells": [
        "Car",
        "Car@123",
        "Car",
        "Car@123",
        "0",
        "0"
      ]
    }
  ]
});
formatter.background({
  "name": "Sign In",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is redirected to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Product page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_the_Product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter Products",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Products page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills in \"Airpods@123\",\"0.0000\", \"Air@100\" and \"1\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_fills_in_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects \"1\" and \"*\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.selects_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on filter",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets results according to his filtered choices",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_gets_results_according_to_his_filtered_choices()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Sign In",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is redirected to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Product page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_the_Product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter Products",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on the Products page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fills in \"Car\",\"Car@123\", \"Car\" and \"Car@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_fills_in_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "selects \"0\" and \"0\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.selects_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on filter",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_filter()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user gets results according to his filtered choices",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_gets_results_according_to_his_filtered_choices()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Sign In",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is redirected to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Product page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_the_Product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Copy button Verification",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on the Products page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User checks product to be copied",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_checks_product_to_be_copied()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Copy",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_Copy()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product is modified",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.the_product_is_modified()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Sign In",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is redirected to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Product page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_the_Product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Delete button Verification",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on the Products page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User checks product to be deleted",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_checks_product_to_be_deleted()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on Delete",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_Delete()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the product is modified",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.the_product_is_modified()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Sign In",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is redirected to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Product page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_the_Product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Sorting",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User is on the Products page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Product Name",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_Product_Name()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Product Names get sorted in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.product_Names_get_sorted_in_descending_order()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Model",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_Model()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Model get sorted in ascending order",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.model_get_sorted_in_ascending_order()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Price",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_Price()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Price get sorted in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.price_get_sorted_in_descending_order()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Quantity",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_Quantity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Quantity get sorted in descending order",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.quantity_get_sorted_in_descending_order()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Status",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_Status()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Status get sorted with Enabled ones showing first",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.status_get_sorted_with_Enabled_ones_showing_first()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Pagination",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"\u003cSymbol1\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User is directed to page no. \"\u003cPage no.1\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks \"\u003cSymbol2\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User is directed to page no. \"\u003cPage no.2\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User clicks \"\u003cSymbol3\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User is directed to page no. \"\u003cPage no.3\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User Clicks \u003e|",
  "keyword": "When "
});
formatter.step({
  "name": "User is directed to page no. \"\u003cPage no.4\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User Clicks on |\u003c",
  "keyword": "When "
});
formatter.step({
  "name": "User is directed to page no. \"\u003cPage no.5\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Symbol1",
        "Symbol2",
        "Symbol3",
        "Page no.1",
        "Page no.2",
        "Page no.3",
        "Page no.4",
        "Page no.5"
      ]
    },
    {
      "cells": [
        "\u003e",
        "\u003c",
        "3",
        "2",
        "1",
        "3",
        "7",
        "1"
      ]
    }
  ]
});
formatter.background({
  "name": "Sign In",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is redirected to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Product page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_the_Product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Pagination",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User clicks \"\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is directed to page no. \"2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_directed_to_page_no(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks \"\u003c\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is directed to page no. \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_directed_to_page_no(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks \"3\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is directed to page no. \"3\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_directed_to_page_no(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks \u003e|",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_Clicks()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is directed to page no. \"7\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_directed_to_page_no(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Clicks on |\u003c",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is directed to page no. \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_directed_to_page_no(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Sign In",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is on the sign in page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_is_on_the_sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"admin\" and \"admin@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on login",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefination.clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User is redirected to the dashboard",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_the_dashboard()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on the Product page",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefination.user_clicks_on_the_Product_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user is redirected to Products page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.user_is_redirected_to_Products_page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Checkbox",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "User checks the first checkbox",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefination.user_checks_the_first_checkbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all the checkboxes will be checked",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefination.all_the_checkboxes_will_be_checked()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});