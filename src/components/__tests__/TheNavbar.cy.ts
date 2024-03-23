import TheNavbar from '@/components/TheNavbar.vue'

describe('TheNavbar', () => {
  it('should render the navbar', () => {
    cy.mount(TheNavbar)
    cy.get('nav').should('exist')
  })
  it('should open the mobile menu', () => {
    cy.mount(TheNavbar)
    cy.get('#mobile-menu').should('not.exist')
    cy.get('#hamburger-menu').click()
    cy.get('#mobile-menu').should('exist')
  })
  it('should toggle dark mode', () => {
    cy.mount(TheNavbar)
    cy.get('#toggle-mode').click()
    // icon should change
    cy.get('#toggle-mode')
        .find('svg')
        .should('have.attr', 'data-icon', 'material-symbols:dark-mode-outline-rounded')
    cy.get('#toggle-mode').click()
    cy.get('#toggle-mode')
        .find('svg')
        .should('have.attr', 'data-icon', 'material-symbols:wb-sunny-outline')
  })
})
