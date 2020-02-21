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
            cy.get('[data-cy=questions]').should(d => {
                expect(d.find('[data-cy=question]').length).lte(15);
            });
        });

        it('Checks topic description to have max 255 characters', () => {
            cy.get('[data-cy=body]').should(data => {
                Array.from(data).map((d) => {
                    expect(d.innerHTML.length).lte(255 + 4);
                });
            });
        });

        it('Display Pagination', () => {
            cy.get('[data-cy=pagination]');
        });

        it('Click and Check Pagination buttons works', () => {
            cy.get('[data-cy=pagination]').find('button').then(data => {
                Array.from(data).map(d => {
                    cy.get(d).click({ delay: 3000 });
                    cy.get('[data-cy=questions]').should(d => {
                        expect(d.find('[data-cy=question]').length).lte(15);
                    });
                });
            });
        });

    });

    describe('Add Question Page', () => {
        it('Click Header to Navigate to Question List Page', () => {
            cy.get('[data-cy=header] .btn').click();
        });
        it('Click Add Question Button and Navigate to Add Question Page', () => {
            cy.get('[data-cy=btn-add-question').click();
        });
        it('Click Submit and validates the form', () => {
            cy.get('[data-cy=body]').type('Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, minima temporibus iure quos eum enim reprehenderit architecto laudantium repellat debitis sunt fugiat eligendi quidem numquam quibusdam tenetur? Maiores facere labore inventore quam maxime at qui minima sequi fugiat. Ullam corporis quas magni sapiente odio tempore non nobis eaque earum. Magnam, impedit tempora. Quo voluptatem voluptatum distinctio aliquam deleniti quidem, recusandae dolores perspiciatis at. Voluptate reprehenderit nihil sit sequi fugit hic minus, cum alias ea cumque neque consequuntur a debitis, maxime illo, nulla veritatis vitae repellat nam illum labore distinctio! Suscipit iusto expedita veniam delectus reiciendis inventore, praesentium voluptas perferendis dolore culpa, minus, cumque ad nisi consequatur alias! Ratione, ipsa? Dicta dolores commodi, tempora quas odit atque eveniet cum omnis harum suscipit dolorum quod consequuntur qui veritatis provident, ducimus distinctio. Qui architecto veritatis nisi quas tempore placeat voluptatum debitis, deserunt quia officia soluta esse ipsam ex dignissimos fugiat nihil obcaecati excepturi! Tempora magni deserunt animi optio assumenda ea, quasi laudantium commodi. Id dolorem qui obcaecati ipsum omnis ab suscipit blanditiis iste magni velit ratione error et voluptas eaque, incidunt delectus voluptatibus doloribus quibusdam repellendus dignissimos eum voluptatum officia quam. Vitae quae soluta libero minus iste itaque ratione odio, modi unde accusamus rerum tenetur fuga expedita cumque. Voluptatum quibusdam in nihil maxime quam animi blanditiis ab eveniet, magnam id odit accusantium maiores doloribus cum beatae quos ea aliquam ducimus possimus temporibus voluptatibus quasi fuga! Fuga rerum aut ipsum, cumque atque corrupti minus ad quaerat iste assumenda iusto eius aperiam totam quis nihil possimus vitae officiis quos magnam, molestiae, dolor amet illo. Quasi?').should(d => {
                expect(d[0].value.length).lte(255);
            });
            cy.get('[data-cy=btn-submit]').click();
            cy.get('[data-cy=form]').should(d =>  {
                expect(d[0].checkValidity()).eq(false);
            });

        });
        it('Accepts Inputs and Submit and check if it is added', () => {
            cy.get('[data-cy=title]').type('How to pass Great Eastern Exam');
            cy.get('[data-cy=body]').clear().type('Its hard to pass the exam. You need a lot of SMILE.').should(d => {
                expect(d[0].value.length).lte(255);
            });
            cy.get('[data-cy=tags]').type('Hope, Pass, Exam, Please, React-with-SMILE');
            cy.get('[data-cy=form]').then(form => {
                const title = form.find('[data-cy=title]')[0].value;
                const body = form.find('[data-cy=body]')[0].value;
                const tags = form.find('[data-cy=tags]')[0].value.split(',');
                cy.get('[data-cy=btn-submit]').click();
                // cy.get('[data-cy=question]:eq(0)');
                cy.get('[data-cy=click-to-detail]:eq(0)').should(d => expect(d[0].text).eq(title));
                cy.get('[data-cy=body]:eq(0)').should(d => expect(d[0].innerHTML).eq(body));
                cy.get('[data-cy=tags]:eq(0) .badge').should(d => {
                    Array.from(d).map((data,i) => {
                        expect(data.innerHTML).eq(tags[i]);
                    });
                });

            });
        });
        it('Checks if the user is HANDSOME', () => {
            cy.get('[data-cy=owner-name]:eq(0)').should(d => {
                expect(d[0].innerHTML).eq('Francis Samande Declaro');
            });
        });
    });

    describe('Visits Detailed Page', () => {
        it('Click Header to Navigate to Question List Page', () => {
            cy.get('[data-cy=header] .btn').click();
        });

        it('Clicks the first Title and navigate to Detailed Page', () => {
            cy.get('[data-cy=click-to-detail]:eq(0)').click();
        });

        it('Checks Vote Up and Vote Down buttons', () => {
            cy.get('[data-cy=score]').then(firstScore => {
                const first = parseInt(firstScore.text(), 10);
                cy.get('[data-cy=score-up]').click();
                cy.get('[data-cy=score]').should(secondScore => {
                    const second = parseInt(secondScore.text(), 10);
                    expect(second).eq(first + 1);
                });
            });

            cy.get('[data-cy=score]').then(firstScore => {
                const first = parseInt(firstScore.text(), 10);
                cy.get('[data-cy=score-down]').click();
                cy.get('[data-cy=score]').should(secondScore => {
                    const second = parseInt(secondScore.text(), 10);
                    expect(second).eq(first - 1);
                });
            });
        });
        it('Clicks 100 votes to pass', () => {
            Array.from({length:100}).map(() => cy.get('[data-cy=score-up]').click());
        });
    });

});
