describe('Navigation', () => {
    it('should navigate to the My Expenses page', () => {
        cy.visit('http://localhost:3000/');

        cy.get('a#my-expenses-button').click();

        cy.url().should('include', '/expenses');

        cy.get('h1').contains('My Expenses');
    });

    it('should navigate to the Add expense page', () => {
        cy.visit('http://localhost:3000/');

        cy.get('a#add-expense-button').click();

        cy.url().should('include', '/expenses/add');

        cy.get('h1').contains('Add new expense');
    });
});