

it('Selecioanr a data de nascimento', function(){
    cy.visit('/datepicker')
    cy.get('.datetimepicker-dummy-input').click()
    cy.get('.datepicker-nav-month').click()
    cy.contains('.datepicker-month', 'nov').click()
    cy.contains('.datepicker-nav-year').click()
    cy.contains('.datepicker-year span', '1984').click()
    cy.contains('.date-item', '12').click()
})
//a busca pelo ano não foi bem sucedida, tem que ser refeito 
//o caminho para encontrar o erro