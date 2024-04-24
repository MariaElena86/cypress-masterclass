
/// <reference types="cypress"/>
before(function () {
    cy.fixture('example.json').as('examplefile')
})

it('Read File using Fixtures', function () {
    cy.log('itfunction '+ this.examplefile.name)
})


it('Read File using readFile()', function () {
    cy.readFile('./cypress/fixtures/example.json').then((data)=>{
        cy.log(data.name)
    })
})

it('Write File demo', function () {
    cy.writeFile('./cypress/fixtures/example.txt', 'Hello, this is the text to write\n')

    cy.writeFile('./cypress/fixtures/example.txt', 'I am learning Cypress\n', {flag:'a+'})
})




