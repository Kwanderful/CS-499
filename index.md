# CS 499 ePortfolio

# Table of Contents
1. [Professional Self-Assessment](#professional-self-assessment)

2. [Code Review](#code-review)

3. [Enhancement 1: Software Design & Engineering](#enhancement-1-software-design--engineering)

4. [Enhancement 2: Algorithms & Data Structure](#enhancement-2-algorithms--data-structure)

5. [Enhancement 3: Databases](#enhancement-3-databases)

# Professional Self-Assessment

# Code Review

[![Code Review](/imgs/code_review.png)](https://www.youtube.com/watch?v=-2clA_Pd_Rg)

# Enhancement 1: Software Design & Engineering
### [original artifact](https://github.com/Kwanderful/CS-499/blob/main/enhancement1/original/Project2.cpp) | [enhanced version](https://github.com/Kwanderful/CS-499/blob/main/enhancement1/enhanced/enhancement1.py) | [helper functions](https://github.com/Kwanderful/CS-499/blob/main/enhancement1/enhanced/helper_functions.py)

## The artifact:
The artifact that I chose for this enhancement is the CS-410 Project 2 program. It is a C++ file that was translated from Assembly language. Its purpose is to allow administrators of an Investment Company to view and change information on their clients. For that assignment, I had to go through the code and fix any errors and security vulnerabilities but also had to keep it to C++. This meant that there were some vulnerabilities I could not address, and that was expected for that assignment. One of these vulnerabilities was that the program’s login function presented the password in plaintext, meaning that anyone that has access to the code could see it and login. This was the vulnerability that stood out to me the most. 

![Image showing checking for plaintext password](/imgs/enh1_artifact_password.png)

When going from Assembly to C++, I saw this password ("123") in the Assembly. This means, when putting passwords or other sensitive information in plaintext, anyone can see it by disassembling the source code.

## Why was that artifact chosen?
I wanted to test my ability to fix the vulnerabilities while also showing that I can rewrite a program in a different language. I also wanted to practice using PyMongo because I had never used it before and wanted to get familiar with varying ways of using and accessing databases like MongoDB. Creating secure code is an important part of being a programmer and is expected by employers. I felt that I could meet most of the course outcomes with this enhancement. With Python and PyMongo, I could greatly enhance the security just by fixing the login function alone:

![Image showing the new login function, which checks a database](/imgs/enh1_enh_password.png)

## What was learned?
I met four of the five course outcomes with this enhancement.

#### 1. Employ strategies for building collaborative environments that enable diverse audiences to support organizational decision making in the field of computer science
The program now offers a more collaborative environment through its enhanced security and better usability. Administrators can properly control who is able to log in and use the program through the authentication system. MongoDB hosts the database of users and the program checks with it to ensure that the user exists and has access. The usability being increased also makes it easier for users to do what they need to do. Before, changes to client choices did not properly save. After my enhancements, changes are saved and kept in the database, meaning that these changes are reflected the next time the program is ran. 

#### 2. Design, develop, and deliver professional-quality oral, written, and visual communications that are coherent, technically sound, and appropriately adapted to specific audiences and contexts
The program gives helpful feedback that lets the user know what exactly happened. When failing to log in, the program lets the user know what went wrong. There is also feedback when connecting to the database or attempting to use a database with no clients in it. The program also has comments that are short but still describe what the functions do so that other developers working on it can quickly understand. Proper variable names are used and the styling is consistent throughout.

#### 4. Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals
Changing the program from using C++ to using Python meant that I could use tools like PyMongo to establish a connection to an actual database. As stated earlier, this decision was made so that the program could actually save changes made to the clients. MongoDB is a commonly-used database system in the software engineering world, so I wanted to make sure I could efficiently integrate it into a project. 

#### 5. Develop a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resources
I fixed the security flaws that were in the original artifact. The login system uses a database to check for a valid user instead of just waiting for one specific password that was sitting in plaintext. The original did not even account for a username, only the password. With the enhanced version, users must correctly enter their username *and* password. On top of that, sensitive information is kept in a secrets file which can be hidden when switching to production. I also kept calls to the database in a separate file from the main file to further hide any server-related information.

## Reflection
Going from one programming language to another can be pretty simple, but I did find myself forgetting syntax from time to time. For example, printing in C++ is different from printing in Python, so swapping the print statements over was a bit of a challenge. There was also some issues with accepting input from users, since Python uses the input function and C++ uses std::cin. When I originally finished the program, everything was in file. This made it feel a bit cramped, so I moved some functions over to another file to keep the main one cleaner. This improves readability as well as keeps information from the database safe. Because I had an array of clients that was retrieved from the database, I wanted to keep the function that received it in another file and pass it into the main file in the form of a new array. 

I tested the program often to be sure that the calls to MongoDB worked, and used their desktop client tool "Compass" to keep track of my changes. I had to make sure that input validation still worked properly, but forgot that the input received from the user was always a string. This stumped me for a bit because my conditional statements were not being met as I was checking for input to be equal to 1 or 2 instead of "1" or "2". Another great thing I learned when it comes to security is about secret or environment files. A secrets file meant that I didn’t have to worry about leaving important information like the database access string or password inside the code. Instead of putting the database string in the code, I could use the secrets file and do something like: `client = MongoClient(secrets.get('DATABASE_STRING'))`

# Enhancement 2: Algorithms & Data Structure
### [original artifact](https://github.com/Kwanderful/CS-499/blob/main/enhancement2/original/Project2.cpp) | [enhanced version](https://github.com/Kwanderful/CS-499/blob/main/enhancement2/enhanced/enhancement2.py) | [helper functions](https://github.com/Kwanderful/CS-499/blob/main/enhancement2/enhanced/helper_functions.py)

## The artifact:
This artifact is the same as the previous enhancement's: CS 410’s Project Two Investment Company program. It was originally a C++ file whose purpose was to allow an administrator user to view the investment company’s client list and change a client’s “service” between “Brokerage” and “Retirement.” For the first enhancement, I rewrote the program in Python and added a database and that is the base that I was working with for this enhancement. I chose this artifact because I felt that it had a lot of potential. The original was riddled with security issues and wasn’t optimized very well. It did the bare minimum, and I felt that it could have a much better user experience.  

## Why was the artifact chosen?
The display function works in the original artifact, but it's pretty basic. If the database were to have hundreds and hundreds of clients, it would be difficult for someone to go through the data. This is especially true because the display function outputs the clients in order of their ID. This means that if you are looking for a certain client and know their last name, you'll have to scroll through the list of hundreds of clients until you find the one you're looking for. If you don't know their ID, you could spend a long time. I thought that this could be greatly improved through a sorting algorithm. Sorting the data by ID, first name, or last name gives the user control and helps them complete their intended task faster.

Example showing the client list sorted by first name:
![Image showing the new display function](/imgs/enh2_enh_display.png)

## What was learned?
With this enhancement, I met all five course outcomes.

#### 1. Employ strategies for building collaborative environments that enable diverse audiences to support organizational decision making in the field of computer science
This was achieved through the use of a clean, efficient algorithm. The built-in Python sort is straightforward and easily implemented, making the code more easily readable by other developers in my team. This doesn’t mean that other algorithms would not fulfill the outcome, just that I would have to implement them in a way that made sense and was easy to understand at a glance. Being able to sort the client display by ID, first name, or last name also allows for any user to get the information they need no matter what they know the client by.

#### 2. Design, develop, and deliver professional-quality oral, written, and visual communications that are coherent, technically sound, and appropriately adapted to specific audiences and contexts
The program was adapted to specific audiences by allowing the administrator user to view the data in various ways. For example, if an administrator wants to view the client list to search for a specific client, but only knows that client’s last name, they can choose to sort by last name to find them easier. Sorting by client ID would not help in this situation because there’s a chance the administrator does not know the ID off the top off their head, and if the data is sorted by ID, it can be difficult to find the last name of the client they are searching for.  The code is also simple and follows a consistent style throughout, making it easy for another developer to understand.

#### 3. Design and evaluate computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution, while managing the trade-offs involved in design choices
I solved the problem of the data not being sorted properly and also chose an efficient algorithm that would least impact performance even in the event that hundreds or thousands of clients are added to the database. I researched the various sorting algorithms before deciding on the one that made the most sense for the program. 

#### 4. Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals
I showed that I can innovate and find solutions for a variety of problems and use the tools that are available to me. Because I was using Python, I did not have to write my own sorting algorithm and instead opted to use its built-in version. If the code was still in C++, as was the original artifact, I may have had to create my own that would have potentially had an effect on the performance. Knowing the environment and language you are working with is important for developers so that they can get the most out of them and deliver safe, reliable, and well-performing code.

#### 5. Develop a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resources
This final outcome was satisfied by handling the database calls in a separate function and returning not the database’s client objects but an array of new objects that hold only the information needed by the display function. If the clients had personal information in their database entries, this information would not be given to the program and would be safe from potential attackers. For example, if the client database held information such as usernames or passwords, it would be bad if I coded it so that the display function simply outputs the entire client object. This would mean their credentials would be leaked. 

Taking care to use only what is needed is important for security. The display function only shows what is necessary, and the function is within the previous enhancement's program which also went through various security upgrades. I made sure to not let the new code jeopordize the security of the old code by continuing to test the MongoDB connection and log-in while testing the newly-edited display function.

## Reflection
In the process of completing this enhancement, I had to do a bit of research when it came to sorting algorithms. I knew about the common ones such as merge sort, quick sort, selection sort, and bubble sort, and I read about their efficiency in regard to both space and time complexity. Originally, I had thought that quick sort would be the best option in the case of a potentially growing database but eventually remembered that Python has a built-in sorting algorithm that is known as Timsort. Timsort is described as stable and efficient and is often listed as the best option when using Python. Its worst-case time complexity is O(n log n), which is quite a bit better than quick sort’s O(n^2). 

I also tried to think about the ways in which people might want the data to be represented. Being able to sort by any entry being shown on the client list would be helpful and is reminiscent of data tables on web applications where a user can simply click a column to sort the data by that attribute. With that in mind, I added the ability to sort by the client’s ID, first name, or last name. Another benefit of using the built-in function is that it meant it was one less function I had to write that and include in the code, keeping the code as short and simple as it needed to be.

# Enhancement 3: Databases
### [original artifact](https://github.com/Kwanderful/CS-499/tree/main/enhancement3/original) | [enhanced version](https://github.com/Kwanderful/CS-499/tree/main/enhancement3/enhanced)

## The artifact:
The artifact that I used for this enhancement was my CS 320 Project that included class files for Contact and ContactService. While this artifact is very simple, I thought it had a lot of room for improvement. The Contact class’s attributes are a contact ID, first name, last name, phone number, and address. The ContactService class has an array of contacts and functions to update individual fields, a function to add a contact, and a function to delete a contact. There was no associated main file with these classes, so the project was pretty bare-bones with a lot of room for enhancements.

## Why was the artifact chosen?
Having the ability to create, read, update, and delete is standard CRUD format, so I got the idea to turn these into a full-stack application using Next JS and MongoDB. This would let me show off my skills in the field I am most interested in: full-stack development. Since this is the Databases category, it was imperative that I chose a database to connect the Contact class to. I chose MongoDB because I wanted more experience using it and because it is a part of the stacks I am most interested in developing in such as MEAN and MERN. 

For CS 465, I connected an Angular app to MongoDB and so I wanted to try connecting a React app to it this time. I felt as though this would help me show that I can adapt by taking what I’ve learned in other technologies. The artifact was greatly improved because it basically went from an idea (two class files with no associated program) to a full-blown interactive and usable website.

Here is the finished website on both desktop and mobile:

![Image showing the contacts website on desktop](/imgs/enh3_main.png) ![Image showing the contacts website on mobile](/imgs/enh3_mobile.png)

![Image showing the ability to add a contact](/imgs/enh3_add.png) ![Image showing the ability to edit a contact](/imgs/enh3_edit.png)

## What was learned?
I also met all five course outcomes with this enhancement.

#### Employ strategies for building collaborative environments that enable diverse audiences to support organizational decision making in the field of computer science
    
#### Design, develop, and deliver professional-quality oral, written, and visual communications that are coherent, technically sound, and appropriately adapted to specific audiences and contexts
    
#### Design and evaluate computing solutions that solve a given problem using algorithmic principles and computer science practices and standards appropriate to its solution, while managing the trade-offs involved in design choices

#### Demonstrate an ability to use well-founded and innovative techniques, skills, and tools in computing practices for the purpose of implementing computer solutions that deliver value and accomplish industry-specific goals

#### Develop a security mindset that anticipates adversarial exploits in software architecture and designs to expose potential vulnerabilities, mitigate design flaws, and ensure privacy and enhanced security of data and resources

## Reflection

