describe('example to-do app', () => {
  it('webTable', () => {
    cy.visit('https://demoqa.com/webtables')
    //cy.get('#addNewRecordButton').click()
    cy.contains('Add').click()
    cy.get('#firstName').type('Mara')
    cy.get('#lastName').type('Melk')
    cy.get('#userEmail').type('mar@mail.ru')
    cy.get('#age').type('15')
    cy.get('#salary').type('100000')
    cy.get('#department').type('Finance')
    cy.get('#submit').click()
    cy.get('.rt-tbody .rt-tr-group:nth-child(4)').should('exist')
  })
  it.only('check scrollTo command', () => {
    cy.visit('https://demoqa.com/webtables')
    //cy.get('.-pageInfo').siblings("span").find('select').select('100')
    cy.get('[class*=-pageInfo] + span').find('select')
        .select('100').should(have.value, '100')
    cy.scrollTo('bottom')
    cy.wait(2000)

  })
})