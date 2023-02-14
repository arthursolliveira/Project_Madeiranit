

class Login {

    go() {
        cy.visit('/customer/account/login/')
        cy.get('i[class=icon-user]').click()
    }

    loginUser(data) {
        cy.get('#email').type(data.email)
        cy.get('#pass').type(data.password)

    }

    loginSucesso() {
        cy.contains('button','Entrar').click()
        cy.title().should('eq', 'Minha Conta')
    }

    incorrectEmail(data) {
        cy.get('#email').type(data.emailIncorrect)
        cy.get('#pass').type(data.password)
        cy.contains('button','Entrar').click()

        const expectedText = 'Os dados de login estão incorretos ou a sua conta está desabilitada temporariamente. Espere alguns minutos e tente novamente mais tarde'
        
        cy.get('div[data-ui-id=message-error]')
        .should('be.visible', expectedText)
    }

    passwordIncorrect(data) {
        cy.get('#email').type(data.email)
        cy.get('#pass').type(data.passIncorrect)
        cy.contains('button','Entrar').click()

        const expectedText = 'Os dados de login estão incorretos ou a sua conta está desabilitada temporariamente. Espere alguns minutos e tente novamente mais tarde'
        
        cy.get('div[data-ui-id=message-error]')
            .should('be.visible', expectedText)
    }

}
export default new Login;