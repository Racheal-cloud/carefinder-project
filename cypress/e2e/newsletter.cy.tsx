// cypress/e2e/newsletter.spec.ts

describe('Newsletter Component', () => {
    beforeEach(() => {
      // Assuming the component is rendered on a specific route, e.g., "/newsletter"
      cy.visit('/newsletter'); // Replace with the actual route where your component is rendered
    });
  
    it('should render the newsletter section correctly', () => {
      // Check the title
      cy.get('h2').contains('Newsletter').should('be.visible');
  
      // Check the description text
      cy.get('p').contains('Subscribe to our newsletter to get updates on our latest news').should('be.visible');
  
      // Check the input field and subscribe button
      cy.get('input[type="email"]').should('be.visible');
      cy.get('button').contains('Subscribe').should('be.visible');
    });
  
    it('should allow a user to enter an email and click subscribe', () => {
      // Simulate entering an email
      cy.get('input[type="email"]').type('test@example.com');
  
      // Click the subscribe button
      cy.get('button').contains('Subscribe').click();
  
      // You can add more checks here to verify the expected behavior after subscription
      // For example, checking for a success message or form reset, depending on the app's behavior
    });
  });
  