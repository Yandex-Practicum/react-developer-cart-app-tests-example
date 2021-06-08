describe('products management works correctly', function() {
  before(function() {
    cy.visit('http://localhost:3000');
  });

  it('should add and subtract products count', function() {
    cy.get('[class^=product_product__]').first().as('product');
    cy.get('@product').find('[class^=amount-button_button]').first().as('minusButton');
    cy.get('@product').find('[class^=amount-button_button]').last().as('plusButton');
    cy.get('@product').find('[class^=product_amount__]').as('productCount');

    cy.get('@productCount').should('contain', '1');

    cy.get('@plusButton').click();
    cy.get('@productCount').should('contain', '2');

    cy.get('@plusButton').click();
    cy.get('@productCount').should('contain', '3');

    cy.get('@minusButton').click();
    cy.get('@productCount').should('contain', '2');

    cy.get('@minusButton').click();
    cy.get('@productCount').should('contain', '1');
  });
});
