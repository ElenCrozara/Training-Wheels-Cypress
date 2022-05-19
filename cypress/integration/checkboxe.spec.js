
it('Selecionando os melhores filmes da Marvel', function(){
    cy.visit('/checkboxes')
    
    cy.get('h3[class^="title"]').should('have.text', 'Checkboxes')

    const movies = [
        'capmarvel',
        'strange',
        'avengers3'
    ]
    //lup forEach criado para trazer o nome de cada filme dentro das {}
    movies.forEach(function(m){
        cy.get(`div [name=${m}]`)
        .click()
        .should('be.checked')

    })

   
    

})