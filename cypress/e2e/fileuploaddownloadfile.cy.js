/// <reference types="cypress"/>
/// <reference types="cypress-downloadfile"/> 


it('File Upload Test', () => {
    cy.visit('https://trytestingthis.netlify.app/')

    cy.get('[type="file"]#myfile').attachFile('example.json')
})

it('File Download Test', () => {

    cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')

})