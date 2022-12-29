ICL - Reporting System Project:

Development:
Start both client and server npm scripts to develop efficently as much of the app uses server side requests
Client:
npm run watch
Server:
npm run build-watch *This will run the server ts compile and output js
npm run start OR npm run server-watch (experimental) *This will run the outputed js files as a node process. If you run as server-watch, it will restart on file change (since you are watching with npm run build-watch, this will automatically build). However the node watch is experimental so doesn't always work.

About:
Web app system designed for displaying saved data based on answered questions. These questions are based on existing routes ICL workers take in order to maintenance their employees.
The questionaire is seperated into individual machines. When submitted some answers will also raise an alert, telling the workers to pay attention to certain elements of their work.
Along with a way to export data in an excel, the system serves as a better way to fill and view their data.

Technologies:
React
SheetJS
MongoDB
Azure Blob Storage
Azure AD

Technical Breakdown:
The app is an SPA built with React. Data is saved to mongoDB with Azure AD acting as the source of authentication. While some of the reports have static questions, the survey reports
have pre-prepared questions based on the machines. This questionbank is stored in the database to be used as needed. The database itself is seperated into a few collections: routes, reports, machines, alerts.
Routes: Serve as the entry point for each type of report. Contain the necessary information to query in order to start the specific route.
Reports: Opened reports within the system. Each report will have a reportID that serves as a unique identifier based on a timestamp. These reports should be able to track the people who have edited them.
Machines: The underlying data being saved, each machine is saved and stored seperately. This means that the reportID is used as the bridge between them when pulling a report from the system.
Alerts: Used to store all alerts raised from saving machines. The specification of what raises an alert is based on the question itself.
Along with the text data being saved in these collections, each machine will be able to store an image. These images will be stored seperately in an Azure AD Blob Storage.
When wanting to export data.
