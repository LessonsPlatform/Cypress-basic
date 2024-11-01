describe('example to-do app', () => {
    it('webTable', () => {
        cy.visit('https://demoqa.com/alerts');
        cy.get('#alertButton').click();
        cy.on("window:alert", (text)=>{
            expect(text).to.equal('You clicked a button');
        });
    })
})