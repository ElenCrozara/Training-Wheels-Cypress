
it('Selecionando botões de Radio',function(){

    cy.visit('/radios')
    cy.get('h3.title').should('have.text', 'Radio Buttons')
    cy.get('input[value=capmarvel]')
        .click()
        .should('be.checked')
})