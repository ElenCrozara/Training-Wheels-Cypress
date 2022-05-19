

it('Exemplo de timeout', function(){
    cy.visit('/timeout')
    cy.contains('button', 'Habilita').click()

    //wait aumenta o tempo do relógio
    //cy.wait(7000)

    cy.get('#firstname')
        .should('be.visible')
        .type('Elen', {timeout: 7000})
})