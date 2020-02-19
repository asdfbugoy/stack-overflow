/// <reference types="Cypress" />

context('Component', () => {
    beforeEach(() => {

    });
    describe('Visits List Page', () => {
        it('Visits the local server', () => {
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

    describe('Visits Detailed Page', () => {
        it('Clicks the first Title and navigate to Detailed Page', () => {
            cy.get('[data-cy=click-to-detail]:eq(0)').click();
        });

        it('Checks Vote Up and Vote Down buttons', () => {


            cy.get('[data-cy=score]').then(firstScore => {
                const first = parseInt(firstScore.text(),10);
                cy.get('[data-cy=score-up]').click();
                cy.get('[data-cy=score]').then(secondScore => {
                    const second = parseInt(secondScore.text(),10);
                    expect(second).eq(first + 1);
                });
            });

            cy.get('[data-cy=score]').then(firstScore => {
                const first = parseInt(firstScore.text(),10);
                cy.get('[data-cy=score-down]').click();
                cy.get('[data-cy=score]').then(secondScore => {
                    const second = parseInt(secondScore.text(),10);
                    expect(second).eq(first - 1);
                });
            });
        });
    });
});
