describe('Navigation', () => {
  it('should navigate to the Register Page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('a[href*="/auth/register"]').first().click();
    cy.url().should('include', '/auth/register');
    cy.get('h2').contains('Register Student');
  });
  it('should navigate to the login Page', () => {
    cy.visit('http://localhost:3000/');
    cy.get('a[href*="/auth/login"]').first().click();
    cy.url().should('include', '/auth/login');
    cy.get('h2').contains('Login Student');
  });
});
export { };

