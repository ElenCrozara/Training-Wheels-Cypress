it('Deve exibir uma notificação toast', function(){

    cy.visit('/toaster')

    cy.contains('button', 'Toast Rápido').click()

    cy.get('.notification')
        .should('be.visible')
        .should('have.text', 'Essa notificação é muito rápida!')

    cy.get('body')

    cy.wait(3000)
})

it('Deve exibir uma notificação toast', function(){

    cy.visit('/toaster')

    cy.contains('button', 'Toast Lento').click()

    cy.get('.notification')
        .should('be.visible')
       .should('have.text', 'Essa notificação é mais fácil para testar!')

    cy.get('body')

    cy.wait(3000)
})