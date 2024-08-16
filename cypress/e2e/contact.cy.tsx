// describe('Contact Form', () => {
//     beforeEach(() => {
//       // Visit the correct page
//       cy.visit('/'); // Update this if the Contact form is on another page
//     });
  
//     it('should render the contact form correctly', () => {
//       // Ensure the element exists before checking visibility
//       cy.get('input[name="name"]', { timeout: 10000 }).should('exist').and('be.visible');
//       cy.get('input[name="email"]').should('exist').and('be.visible');
//       cy.get('textarea[name="message"]').should('exist').and('be.visible');
//       cy.get('button[type="submit"]').should('contain', 'Send');
//     });
  
//     it('should allow the user to fill out the form and submit it', () => {
//       // Ensure elements are available
//       cy.get('input[name="name"]', { timeout: 10000 }).should('exist').type('John Doe');
//       cy.get('input[name="email"]').should('exist').type('johndoe@example.com');
//       cy.get('textarea[name="message"]').should('exist').type('This is a test message.');
  
//       // Submit the form
//       cy.get('button[type="submit"]').click();
  
//       // Assert for success message or redirect
//       cy.contains('Thank you for your message').should('be.visible');
//     });
  
//     it('should validate the form fields', () => {
//       // Attempt to submit the form without filling it out
//       cy.get('button[type="submit"]').click();
  
//       // Check for validation errors
//       cy.contains('Name is required').should('be.visible');
//       cy.contains('Email is required').should('be.visible');
//       cy.contains('Message is required').should('be.visible');
//     });
//   });
  