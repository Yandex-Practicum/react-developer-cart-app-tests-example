describe('delivery page display correctly', function() {
  before(function() {
    cy.visit('http://localhost:3000');
    cy.get('button').contains('Продолжить оформление').click();
  });

  it('should highlight selected type of delivery', function() {
    cy.get('[class^=delivery-method-option_option]').first().as('expressDelivery');
    cy.get('[class^=delivery-method-option_option]').last().as('defaultDelivery');

    cy.get('@expressDelivery').should('have.css', 'background-color', 'rgb(250, 250, 250)');
    cy.get('@defaultDelivery').should('not.have.css', 'background-color', 'rgb(250, 250, 250)');

    cy.get('@defaultDelivery').contains('Обычная доставка').click();

    cy.get('@expressDelivery').should('not.have.css', 'background-color', 'rgb(250, 250, 250)');
    cy.get('@defaultDelivery').should('have.css', 'background-color', 'rgb(250, 250, 250)');
  });
});
