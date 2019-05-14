# TICKLE - Wilfred Ruck

An mvp pricing engine that prints out the estimated policy price for a given person written in JavaScript with tests in Jasmine.

## Technical Specifications

TICKLE was built using <a href="https://nodejs.org/en/">Node 10.15.3</a>.

## Installation

Running Tests

Assuming you have the techincal specifications noted above, navigate to the project folder in your console and run `jasmine spec/tickle_spec.js`.

## Tradeoffs and/or Design Decisions

At the beginning of tickle.js, I declare all variables that should be constant in all caps to make it clear that they should remain constant for the entire file. I made this decision so that as the program scales, any changes to these values can be very easily updated and represented without much effort. I also added a check at the start of the tickle function to see whether or not the customer is old enough to obtain insurance. While it wasn't stated, I wanted to make sure that my code works for different inputs, such as being too young or not having a health condition.
