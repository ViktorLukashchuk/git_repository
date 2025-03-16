describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://www.bricklink.com/v2/main.page');
    });

    it('should find 8275 set', () => {
        cy.get('button.btn.btn--cta.text--bold.cookie-notice__btn').eq(1).click();
        cy.get('input.blp-adv-search__input[placeholder="Search..."]').type('8275');
        cy.get('button.blp-btn.blp-adv-search__submit').click();

        const resultSelector = '#_idInKeyword';
        const setPage = cy.get(resultSelector).should('have.value', '8275');

        if (setPage) {
            cy.contains('a', 'Motorized Bulldozer').click({ force: true });
            cy.get('#item-name-title').should('text', 'Motorized Bulldozer');
            cy.get('#_idItemDescription').should('text', 'Requires 6 AA (1.5V) and 3 AAA (1.5V) batteries, not included.');
        }
    });

    it('Main page header contains menu "BrickLink Designer Program"', () => {
        cy.get('button.btn.btn--cta.text--bold.cookie-notice__btn').eq(1).click();
        const headerItemsSelector = 'ul li.blp-nav__main-item button span';

        const headerItems: string[] = [];
        cy.get(headerItemsSelector)
            .each(($el) => {
                cy.wrap($el)
                    .invoke('text')
                    .then((text) => {
                        headerItems.push(text.trim());
                    });
            })
            .then(() => {
                expect(headerItems).to.include('BrickLink Designer Program');
            });
    });
});
