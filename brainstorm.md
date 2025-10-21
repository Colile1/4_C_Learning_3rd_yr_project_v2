I want to build the 4C_Learning System. read through project details, do research on the different sections includes finding similar apps/systems, find out about differeent Learning syles for programming Languages then choose the 4 that I can use in my system. Add other Features that will improve the system. Then Rewrite the  project definition for this system, in a better way that is easy to follow, understand and explains all the different aspects of the project.


# 4C_Learning system

## Project Overview
This project is a modern learning system that aims to leverage modern tools to optimise learning for people with different skills, with different learning styles. The site will cover various topics such as web development, programming languages, design principles, etc. The site will have a user-friendly interface, making it easy for users to navigate and find the information. The site will also have a search function, allowing users to search for specific topics or keywords. The system will leverage existing modern web tools, AI tools, youtube videos, embeed IDEs  and APIs to provide a comprehensive learning experience, that caters for people of all skill levels, that have preferences for different learning styles. 

the system includes sign up page, login page, the app home page and home pages for each of the 5 languages, tests, quizzes, a learning styles test, an access control system, a database, learning content, an admin UI, etc

## Programming styles
This project must use appropriate project programming paradgims that make the code reusable, compatemantalised to make it easy to use. keeping codes in organised in appropriately named files and folders. each function must contain appropriate documentation following established style conventions like betty style, pycodestyle, etc.. 

Use programming principles to make the code modular such that it can be reused, extended and easy to maintain and manage.


the file structure should include: 
- Each Language should have its own folder. 
- In each of those folders there must be an index page named {Language name}_index.html file that will be the main entry point of the site, to pull in the units, and connect to the rest of the site.
- the separate folders for the html, javascript, css, images, and other resources. 
- each unit must be in its own folder


## System features
### 1. Access control system 
The system must have a comprehesive access control system. 
- This includes a login page for those already signedup if not it must direct them to a signup page . 
- This must include a password reset function/change, an email verification system and grants users to set an option for 2 factor authentification, with an option to turn it on/off, or set to be on for first time login on a new device, and manage trusted devices. 
There must be a page for users to view their profile, edit their profilet
- A Database that the stores all users' data, that can only be accessed by system developers, and administrators.
- A password protected Developer/Admin User's interface, that allows them to manage users, their data and view useful stastitics, trends, error messages.
- The system must protect user's data from other users that are not admins/developers, allowing no leakage from one user account to another.

### 2. User Interface
The system must be user friendly. 
- Enable the user to switch from dark mode to light mode.
- Allow the user to change themes. the default theme is sheer glass, lighting blue. 
- Allow expanding/hiding some
- there must be navigation bar pinned ontop. And another collapsable menu from the side.

#### Developer UI
- there must be an option for admins/developers to login.
- Whilst the main UI is geared towards making optimal and user friendly for users,  The developer UI should be optimised for making easier to manage the site, user data and database. 

- Once logged in there should able to view the database from this site,  make edits and Preview the site in user mode.
- the primary developer/admin is Colile Sibanda colilesibanda@gmail.com
password : AdminColile. This must be a hard coded account with admin Access and the abilty to add other admin accounts.
- There should be plenty of graphs, charts, and other visual aids to make the data easy to understand multiple various relevant information including usage rates, progress reports, the model perfomance (including Expected vs Actual results and the timeline of changes made to the weights to improve Expected results and give better recommendations) and other useful features. Users should also have a similar visual aids somewhere in the my profile section, but it should be geared towards giving insights to just user's learning, progress, skills, strengths and weaknnes. 

### 3. Learning styles Test
Upon 1st login after signup the user must directed to the learning styles test home page. but there must an option to skip this step and go directly to the home page and manual select your prefered learning style.

- The learning styles test is a series of tests, quizzes, surveys, etc that are designed to test each user's most optimal learning style. Each of these tests, quizzes, surveys and others must each have a weighting. These weights will be then multiplied to the user results. The total results of these will then be used to build a profile on the user then suggest the recommended learning syle. This will also be used to create the Expected result for the user in the end of Unit knowledge test after spending the recommended time in each lesson. The initial weights will be based on research but will be adjusted by a Machine Learning model as time goes.

- The app should remember/save/store on the database the user's learning style. then show the UI for that learning path for that style even if user logs out and logs in again. This should stay the same until changed in the settings. There should always be clear indication in the pinned navigation bar that show what the current learning style is.

### 4. Unit knowledge test 
The Unit knowledge test is a series of tests and quizzes at the end of each Unit that are designed to fully test the user's knowledge of of the Unit's content. 
Some of these test/quizzes should have limited time to do. This is to make the tests more standardised. 

After the Test the results should be sent to the ML model where they can be compared with expected results. and used to improve the ML model.

There should also be an AI analysis of the results showing areas of strength and weakness and they should give feeback and recommendations.

The knowledge test should be comprehesive, checking the users understanding of the basic, intermidiate, and advanced aspects of the unit's content as well as the practical real world application of the unit's content.  

### 5. Learning content

- The app will cover multiple languages, including c++, python, etc.. 

- there should 4 differrent learning paths for each unit. The one the user's sees depends on their learning style.

### 6. Settings
There should be a settings page that allows the user to manage their account. changing passwords, learning paths , theme, etc...

### 7. Profile / Stats page
In this page the use there is graphs , charts and other things that help the student understand their progress,  time spent on each topic, unit, practice, or  (there should be a way of auto counting this time whilst excluding idle time)

There should also be something here that shows the user their strengths and weaknesses

### 8. Search Function

The site will also have a search function , allowing users to search for specific topics or keywords.





# Brainstorm on the the c++ section of the app
## C++:  Create a part web tutorial site. 

This is part of a larger project that aims to combine different web technologies to create a comprehensive tutorial site. The site will cover various topics such as web development, programming languages, and design principles. The site will have a user-friendly interface, making it easy for users to navigate and find the information. The site will also have a search function , allowing users to search for specific topics or keywords. The website will leverage existing modern web tools, AI tools and APIs to provide a comprehensive learning experience, that caters for people of all skill levels, that have preferences for different learning styles. 

This part covers the tutorials for the c++ language. broken down into lesson by lesson. Each lesson will have a topic, description, an embeeded video (a place holder link), quiz, practice example code, explaination of how it is used in the real world.  an ai tutor.  and a other useful learning tools.

create 4 different learning plans for each lesson and allow the user to select which plan they want to follow. direct them to a lesson page  and select the appropriate 
learninng page for each lesson. 

the file structure should include: 
- the c++_index.html file that will be the main entry point of the site, to pull in the lesson pages, and connect to the rest of the site.
- the separate folders for the html, javascript, css, images, and other resources. 
- each lesson must be in its own folder, with atleast 4 different files for each learning type. 


there will 30 lessons for the c++ language. 



