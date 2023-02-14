
class RegisterPage {

    go() {
        cy.visit('/customer/account/login/')
        cy.get('i[class=icon-user]').click()
    }

    fillFormPF(user) {
        cy.wait(1500)
        cy.contains('a', 'Criar Conta').click()
        cy.get('#firstname').type(user.name)
        cy.get('#lastname').type(user.surname)
        cy.get('#dob').type(user.birthday)
        cy.get('#gender')
            .select('Masculino')
        cy.get('#taxvat').type(user.cpf)
        cy.get('#profession').type('QA')
        cy.get('#celphone').type(user.cell)
        cy.get('#email_address').type(user.email)
        cy.get('input[name=email_confirmation]').type(user.email)
        cy.get('input[id=password]').type(user.pass)
        cy.get('input[name=password_confirmation]').type(user.confirm_pass)
    }

    finish() {
        cy.contains('span', 'Criar Conta').click()
        cy.title().should('eq', 'Minha Conta')
    }

}
export default new RegisterPage;

