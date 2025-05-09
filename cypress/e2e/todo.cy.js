describe('To-Do App', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('loads the page', () => {
    cy.contains('To-Do List');
  });

  it('adds a new task', () => {
    cy.get('#new-todo').type('Learn Cypress');
    cy.contains('Add').click();
    cy.get('#todo-list').should('contain', 'Learn Cypress');
  });
});
