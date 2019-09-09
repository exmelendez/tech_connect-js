# Unit 1 - Exercise One (Self Improved) | Temperature Conversion

## Objective

Create a program that accepts a temperature degree in Celsius from a prompt and alerts the user the converted result within an alert message. The alert message should say, _"The temperature is: (the converted degrees) F"_

### Solution/Features

Completely redesigned the solution requested by professor. I've eliminted the use of prompts and/or alerts.

- Centered DIV with styling using external CSS & Flex box.
- Dynamic input that renders results while typing with Event listener.
- Provided dual functionality with a switch to be able to convert number to Celsius or Farenheit
- Applied modified styling to checkbox that converts it to a slide/animated switch.
- Made use of ES6 functions & conditionals.

## Bugs

The entry input is of _number_ type which on some browsers prevents the entry of non-numeric characters. I have included a conditional statement (with _Number.isNaN_) to render an error message if a non-numeric character is entered however it does not work properly on the Safari browser. On Safari, although it does not display a proper out, it does allow for non-numeric entries and it does not display the error message.

## View Instructions

Click on the _u1ex1a.hmtl_ file above to view the HTML structure, content and link to the JS file. To view the JS file click on the _JS_ folder above where you will find a single file named _main_.
