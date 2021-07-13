describe('Visiting Website', () => {
  it('test1 iFrame', () => {
    cy.visit('http://the-internet.herokuapp.com/iframe');
    const iframe = cy
       .get('#mce_0_ifr')
       .its('0.contentDocument.body')
       .should('be.visible')
       .then(cy.wrap);
      iframe.clear().type('hello');
      iframe.type('{ctrl+a}');
     cy.wait(2000);
     cy.get('.tox-menubar').contains('Format').click();
     cy.wait(2000);
     cy.get('[title="Text color"] > .tox-collection__item-label').click();
     cy.get('[title="Dark Purple"]').click();
     cy.wait(2000);
     cy.get('[aria-label="Bold"] > .tox-icon > svg').click();
     cy.wait(4000);
     

  })

    it.skip('drag and drop', () => {
      cy.visit('http://the-internet.herokuapp.com/drag_and_drop');
        cy.get('#column-a').drag('#column-b');
        cy.get('#column-a').should('have.text','B');
        cy.get('#column-b').should('have.text', 'A');
      })

        it.skip('test2 iframe', () => {
            cy.visit('http://the-internet.herokuapp.com/iframe');
            cy.get('.tox-menubar').contains('Format').click();
            cy.wait(2000);
            cy.get('[title="Text color"] > .tox-collection__item-label').click();
            cy.get('[title="Dark Purple"]').click();
            cy.wait(2000);
            cy.get('[aria-label="Bold"] > .tox-icon > svg').click();
            cy.wait(4000);
            cy.get('#mce_0_ifr').within(function($iFrame){
            const iFrameContent = $iFrame.contents().find('body')
            cy.wrap(iFrameContent)
              .clear()
              .click()
              .type('hello world!')
            })
        })

  })
