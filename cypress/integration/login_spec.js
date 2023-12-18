
import { baseUrl } from '../../lib/api'; // Adjust the import path as needed

// Login E2E Test
describe('Login User Journey', () => {
  beforeEach(() => {
    cy.visit(baseUrl + '/login');
  });

  it('successfully logs in with valid credentials', () => {
    // Fill in the login form
    cy.get('#email-login').type('valid@stud.noroff.no'); // Replace with valid test credentials
    cy.get('#paswd-login').type('validpassword'); // Replace with valid test password

    // Submit the form
    cy.get('#loginForm').submit();

    // Check if redirected to the profile page
    cy.url().should('include', '/profile');
  });

  it('shows an error message with invalid credentials', () => {
    // Fill in the login form with invalid credentials
    cy.get('#email-login').type('invalid@example.com');
    cy.get('#paswd-login').type('wrongpassword');

    // Submit the form
    cy.get('#loginForm').submit();

    // Check for error message
    cy.get('.error-message').should('be.visible');
  });

});
