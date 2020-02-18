/// <reference types="Cypress" />

context('App', () => {
    beforeEach(() => {

    });
    describe('Component', () => {
        it('visits the local server', () => {
            cy.visit('/');
        });

        it('Renders the App', () => {
            cy.get('[data-cy=app]');
        });
    });
});
