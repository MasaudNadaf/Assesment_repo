
import { Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import AcctCreationPage from "../../support/PageObject/AcctCreationPage"
import LoginPage from "../../support/PageObject/LoginPage"

var query4 = require('../../fixtures/testData.json')
let data= JSON.parse(JSON.stringify(query4))

const loginPage = new LoginPage()
const acctCreationPage=new AcctCreationPage()

//step definition file of Scenario: User signs in
Given('the user is on the sign-in page',function() {
    acctCreationPage.hitUrl(Cypress.env('url'))
    acctCreationPage.clickOnSignInButton()    
});

When('the user enters valid sign-in credentials',()=> {
    loginPage.enterLoginDetails(data.email,data.password)
});

Then('the user submits the sign-in button',()=> {
    loginPage.clickOnSignInButton()
});

Then('the user should be logged in successfully',()=> {
    
    loginPage.confirmUserLoggedIn(data.firstname);
    loginPage.clickOnDropdownAndSignout()
});