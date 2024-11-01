import'cypress-file-upload'

describe('example to-do app', () => {
    it('Attach file and work with datepicker', () => {
        cy.visit('https://demoqa.com/automation-practice-form');
        cy.get('#dateOfBirthInput').click();
        cy.get('[class*="month-select"]').select('November')
        cy.get('[class*=day--031]').click();
        cy.get('input#uploadPicture').attachFile('/life.jpg')
        cy.scrollTo('bottom')
    })
})