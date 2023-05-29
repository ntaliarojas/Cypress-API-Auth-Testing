/**
 * La creación de comenandos ayuda limpiar mas el código.
 */

/**
 * Unificar aserciones.
 */
Cypress.Commands.add('validate_asertion', (option, component, have, text) => {
    if (option == 'validate_text') cy.get(component).should('exist').and(`have.${have}`, text);
    if (option == 'component_exist_DOM') cy.get(component).should('exist');
});