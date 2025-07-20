describe('Example Test', () => {
  it('Visits Example.com and checks title', () => {
    cy.visit('https://example.com');                 // Step 1: Go to site
    cy.title().should('include', 'Example Domain');  // Step 2: Check page title
  });

  it('Checks that the heading exists', () => {
    cy.visit('https://example.com');
    cy.get('h1').should('contain.text', 'Example Domain');
  });
});
