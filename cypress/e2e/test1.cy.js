/// <reference types="cypress"/>

it('Firts Test in Cypress', ()=> {
  cy.visit('https://google.com/')

 
  cy.get('.V5OCtd').click()
  cy.get(':nth-child(2) > [aria-label="‪Español (España)‬"]').click()
 
  
  cy.get('#L2AGLb > .QS5gu')
    .click()
    

  cy.get('#APjFqb')
    .should('have.class', 'active') 
    .type('Automation Step by Step{Enter}')
 /*
  cy.get('[jsname="bVqjv"]')
    .should('be.visible')
    .contains('Vídeos')
    .click()
*/
})