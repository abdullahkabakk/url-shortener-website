import TheButton from '@/components/TheButton.vue'
import '@/index.css'

describe('TheButton', () => {
  it('should have outline class', () => {
    cy.mount(TheButton, { props: { type: 'outline', text: 'Hello Cypress' } })
    cy.get('button').should('have.class', 'border border-primary-light')
  })
  it('should have solid class', () => {
    cy.mount(TheButton, { props: { type: 'solid', text: 'Hello Cypress' } })
    cy.get('button').should('have.class', 'bg-primary-light')
  })
})
