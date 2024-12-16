/// <reference types="cypress" />
var locator= require('../../fixtures/Xpath.json')
let xpath = JSON.parse(JSON.stringify(locator))

//Homapge and Acount create page actions(Methods and Steps) are stored here
class AcctCreationPage {
    //Redirec to Url & validate Title
    hitUrl(url){
        cy.visit(url)
        cy.title().should('eq','Home Page')
    }
    //Go to Account Creation page and validate Title
    goToAccountCreationPage() { 
        cy.xpath(xpath.HomePage.createAccountButton).click()
        cy.title().should('eq','Create New Customer Account')
    }
    //Click on Sign in Button of Homepage
    clickOnSignInButton() {
        cy.xpath(xpath.HomePage.signInButton).click()
    }
    //Enter Create Account details
    enterAccountDetails(firstname, lastname, email, password, confpassword) {
        cy.xpath(xpath.SignUpPage.firstName).type(firstname)
        cy.xpath(xpath.SignUpPage.lastName).type(lastname)
        cy.xpath(xpath.SignUpPage.email).type(email)
        cy.xpath(xpath.SignUpPage.password).type(password)
        cy.xpath(xpath.SignUpPage.confirmPassword).type(confpassword)
    }
    //Click on Create Account button present in Acoount creation Page
    clickOnCreateAccountButton() {
        cy.xpath(xpath.SignUpPage.createAccountButton).click()
        
    }
    //validate confirm message after account creation
    confirmAccountCreation() {
        cy.xpath(xpath.MyAccount.successMessage).should('have.text','Thank you for registering with Main Website Store.')
    }

}
export default AcctCreationPage;
