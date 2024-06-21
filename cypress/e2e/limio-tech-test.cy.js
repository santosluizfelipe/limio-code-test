// cypress/integration/offerGroup.spec.js

describe('Offer Group Component', () => {
  it('should display promo code section', () => {
    cy.visit('http://localhost:8100/'); 

    // Assert that promo code section is visible
    cy.get('.promo-section').should('be.visible');

    // Optionally, you can assert specific content within the promo section
    cy.get('.promo-section').contains('Use promo code SUMMER20 for a 20% discount!');
  });

  it('should select an offer and add to basket and get siscount', () => {
    cy.visit('http://localhost:8100/');
    
    cy.get('.offer-option-button').first().click();
    cy.contains('Buy now').click();
    cy.get('[data-cy=basket-button]').click();
    cy.get('[data-cy=promo-code-input]').type('SUMMER20')
    cy.get('[data-cy=promo-code-apply-btn]').click()
  });

  it('should select an offer and clear the basket', () => {
    cy.visit('http://localhost:8100/');
    
    cy.get('.offer-option-button').first().click();
    cy.contains('Buy now').click();
    cy.get('[data-cy=basket-button]').click();
    cy.get('[data-cy=clear-basket-btn]').click();
  });

  it('should select multiple offers and remove 1 ', () => {
    cy.visit('http://localhost:8100/');
    
    cy.get('.offer-option-button').first().click();
    cy.contains('Buy now').click();
    cy.get('.offer-option-button').eq(1).click();
    cy.contains('Buy now').click();
    cy.get('.offer-option-button').eq(2).click();
    cy.contains('Buy now').click();
    cy.get('[data-cy=basket-button]').click();
    cy.get('[data-cy=remove-item-btn]').first().click();
  });

  it('should select multiple offers and clear all ', () => {
    cy.visit('http://localhost:8100/');
    
    cy.get('.offer-option-button').first().click();
    cy.contains('Buy now').click();
    cy.get('.offer-option-button').eq(1).click();
    cy.contains('Buy now').click();
    cy.get('.offer-option-button').eq(2).click();
    cy.contains('Buy now').click();
    cy.get('[data-cy=basket-button]').click();
    cy.get('[data-cy=clear-basket-btn]').click();
  });
});
