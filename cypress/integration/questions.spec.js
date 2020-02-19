/// <reference types="Cypress" />

context('Component', () => {
    beforeEach(() => {

    });
    describe('Visits List Page', () => {
        it('visits the local server', () => {
            cy.visit('/');
        });

        it('Renders max of 15 questions with elements', () => {
            cy.get('[data-cy=questions]');
            cy.get('[data-cy=questions]').then(d => {
                d.find('[data-cy=question]').length > 0
                    && cy.get('[data-cy=status]')
                    && cy.get('[data-cy=information]');

                expect(d.find('[data-cy=question]').length).lte(15);
            });
        });
    });
});
