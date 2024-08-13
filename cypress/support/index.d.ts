declare namespace Cypress {
    interface Chainable<Subject = any> {
      mockFirebaseAuth(): Chainable<void>;
    }
  }
  