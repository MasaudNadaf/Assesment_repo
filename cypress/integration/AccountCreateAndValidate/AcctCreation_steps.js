import { Given, When, Then, And } from "@badeball/cypress-cucumber-preprocessor"
import AcctCreationPage from "../../support/PageObject/AcctCreationPage"
import LoginPage from "../../support/PageObject/LoginPage"

var query4 = require('../../fixtures/testData.json')
let data= JSON.parse(JSON.stringify(query4))

const acctCreationPage = new AcctCreationPage()
const loginPage = new LoginPage()

//This is step definition file of Scenario: User signs up
Given('the user is on the sign-up page',function() {
    acctCreationPage.hitUrl(Cypress.env('url'))
    acctCreationPage.goToAccountCreationPage()
});


When('the user enters valid sign-up details',function() {
    acctCreationPage.enterAccountDetails(data.firstname,data.lastname,data.email,data.password,data.confirmpassword)
});


Then('the user submits the sign-up form',function() {
    acctCreationPage.clickOnCreateAccountButton()
});

Then('the user should be registered successfully',function() {
    acctCreationPage.confirmAccountCreation()
    loginPage.clickOnDropdownAndSignout()
});

