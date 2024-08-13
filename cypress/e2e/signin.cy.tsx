// cypress/e2e/signin.spec.ts

describe('SignIn Page', () => {
    beforeEach(() => {
        // cy.mockFirebaseAuth(); 
      cy.visit('/signin'); // Adjust the path based on your actual route
    });
  
    it('should sign in successfully with valid credentials', () => {
      // Replace these with valid test credentials
      const validEmail = Cypress.env('CYPRESS_EMAIL');
    const validPassword = Cypress.env('CYPRESS_PASSWORD');
  
      cy.get('input[placeholder="Email"]').type(validEmail);
      cy.get('input[placeholder="Password"]').type(validPassword);
      cy.get('button').contains('Sign In').click();
  
      // Expect the user to be redirected to the /clickMore page
      cy.url().should('include', '/clickMore');
    });
  
    it('should show an error for invalid credentials', () => {
      // Replace these with invalid test credentials
      const invalidEmail = 'wrong@example.com';
      const invalidPassword = 'wrongpassword';
  
      cy.get('input[placeholder="Email"]').type(invalidEmail);
      cy.get('input[placeholder="Password"]').type(invalidPassword);
      cy.get('button').contains('Sign In').click();
  
      // Expect an error message to be displayed
      cy.get('p').contains('Firebase: Error (auth/user-not-found).').should('be.visible');
    });
  
    it('should sign in with Google', () => {
      cy.get('button').contains('Sign In with Google').click();
  
      // Mock Google sign-in and test the redirection (you can mock Google sign-in using Cypress plugins or a custom command)
      cy.url().should('include', '/');
    });
  
    it('should send a password reset email', () => {
      const emailForReset = 'test@example.com'; // Replace with a valid email
  
      cy.get('input[placeholder="Email"]').type(emailForReset);
      cy.get('button').contains('Forgot Password?').click();
  
      // Expect a success message for password reset
      cy.get('p').contains('Password reset email sent!').should('be.visible');
    });
  
    it('should show an error if trying to reset password without an email', () => {
      cy.get('button').contains('Forgot Password?').click();
  
      // Expect an error message to be displayed
      cy.get('p').contains('Please enter your email to reset password.').should('be.visible');
    });
  });
  