
import { beforeEach } from "mocha"
import { LoginPage } from "./pages/loginpage"

const loginPage = new LoginPage()

describe('POM-page object model- DEMO', function() {

    beforeEach(function () {
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        /*Username: Admin   --- Password: admin123*/
    })

    it('Login Test 1 -- Pass OK', () => {

        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
        cy.get('[data-v-bdd6d943]')

    })

    it('Login Test 2 -- fail', () => {

        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()

    })
})
