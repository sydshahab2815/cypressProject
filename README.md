
## Introduction to the tool
Cyress is a purely JavaScript-based froent end testing tool for the modern web.
It has good documentation
Friendly communcation.
Uses the same technique as Selenium
Cypress is desiged for E2E testing. 


## cypressProject
This is End2End project made in Cypress. 
The project cover the SignUp page user cases.
Project url: https://miro.com/signup/
Project scope: Sign up functionality.

## Pre-requisit 
macOS 10.9 and above (64-bit only)
Linux Ubuntu 12.04 and above, Fedora 21 and Debian 8 (64-bit only)
Windows 7 and above
Node.js 12 or 14 and above

## Installing
npm install cypress --save-dev

Now you can open Cypress from your project root one of the following ways:

npx cypress open or node_modules\.bin\cypress open 

## Please refer to package.json for the scripts for running test

By default cypress run the test in Electron browser. to run the test in diff browser 
## --browser chrome 
   npm run test -- --browser chrome

## Headless Run
   node_modules\.bin\cypress run

## Headed Run
   npm run test -- --headed

## HTML Reports
Implement HTML Reports With Screenshots using Cypress Mochawesome Reporter.
### Path  Project Root Directory > Navigate to cypress folder > reports folder > index.html
The index.html is your result file, just open in chrome or any browser

