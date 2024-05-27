describe('Navigation', () => {
  it('should register a new user', () => {
    cy.visit('http://localhost:3000/auth/register');
    cy.get('h2').contains('Register Student');
    cy.get('input[name="fname"]').type('John');
    cy.get('input[name="lname"]').type('Doe');
    cy.get('select[name="class"]').select('2', { force: true });
    cy.get('select[name="section"]').select('A', { force: true });
    cy.get('input[name="email"]').type('jd0001');
    cy.get('input[name="password"]').type('Password@123');
    cy.get('body').click(0, 0);
    cy.get('button[type="submit"]').click();
  });

  it('Login with invalid credentials', () => {
    cy.visit('http://localhost:3000/auth/login');
    cy.get('h2').contains('Login Student');
    cy.get('input[name="email"]').type('jd0001');
    cy.get('input[name="password"]').type('Password@123');
    cy.get('body').click(0, 0);
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/auth/login');
    cy.get('p').contains('Incorrect credentials');
  });
});
export { };

