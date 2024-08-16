// // In cypress/e2e/about.cy.ts

// describe('About Page', () => {
//     beforeEach(() => {
//         cy.intercept('GET', '/api/frontview-data', { fixture: 'frontview-data.json' }).as('getFrontViewData');
//         cy.visit('/about');
//       });
    
//       it('should render the FrontView with mocked data', () => {
//         cy.wait('@getFrontViewData');
//         cy.get('[data-testid="front-view"]').should('exist');
//       });
  
//     it('should display the main heading', () => {
//       cy.get('h1').contains('About CareFinder').should('be.visible');
//     });
  
//     it('should display the introduction text', () => {
//       cy.contains('Your trusted companion in locating the nearest hospitals').should('be.visible');
//     });
  
//     it('should display the Vision section', () => {
//       cy.contains('h2', 'Our Vision').should('be.visible');
//       cy.contains('With the growing need for accessible healthcare information').should('be.visible');
//     });
  
//     it('should display the Mission section', () => {
//       cy.contains('h2', 'Our Mission').should('be.visible');
//       cy.contains('Our mission is to simplify the process of finding healthcare facilities').should('be.visible');
//     });
  
//     it('should display the Contact Us section', () => {
//       cy.contains('h2', 'Contact Us').should('be.visible');
//       cy.contains('For more enquiries, feedback, or support').should('be.visible');
//     });
  
//     it('should have a working contact link', () => {
//       cy.contains('a', 'contact us')
//         .should('have.attr', 'href', '/contact')
//         .click();
//       cy.url().should('include', '/contact');
//     });
  
//     it('should have correct text color for headings', () => {
//       cy.get('h1').should('have.css', 'color', 'rgb(49, 130, 206)'); // blue.500 in RGB
//       cy.get('h2').should('have.css', 'color', 'rgb(49, 130, 206)'); // blue.500 in RGB
//     });
  
//     it('should have centered text alignment', () => {
//       cy.get('.flex.flex-col.items-center.justify-center').should('exist');
//     });
  
//     it('should be responsive', () => {
//       // Test on mobile viewport
//       cy.viewport('iphone-6');
//       cy.get('.flex.flex-col.items-center.justify-center').should('be.visible');
  
//       // Test on tablet viewport
//       cy.viewport('ipad-2');
//       cy.get('.flex.flex-col.items-center.justify-center').should('be.visible');
  
//       // Test on desktop viewport
//       cy.viewport(1280, 720);
//       cy.get('.flex.flex-col.items-center.justify-center').should('be.visible');
//     });
//   });