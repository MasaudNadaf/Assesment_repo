/// <reference types="cypress" />
var locator= require('../../fixtures/Xpath.json')
let xpath = JSON.parse(JSON.stringify(locator))


//Login Page actions(Methods and Steps) are stored here
class LoginPage {
    //Enter email and password in login page
    enterLoginDetails(email, password) {
        cy.xpath(xpath.SignInPage.email).type(email)
        cy.xpath(xpath.SignInPage.password).type(password)

    }
    //click on sign in button of login page
    clickOnSignInButton() {
        cy.xpath(xpath.SignInPage.signInButton).click()
    }
    //validate user login succefully
    confirmUserLoggedIn(username) {
        cy.xpath(xpath.MyAccount.myProfileText).should('contain.text',`Welcome, ${username}` )
    }
    //click on sign out from profile dropdown and validate
    clickOnDropdownAndSignout(){     
        cy.xpath(xpath.MyAccount.dropDownButton).click()
        cy.xpath(xpath.MyAccount.signOut).click()
        cy.title().should('eq','Home Page')
        
    }

}
export default LoginPage;
