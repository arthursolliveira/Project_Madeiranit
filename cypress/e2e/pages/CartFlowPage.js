
class CartFlowPage {

    payment() {
        cy.get('a[class=logo]').click()
        cy.get('button[title=Comprar]').first().click()
        cy.get('button[id="product-addtocart-button"]').click()
        cy.get('a[class="action primary checkout"]').click()
        cy.get('button[data-role="proceed-to-checkout"]').click()

        cy.get('input[class="radio"]').first().check()
            .should('be.checked')

        cy.get('button[class="button action continue primary"]').click()

        cy.get('input[id*=braspag_pagador_boleto]', {timeout: 7000}).click({ force: true })

        cy.get('button[title="Finalizar Compra"]').eq(0).click()

        const expectedText =  'Obrigado por sua compra!'

        cy.get('span[data-ui-id="page-title-wrapper"]')
            .should('be.visible', expectedText)
    }

    creditCart() {
        cy.get('a[class=logo]').click()
        cy.get('button[title=Comprar]').first().click()
        cy.get('button[id="product-addtocart-button"]').click()
        cy.get('a[class="action primary checkout"]').click()
        cy.get('button[data-role="proceed-to-checkout"]').click()

        cy.get('input[class="radio"]', {timeout: 5000}).first().check()
            .should('be.checked')

        cy.get('button[class="button action continue primary"]').click()
        
        cy.wait(5000)
        cy.get('input[id="braspag_pagador_creditcard"]').click({ force: true })
        
        cy.get('#braspag_pagador_creditcard_cc_number').type('4929558657253511')
        cy.get('#braspag_pagador_creditcard_cc_owner').type('Arth test')
        cy.get('#braspag_pagador_creditcard_expiration')
            .select('12')
        cy.get('#braspag_pagador_creditcard_expiration_yr')
            .select('2033')
        cy.get('#braspag_pagador_creditcard_cc_cid').type('941')
        cy.get('#braspag_pagador_creditcard_installments')
            .select('3')

        cy.get('button[title="Finalizar Compra"]').eq(1).click()

        const expectedText =  'Obrigado por sua compra!'

        cy.get('span[data-ui-id="page-title-wrapper"]')
            .should('be.visible', expectedText)
    }

}
export default new CartFlowPage;