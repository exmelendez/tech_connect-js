# Unit 4 - Exercise Two (Assigned) | Speed Limit Point Violation

## Objective

**New York State driving violations and associated points** (Use any means of conditional statements)

Build an app that allows a user to insert a posted speed limit and how fast they were driving at the time they received the violation.

The APP should output in return:

- How fast they were driving over the speed limit.
- How many points will be added to their license for the violation.

| **Violation**                                 | **Points** |
| --------------------------------------------- | ---------- |
| Speeding - MPH over speed limit not indicated | 3          |
| Speeding 1 - 10 MPH over speed limit          | 3          |
| Speeding 11 - 20 MPH over speed limit         | 4          |
| Speeding 21 - 30 MPH over speed limit         | 6          |
| Speeding 31 - 40 MPH over speed limit         | 8          |
| Speeding more than 40 MPH over speed limit    | 11         |

### Solution/Features

- Use of _const_ variables with capitalized naming
- Creation of const functions/variables above all running code
- Created helper functions, one that returns number of point value violation based on a miles given parameter, one to reset the input value back to blank and another that renders the status message to a div based on parameters of message type
- Array useage to store/render the status messages with a for loop
- Use of JS to create HTML P tag elements and set their attribute(s)
- Use of conditionals to determine probably value input and to determine message types
- Code/function creation meant to prevent duplicate code and minimize
- Use of _button_ and _eventListener_ to execute functions

## View Instructions

Click on the _u4ex2.hmtl_ file above to view the HTML structure, content and link to the JS file. To view the JS file click on the _JS_ folder above where you will find a single file named _main_.
