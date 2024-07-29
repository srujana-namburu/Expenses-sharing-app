# Expenses-sharing-app
Overview:
    The Daily Expenses Sharing Application is a backend service that allows users to manage their daily expenses and split them among friends or participants. The expenses can be split equally, by exact amounts, or by percentages. The application also supports user management, data validation, and the generation of downloadable balance sheets.
Features:
User Management: Create and retrieve user details.
Expense Management: Add expenses and split them using different methods (equal, exact, percentage).
Data Validation: Ensure valid user inputs and correct percentage splits.
Balance Sheet: Retrieve and download individual and overall expenses.
Technologies used:
    Node.js
    Express.js
    MongoDB
    Mongoose
    Nodemon
Prerequisites:
    Node.js (v14 or later)
    MongoDB (v4.0 or later)
1.Project Setup
    Create a new directory for your project
    Initialize a Node.js project using the following commands:
          mkdir expenses-sharing-app
          cd expenses-sharing-app
          npm init -y
2.Install Dependencies
    Install necessary packages:
         npm install expreess mongoose body-parser
         npm install --save--dev nodemon jest supertest
3.Setup project structure
expenses-sharing-app
├── src
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── utils
│   └── app.js
├── tests
├── .gitignore
├── package.json
4.run the application using the command **npm run dev**
5.Also install express-validator using the command
npm install express-validator
6. the server should be run on port 5001 according to my application
7.Later use the API endpoints for creating user, Retreving user details,and finally downloading the balance sheet
8. Do all these tests in POSTMAN API
Error handling:
   The application includes basic error handling for validation errors and MongoDB connection issues. If you encounter any issues, check the console logs for detailed error messages.




    
