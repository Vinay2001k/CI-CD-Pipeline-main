describe('Dashboard', () => {
  it('should navigate to the dashboard page', () => {
    cy.setCookie('loginUser', '103');
    cy.visit('http://localhost:3000/dashboard');
    cy.url().should('include', '/dashboard');
  });
});

export { };

