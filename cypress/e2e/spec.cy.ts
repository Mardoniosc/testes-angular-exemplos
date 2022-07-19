describe('Teste de exemplo', () => {
  it('Pagina inicial do projeto', () => {
    cy.visit('/')
    cy.contains('Titulo app-teste')
    cy.contains('Quote of the day')
  })
})
