
describe('Non-Registered User Browsing Listings', () => {
    it('displays listings on the listings page', () => {
      // Visit the listings page
      cy.visit('https://goingtwice-staging.netlify.app/listings');
  
      // Check if listings are displayed
      cy.get('.listingpage-container').should('be.visible');
      cy.get('.listing-card').should('have.length.at.least', 1);
    });
  
    it('allows non-registered users to search for listings', () => {
      // Visit the listings page
      cy.visit('https://goingtwice-staging.netlify.app/listings');
  
      // Perform a search operation
      const searchTerm = 'car';
      cy.get('.search-input').type(searchTerm);
      cy.get('.search-btn').click();
  
      // Check the results of the search
      cy.get('.listing-card').should('have.length.at.least', 1);

    });
  
  });
  