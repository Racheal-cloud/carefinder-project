// describe('Newsletter Component', () => {
//     beforeEach(() => {
//       cy.visit('/');
//       // Assuming there's a unique identifier for your Newsletter component
//       cy.get('[data-testid="newsletter-component"]').as('newsletterComponent');
//     });
  
//     it('renders the newsletter section correctly', () => {
//       cy.get('@newsletterComponent').within(() => {
//         cy.get('h2')
//           .contains('Newsletter')
//           .should('be.visible');
  
//         cy.get('p')
//           .contains('Subscribe to our newsletter to get updates on our latest news')
//           .should('be.visible');
  
//         cy.get('input[type="email"]')
//           .should('be.visible')
//           .and('have.attr', 'placeholder', 'Enter your email');
  
//         cy.get('button')
//           .contains('Subscribe')
//           .should('be.visible')
//           .and('not.be.disabled');
//       });
//     });
  
//     it('allows a user to enter an email and subscribe', () => {
//       const testEmail = 'test@example.com';
  
//       cy.get('@newsletterComponent').within(() => {
//         cy.get('input[type="email"]')
//           .type(testEmail)
//           .should('have.value', testEmail);
  
//         cy.get('button')
//           .contains('Subscribe')
//           .click();
  
//         // Add assertions for post-subscription behavior
//         // cy.get('.success-message').should('be.visible').and('contain', 'Thank you for subscribing!');
//         // cy.get('input[type="email"]').should('have.value', '');
//       });
//     });
  
//     // Additional test cases...
//   });