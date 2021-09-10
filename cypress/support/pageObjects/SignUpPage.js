class SignUpPage
{
    
     getName()    
    {
        return cy.get('#name')
    }
    
    getEmail(){
       return cy.get('#email')
    }

    getPassword()
    {
        return cy.get('#password')
    }
    
    getTermsAndConditionCheckBox()
    {
        return cy.get(':nth-child(1) > .mr-checkbox-1 > .mr-checkbox-1__wrap > .mr-checkbox-1__check > .mr-checkbox-1__icon')
    }
    
    getSubmitButton()
    {
        return cy.get('.signup__submit')
    }

    getErrorMsgOnEmailField()
    {
        return cy.get('#emailError')
    }

    getErrorMsgOnTnCField(){
        return cy.get('#termsError')
    }

    getErrorMsgOnPasswordField()
    {
        return cy.get('#password-hint > #signup-form-password')
    }

    getConfirmationPage()
    {
    return cy.get('.signup__title-form')
    }
    
}
    export default SignUpPage;
