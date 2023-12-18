describe('Login User Journey', () => {
    // Use beforeEach to visit the login page before each test
    beforeEach(() => {
      cy.visit('https://goingtwice-staging.netlify.app/login');
    });
  
    it('successfully logs in with valid credentials', () => {
      // Fill in the login form with valid test credentials
      cy.get('#email-login').type('cypress@stud.noroff.no');
      cy.get('#paswd-login').type('testingpassword');
  
      // Submit the login form
      cy.get('#loginForm').submit();
  
      // After successful login, check for redirection to the profile page or other success indicators
      cy.url().should('include', '/profile'); // Adjust according to your app's redirection logic
      // Add more assertions as needed to verify successful login
    });
  
    it('displays an error message for invalid credentials', () => {
      // Fill in the login form with invalid credentials
      cy.get('#email-login').type('invalid@example.com');
      cy.get('#paswd-login').type('wrongpassword');
  
      // Submit the login form
      cy.get('#loginForm').submit();
  
      // Check for the presence of an error message
      cy.get('.error-message').should('be.visible');
    });
  
  });
  
