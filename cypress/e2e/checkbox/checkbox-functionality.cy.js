describe('Test DemoQA checkbox section', () => {
    it('Test Home checkbox functionality', () => {
        cy.visit('https://demoqa.com/checkbox')
        cy.get('[class*=icon-uncheck]').should('exist').and('be.visible');
        cy.get('#tree-node-home').check({force: true}).should('be.checked');
        cy.get('#result span').first().should('have.text', 'You have selected :');
        cy.get('#tree-node-home').uncheck({force: true}).should('not.be.checked');
    })

    it.only('Test collapsed/expended values', () => {
        cy.visit('https://demoqa.com/checkbox');
        cy.get('#tree-node ol li')
            .invoke('attr', 'class')
            .should('include', 'collapse');
        cy.get('[title = "Expand all"]').click();
        cy.get('#tree-node ol li')
            .invoke('attr', 'class')
            .should('include', 'expanded');
        cy.reload();
        cy.get('#tree-node ol li')
            .invoke('attr', 'class')
            .should('include', 'collapse');
    })
})