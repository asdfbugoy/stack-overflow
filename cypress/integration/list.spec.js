/// <reference types="Cypress" />

context('Component', () => {
    beforeEach(() => {

    }); 
    describe('List Page', () => {
        it('visits the local server', () => {
            cy.visit('/');
        });

        it('Renders the list', () => {
            cy.get('[data-cy=app]');
        });
    });
});
