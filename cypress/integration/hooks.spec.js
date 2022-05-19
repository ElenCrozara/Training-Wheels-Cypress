
describe('Suite de testes', function(){
    //antes de todos
    before(function(){
        cy.log('Aqui temos algo que roda antes de todos os testes')
    })
    //antes de cada um
    beforeEach(function(){
        cy.log('Aqui temos algo que roda antes de CADA teste')
    })
    
    it('Teste 1',function(){
        cy.log('testando o teste 1')
    })
    
    it('Teste 2',function(){
        cy.log('testando o teste 1')
    })
    
    it('Teste 2',function(){
        cy.log('testando o teste 1')
    })

    //depois de cada um
    afterEach(function(){
        cy.log('Aqui temos algo que roda depois de CADA teste')
    })

    //depois de todos
    after(function(){
        cy.log('Aqui temos algo que roda depois de todos os testes')
    })
})

