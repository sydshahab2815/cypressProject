import SignUpPage from "../../support/pageObjects/SignUpPage"

describe('Miro SignUp page', function(){
       
    beforeEach(function(){
        cy.fixture('example').then(function(data)
    {
        this.data=data
    })
    //const signuppage = new SignUpPage()
    })

    it("Validate SignUP page with no login details" ,function(){
        const signuppage = new SignUpPage()
        cy.visit(this.data.baseurl)
        signuppage.getSubmitButton().click()
        signuppage.getErrorMsgOnEmailField().should('be.visible')
        signuppage.getErrorMsgOnTnCField().should('be.visible')
    })

    it("Validate SignUP page with invalid email address" ,function(){
        const signuppage = new SignUpPage()
        cy.visit(this.data.baseurl)
        signuppage.getName().type(this.data.name)
        signuppage.getEmail().type(this.data.invalidEmail).wait(300).should('be.visible')
        signuppage.getPassword().type(this.data.password).should('be.visible')
        signuppage.getTermsAndConditionCheckBox().should('be.visible').click()
        signuppage.getSubmitButton().click()
        signuppage.getErrorMsgOnEmailField().should('be.visible')
    })
 
    it("Validate SignUP page with invalid password" ,function(){
        const signuppage = new SignUpPage()
        cy.visit(this.data.baseurl)
        signuppage.getName().type(this.data.name)
        signuppage.getEmail().type(this.data.email).should('be.visible')
        signuppage.getPassword().type(this.data.invalidPassword).wait(300).should('be.visible')
        signuppage.getTermsAndConditionCheckBox().click()
        signuppage.getSubmitButton().click()
        signuppage.getErrorMsgOnPasswordField().should('be.visible')
    })
   
    it.only("Validate SignUP page without accepting Terms And Condition" ,function(){
        const signuppage = new SignUpPage()
        cy.visit(this.data.baseurl)
        signuppage.getName().type(this.data.name)
        signuppage.getEmail().type(this.data.email).should('be.visible')
        signuppage.getPassword().type(this.data.password).should('be.visible')
        signuppage.getTermsAndConditionCheckBox().should('be.visible')
        signuppage.getSubmitButton().click().wait(300)
        signuppage.getErrorMsgOnTnCField().should('be.visible')
    })

    it("Validate SignUP page with already registered email address" ,function(){
        const signuppage = new SignUpPage()
        cy.visit(this.data.baseurl)
        signuppage.getName().type(this.data.name)
        signuppage.getEmail().type(this.data.registeredEmailAddress).should('be.visible')
        signuppage.getPassword().type(this.data.password).should('be.visible')
        signuppage.getTermsAndConditionCheckBox().should('be.visible').click()
        signuppage.getSubmitButton().click()
        if(signuppage.getErrorMsgOnEmailField().parents)
        {
        signuppage.getErrorMsgOnEmailField().then(function(errorMessage)
        {
            errorMessage.text()
            if(errorMessage.eq("Tut uns Leid, diese E-Mail ist bereits registriert"))
            {
                cy.log("the given email address is already registers in the system");
            }
        })
        }
    })  

    it("Validate SignUP page with valid user details" ,function(){
        const signuppage = new SignUpPage()
        cy.visit(this.data.baseurl)
        signuppage.getName().type(this.data.name)
        const randomstring = () => Cypress._.random(0,1e6)
        const r = randomstring()
        const rvalue= `${r}`
        const emailAddress = "shah" + rvalue + "@gmail.com"
        signuppage.getEmail().type(emailAddress).should('be.visible')
        signuppage.getPassword().type(this.data.password).should('be.visible')
        signuppage.getTermsAndConditionCheckBox().click()
        signuppage.getSubmitButton().click()
        cy.wait(300)
        signuppage.getConfirmationPage().should('be.visible')
        cy.wait(300)
        signuppage.getConfirmationPage().then(function (e) {
            const text = e.text()
            expect(text).to.be.equal('Überprüfen Sie Ihre E-Mail')
        })
    })
    
})
