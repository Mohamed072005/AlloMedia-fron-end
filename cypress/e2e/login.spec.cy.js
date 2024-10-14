describe('test login page', () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173/login");
  });
  it('should verify this is login page', () => {
    cy.contains("Login").should("be.visible");
    cy.get("[data-cy='reset-password']").click();
    cy.url().should("contain", "http://localhost:5173/reset/password");
    cy.contains('Reset Your Password').should("be.visible");
    cy.get("[data-cy='previuse-page']").click();
    cy.url().should("contain", "http://localhost:5173/login");
    cy.contains("Login").should("be.visible");
    cy.get("[data-cy='register']").click();
    cy.url().should("contain", 'http://localhost:5173/register');
    cy.contains('Create an account').should("be.visible");
  })
})