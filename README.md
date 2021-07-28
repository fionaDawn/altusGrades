# altusGrades

#### Pre-requisites:

- node

### How to run locally?

1. Clone this repo and run `npm install` in the root folder.
2. To run on command line, run `npm start`

### How to test?

Tests aren't supported yet

## The Problem

Scenario: 
You're part of a development team at company XYZ. Your team has been tasked with creating functionality that allows stakeholders to download a report that consists of students and their grades for a single school. The stakeholders expect two items on the webpage. 
1. One text input for searching for a school they want to generate the report for and 
2. One button that when clicked generates the report and downloads it in their browser. 

Your team lead has tasked you with creating the logic and user interface for the web page: 
1. Whiteboard out how you can make an input that accepts text and searches the database with that string when the download button is clicked (noSQL or SQL is fine) 
2. Demonstrate what the query to fetch grades for students for that school might look like.
3. Show us how you would wire up a button to download a file that contains the grades for students for the school entered in the text input (any file format is fine, think about what packages/adapters you can use to accomplish this) 
4. Explain one way you could improve the user experience with the way the school text is entered in the input (think about different type of inputs, drop-down, lists, auto-select, etc) 
5. Outline your preference of stack in building this project. What are your reasons for choosing that stack (other than preference based)? Would you change your mind on the stack choice if we needed to implement additional features (front end, back end, or architecture related) to this app? 
6. Example grades table: schoolName:text, studentName:text, studentGrade:number 

## The Solution

This project is written in Node with Express, then MongoDB as data storage.


### Possible Imporovements on next iteration:

1. React as Frontend development
2. Loosely coupled db architecture
3. Microservice, separate download, backend and frontend
4. Test Cases

### Questions asked and own answers/assumptions:
1. When schoolname is blank, what should we display?
Nothing. School name is required.
2. What file extensions should we support?
CSV

