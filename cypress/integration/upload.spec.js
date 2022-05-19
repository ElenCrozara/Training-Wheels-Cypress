
it('Deve fazer upload da imagem', function(){
    cy.visit('/upload')

    const imageFile = 'cypress/fixtures/cnh-digital.jpg.jpg'

    cy.get('input[name=file]').selectFile(imageFile, {force: true})
    cy.get('input[value=Upload]').click()
    cy.get('.is-rounded', {timeout: 7000}).should('be.visible')
})