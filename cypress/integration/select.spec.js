
//bucky é um personagem
it('Seleciona bucky por id', function(){
cy.visit('/select')
cy.get('#avengerList').select('Bucky').should('have.value', '2')

})

//usando função contains para selecionar por texto e oarente para chegar ao elemento 
//e usar a função select
it('Selecionar tony stark sem ser pelo id', function(){
    cy.visit('/select')
    cy.contains('option', 'Selecione um personagem')
    .parent()
    .select('Tony Stark')
    .should('have.value', '3')

})