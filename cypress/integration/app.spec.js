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

        it('Renders App elements', () => {
            cy.get('[data-cy=app] [data-cy=header]');
            cy.get('[data-cy=app] [data-cy=main]');
            cy.get('[data-cy=app] [data-cy=footer]');
        });
    });
});
