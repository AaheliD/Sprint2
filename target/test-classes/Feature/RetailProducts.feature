Feature: Automation Testing of Retail Products

  Background: Sign In
    Given User is on the sign in page
    When User enters "admin" and "admin@123"
    And clicks on login
    Then User is redirected to the dashboard
    When User clicks on the Product page
    Then user is redirected to Products page

  Scenario Outline: Add Product
    Given User clicks on Add Products
    When user is redirected to Add Products page
    When user adds "<Product Name>", "<Description>", "<Meta Tag Title>", "<Meta Tag Description>", "<Meta Tag Key>", "<Product Key>" and "<Model Name>"
    And clicks on save
    Then user gets "<Validation Message>" and check if the "<Product Name>" "<Model>" entered is same as seen in the record
    
    Examples: 
      | Product Name | Description         | Meta Tag Title | Meta Tag Description | Meta Tag Key | Product Key | Model Name | Validation Message                                   |
      |              |                     |                |                      |              |             |            | Warning: Please check the form carefully for errors! |
      | a            | Cordless_Earphones1 | a              | Air@100              | Air@123      | Air123,@@@  | a          | Warning: Please check the form carefully for errors! |
      | Balloon@123  | Air Balloons@123    | Ball@100       | Ball@100             | Ball@123     | Ball123,@@@ | Ball@100   | Success: You have modified products!                 |

  Scenario: Cancel button Verification
    Given User clicks on Add Products
    When user is redirected to Add Products page
    And clicks on cancel
    Then user is redirected back

  #####################################################################################################################################################################################
  Scenario Outline: Edit Product
    Given User clicks on Edit Products
    When user is redirected to Edit Products page
    When user edits "<Product Name>", "<Description>", "<Meta Tag Title>", "<Meta Tag Description>", "<Meta Tag Key>", "<Product Key>" and "<Model Name>"
    And clicks on save
   Then user gets "<Validation Message>" and check if the "<Product Name>" "<Model>" entered is same as seen in the record

    Examples: 
      | Product Name | Description         | Meta Tag Title | Meta Tag Description | Meta Tag Key | Product Key | Model Name | Validation Message                                   |
      |              |                     |                |                      |              |             |            | Warning: Please check the form carefully for errors! |
      | a            | Cordless_Earphones1 | a              | Air@100              | Air@123      | Air123,@@@  | a          | Warning: Please check the form carefully for errors! |
      | Airpods@123  | Cordless_Earphones1 | Air@100        | Air@100              | Air@123      | Air123,@@@  | Air@100    | Success: You have modified products!                 |

Scenario: Cancel button Verification
    Given User clicks on Edit Products
    When user is redirected to Edit Products page
    And clicks on cancel
    Then user is redirected back
    
  #####################################################################################################################################################################################
  Scenario Outline: Filter Products
    Given User is on the Products page
    When user fills in "<Product Name>","<Price>", "<Model>" and "<Quantity>"
    And selects "<Status>" and "<Image>"
    And clicks on filter
    Then user gets results according to his filtered choices

    Examples: 
      | Product Name | Price   | Model   | Quantity | Status | Image |
      | Airpods@123  |  0.0000 | Air@100 |        1 |      1 | *     |
      | Car          | Car@123 | Car     | Car@123  |      0 |     0 |

  #####################################################################################################################################################################################
  Scenario: Copy button Verification
    Given User is on the Products page
    When User checks product to be copied
    And clicks on Copy
    Then the product is modified

  #####################################################################################################################################################################################
  Scenario: Delete button Verification
    Given User is on the Products page
    When User checks product to be deleted
    And clicks on Delete
    Then the product is modified

  #####################################################################################################################################################################################
  Scenario: Sorting
    Given User is on the Products page
    When User clicks on Product Name
    Then Product Names get sorted in descending order
    When User clicks on Model
    Then Model get sorted in ascending order
    When User clicks on Price
    Then Price get sorted in descending order
    When User clicks on Quantity
    Then Quantity get sorted in descending order
    When User clicks on Status
    Then Status get sorted with Enabled ones showing first

  Scenario Outline: Pagination
    When User clicks "<Symbol1>"
    Then User is directed to page no. "<Page no.1>"
    When User clicks "<Symbol2>"
    Then User is directed to page no. "<Page no.2>"
    When User clicks "<Symbol3>"
    Then User is directed to page no. "<Page no.3>"
    When User Clicks >|
    Then User is directed to page no. "<Page no.4>"
    When User Clicks on |<
    Then User is directed to page no. "<Page no.5>"

    Examples: 
      | Symbol1 | Symbol2 | Symbol3 | Page no.1 | Page no.2 | Page no.3 | Page no.4 | Page no.5 |
      | >       | <       |       3 |         2 |         1 |         3 |         7 |         1 |

  Scenario: Checkbox
    Given User checks the first checkbox
    Then all the checkboxes will be checked
