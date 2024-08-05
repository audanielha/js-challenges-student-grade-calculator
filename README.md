# js-challenges-student-grade-calculator

Objective:
Create a JavaScript program that calculates the average grade of a student based on their scores in different subjects and determines their final grade.

Instructions:
Initialize Variables:

Declare a variable subjects and assign it an array of objects. Each object should represent a subject and have properties: name (string) and score (number).
Calculate Average Score:

Create a variable totalScore and initialize it to 0.
Loop through the subjects array and calculate the total score by summing up the scores of all subjects.
Calculate the average score by dividing the totalScore by the number of subjects.
Determine Final Grade:

Create a function getGrade that takes the average score as an argument and returns a grade based on the following criteria:
A for scores 90 and above
B for scores 80-89
C for scores 70-79
D for scores 60-69
F for scores below 60
Output Results:

Print the average score and the final grade to the console.

Steps:
Initialize the subjects array with several subjects, each having a name and score.
Loop through the subjects array to calculate the total score.
Calculate the average score by dividing the totalScore by the number of subjects.
Create a getGrade function to determine the final grade based on the average score.
Print the average score and final grade to the console.
