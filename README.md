# Interactive JavaScript Quiz

## Purpose
The purpose of this project is to create a quiz where users can test their knowledge about countries in the world. The design of the quiz is simple,
with a combination of cold and warm colors.

## Description

Upon opening the webpage where the project will be hosted, a container first appears with a title ("Are you ready?"),
two text fields for name and email respectively, and finally the "Play Now" button.

Upon pressing the "Play Now" button, the fake authentication container disappears, and the game container appears. The game container contains a title ("Play Quiz"),
a progress bar from 1 to 10, the question, and its respective options. When selecting an option, if the answer is correct, it will be marked green; if it is incorrect,
it will be marked red, and then the "Next" button will appear to continue with the next question. Upon completing the 10 questions, a container will be displayed containing
a title ("Play Quiz"), the completed progress bar (painted green), a text which will show the score (for example, "You scored 5 out of 10!"), and the "Play" button again
to restart the game.

## Challenges faced

Creating the fake authentication container was easy, but making the function so that it disappears when you press the "Play Now" button and the questions container appears
was difficult and took me a while to solve.

I also had problems getting the progress bar to match the number of questions when pressing "Next button". When it came to question 10, the bar was not completely filled.
However, after trying several times in JavaScript, I was able to solve it.
