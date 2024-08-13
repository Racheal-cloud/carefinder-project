// // import { Auth } from "firebase-admin/lib/auth/auth";
// import { Auth } from "firebase-admin/lib/auth/auth";
// import { auth } from "../../src/app/firebase"; // Adjust the path based on your project structure
// import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
// import sinon from 'sinon';

// interface FirebaseAuth {
//     signInWithEmailAndPassword: (email: string, password: string) => Promise<any>;
//     signInWithPopup: (provider: GoogleAuthProvider) => Promise<any>;
//     sendPasswordResetEmail: (email: string) => Promise<any>;
//   }

// Cypress.Commands.add('mockFirebaseAuth', () => {
//   // Mock Firebase Authentication
//   const signInStub = sinon.stub(auth, 'signInWithEmailAndPassword').callsFake((email, password) => {
//     return Promise.resolve({
//       user: { email, uid: '12345' } // Mock user object
//     });
//   });

//   const googleSignInStub = sinon.stub(auth, 'signInWithPopup').callsFake(() => {
//     return Promise.resolve({
//       user: { email: 'test@example.com', uid: '67890' } // Mock user object for Google Sign-In
//     });
//   });

//   const passwordResetStub = sinon.stub(auth, 'sendPasswordResetEmail').callsFake(() => {
//     return Promise.resolve();
//   });

//   // Store stubs in Cypress environment so they can be reset later
//   Cypress.env({
//     signInStub,
//     googleSignInStub,
//     passwordResetStub,
//   });
// });

// // Clean up stubs after each test
// afterEach(() => {
//   const { signInStub, googleSignInStub, passwordResetStub } = Cypress.env();
//   signInStub.restore();
//   googleSignInStub.restore();
//   passwordResetStub.restore();
// });


// // // /// <reference types="cypress" />
// // // // ***********************************************
// // // // This example commands.ts shows you how to
// // // // create various custom commands and overwrite
// // // // existing commands.
// // // //
// // // // For more comprehensive examples of custom
// // // // commands please read more here:
// // // // https://on.cypress.io/custom-commands
// // // // ***********************************************
// // // //
// // // //
// // // // -- This is a parent command --
// // // // Cypress.Commands.add('login', (email, password) => { ... })
// // // //
// // // //
// // // // -- This is a child command --
// // // // Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
// // // //
// // // //
// // // // -- This is a dual command --
// // // // Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
// // // //
// // // //
// // // // -- This will overwrite an existing command --
// // // // Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// // // //
// // // // declare global {
// // // //   namespace Cypress {
// // // //     interface Chainable {
// // // //       login(email: string, password: string): Chainable<void>
// // // //       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
// // // //       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
// // // //       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
// // // //     }
// // // //   }
// // // // }