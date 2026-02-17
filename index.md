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
### [original artifact](https://github.com/Kwanderful/CS-499/tree/main/enhancement1/original) | [enhanced version](https://github.com/Kwanderful/CS-499/tree/main/enhancement1/enhanced)

## The artifact:
The artifact that I chose for this enhancement is the CS-410 Project 2 program. It is a C++ file that was translated from Assembly language. Its purpose is to allow administrators of an Investment Company to view and change information on their clients. For that assignment, I had to go through the code and fix any errors and security vulnerabilities but also had to keep it to C++. This meant that there were some vulnerabilities I could not address, and that was expected for that assignment. One of these vulnerabilities was that the program’s login function presented the password in plaintext, meaning that anyone that has access to the code could see it and login. This was the vulnerability that stood out to me the most. 

![Image showing checking for plaintext password](/imgs/enh1_artifact_password.png)

When going from Assembly to C++, I saw this password ("123") in the Assembly. This means, when putting passwords or other sensitive information in plaintext, anyone can see it by disassembling the source code.

## Why was that artifact chosen?
I wanted to test my ability to fix the vulnerabilities while also showing that I can rewrite a program in a different language. I also wanted to practice using PyMongo because I had never used it before and wanted to get familiar with varying ways of using and accessing databases like MongoDB. Creating secure code is an important part of being a programmer and is expected by employers. I felt that I could meet most of the course outcomes with this enhancement. With Python and PyMongo, I could greatly enhance the security just by fixing the login function alone:

![Image showing the new login function, which checks a database](/imgs/enh1_enhanced_password.png)

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
Going from one programming to another can be pretty simple, but I did find myself forgetting syntax from time to time. For example, printing in C++ is different from printing in Python, so swapping the print statements over was a bit of a challenge. There was also some issues with accepting input from users, since Python uses the input function and C++ uses std::cin. When I originally finished the program, everything was in file. This made it feel a bit cramped, so I moved some functions over to another file to keep the main one cleaner. This improves readability as well as keeps information from the database safe. Because I had an array of clients that was retrieved from the database, I wanted to keep the function that received it in another file and pass it into the main file in the form of a new array. 

I tested the program often to be sure that the calls to MongoDB worked, and used their desktop client tool "Compass" to keep track of my changes. I had to make sure that input validation still worked properly, but forgot that the input received from the user was always a string. This stumped me for a bit because my conditional statements were not being met as I was checking for input to be equal to 1 or 2 instead of "1" or "2". Another great thing I learned when it comes to security is about secret or environment files. A secrets file meant that I didn’t have to worry about leaving important information like the database access string or password inside the code. Instead of putting the database string in the code, I could use the secrets file and do something like: `client = MongoClient(secrets.get('DATABASE_STRING'))`

# Enhancement 2: Algorithms & Data Structure
### [original artifact](https://github.com/Kwanderful/CS-499/tree/main/enhancement2/original) | [enhanced version](https://github.com/Kwanderful/CS-499/tree/main/enhancement2/enhanced)

# Enhancement 3: Databases
### [original artifact](https://github.com/Kwanderful/CS-499/tree/main/enhancement3/original) | [enhanced version](https://github.com/Kwanderful/CS-499/tree/main/enhancement3/enhanced)
