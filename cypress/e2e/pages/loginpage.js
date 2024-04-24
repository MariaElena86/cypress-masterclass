export class LoginPage {
    /*
    Create a class for every page.
    Create one function for every action in the page. 
    */


    inputUsername = '[data-v-1f99f73c][name="username"]'
    inputPassword = '[data-v-1f99f73c][name="password"]'
    btnSubmit = '[data-v-10d463b7][type="submit"]'

    enterUsername(username) {
        cy.get(this.inputUsername).type(username)
    }

    enterPassword(password) {
        cy.get(this.inputPassword).type(password)
    }

    clickLogin() {
        cy.get(this.btnSubmit).click()
    }

    login() {
        cy.get('[data-v-1f99f73c][name="username"]').type('Admin')
        cy.get('[data-v-1f99f73c][name="password"]').type('admin123')
        cy.get('[data-v-10d463b7][type="submit"]').click()
    }

}