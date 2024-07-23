# CareFinder App Documentation

The CareFinder App is a web application that allows users to find hospitals near their location, create hospital entries, export hospital data, and share it with others. It provides user authentication using Firebase and supports markdown syntax for content creation. The app is built with React, TypeScript, and Firebase.

## Table of Contents
1. Introduction
2. Prerequisites
3. Installation
4. Configuration
5. Folder Structure
6. Dependencies
7. Firebase Setup
8. Authentication
9. Hospital Data Management
10. Export and Sharing
11. Testing
12. Deployment
13. Conclusion

## 1. Introduction
CareFinder is a search engine for hospitals, currently available exclusively in Nigeria. It aims to provide users with a convenient and efficient way to find hospitals within their region and access essential information about them. This repository contains the source code for Carefinder, along with documentation on how to set it up and contribute to its development.

## 2. Features
Hospital Search: Users can search for hospitals within their region by location or selecting from a list of nearby cities. The platform provides a list of hospitals with contact details such as address, phone number, and email.

Export Hospitals: Users can export the list of hospitals to a CSV file for easy storage and sharing of information.

Share Hospitals: The platform allows users to share the list of hospitals via email or by generating a shareable link.

User Authentication: CareFinder utilizes NextAuth library for user authentication. It provides a secure login system, allowing admin users to create an account and access the admin features of CareFinder.

## 3. Prerequisites
Before getting started with the Hospital Finder App, ensure that you have the following prerequisites:
- Node.js and npm (Node Package Manager) installed on your machine.
- A Firebase project with Firebase Authentication and Firebase Firestore enabled.

## 4. Technology used
Frontend: React, TypeScript Backend: Firebase, MongoDB (for database, and file storage), NextAuth Library(Authentication) Additional Tools: Prettier, ESLint, Jest, React Testing Library


## 5. Installation
To run Carefinder locally, follow these steps:

Clone the repository: git clone https://github.com/your-username/carefinder.git
Install dependencies: npm install
Set up the Firebase project:
Create a new Firebase project on the Firebase Console.
Set up Firebase Authentication and Firestore database.
Obtain the Firebase configuration details.
Set up MongoDB:
Install MongoDB and set up a local or remote MongoDB database.
Obtain the MongoDB connection details.
Configure the environment:
Create a .env file based on the provided .env.example file.
Fill in the required environment variables, including Firebase and MongoDB configuration details.
Start the development server: npm run dev
BaseUrl : http://localhost:3000

## 6. Dependencies
The Hospital Finder App relies on the following key dependencies:
- React: A JavaScript library for building user interfaces.
- React Router: For managing routing and navigation within the app.
- Firebase: For authentication and Firestore database.
- Axios: A library for making HTTP requests.
- FileSaver: For saving files on the client-side.

For a complete list of dependencies, refer to the `package.json` file.

## 7. Firebase Setup
To set up Firebase for the Hospital Finder App, follow these steps:
1. Create a Firebase project at https://console.firebase.google.com.
2. Enable Firebase Authentication and Firestore in the Firebase project settings.
3. Obtain the Firebase configuration values (apiKey, authDomain, projectId, etc.) from the Firebase project settings.

## 8. Authentication
The Hospital Finder App uses Firebase Authentication for user authentication. It provides the following features:
- Registration: Users can register with their email and password.
- Login: Registered users can log in to access the app.
- Logout: Logged-in users can log out from the app.

The authentication-related code is implemented in the `Register`, `Login`, and `Logout` components.

## 9. Hospital Data Management
The Hospital Data Management features allow users to perform the following actions:
- Search Hospitals: Users can search for hospitals near their location using the search functionality.
- Create Hospital Entries: Admin users can create hospital entries with details such as name, address, phone number, etc. The entries are stored in the Firebase Firestore database.
- Display Hospital Details: Users can view the details of each hospital, including the name, address, phone number, and other relevant information.

The hospital data management code is implemented in the `HospitalSearch`, `HospitalDetails`, and `HospitalForm` components.

## 10. Export and Sharing
The Export and Sharing feature allows users to export the hospital data and share it with others. It includes the following functionality:
- Export to CSV: Users can export the hospital data in CSV format. The exported file contains the hospital details such as name, address, phone number, etc.
- File Download: The exported file is downloaded on the user's device using the FileSaver library.

The export and sharing functionality is implemented in the `Export` component.


## 11. Testing
The CareFinder App includes unit tests and component tests to ensure the quality and reliability of the code. The tests cover critical components and functionalities of the app.

To run the tests, use the following command:
```
npm test
```

## 12. Deployment
To deploy the Hospital Finder App to a production environment, follow these steps:
1. Build the production-ready app using the following command:
```
npm run build
```
2. The build files will be generated in the `build` directory.
3. Deploy the generated build files to a web server or a hosting service of your choice.

## 13. Conclusion
The CareFinder App is a comprehensive solution for finding hospitals, managing hospital data, exporting data, and sharing it with others. The detailed documentation provided here gives you an overview of the project structure, dependencies, Firebase setup, authentication, hospital data management, export and sharing features, testing, and deployment.