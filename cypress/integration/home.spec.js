
it('deve exibir a home page', function () {
    cy.visit('/')

    cy.title()
        .should('eq', 'Training Wheels | QAninja')

    cy.get('ul[class="menu-list"]')
        .should('be.visible')

    cy.get('a img[src="/img/bg-hero-v2.png"]')
        .should('be.visible')
})