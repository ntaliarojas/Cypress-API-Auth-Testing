import component from '../fixtures/Component.json'

/**
 * Automatizacion de la pagina de pruebas http://demo-store.seleniumacademy.com/
 */
describe('Valida el home page, los menus y los sub-menus de la página Madison Island', () => {

    it(`Cargar y validar el header de Madison Island`, () => {

        cy.visit('/');
        cy.log(`Valida elementos de la carga de Madison Island`);
        cy.validate_asertion('validate_text', 'label[for="select-language"]', 'text', 'Your Language:');
        cy.validate_asertion('validate_text', 'p[class="welcome-msg"]', 'text', 'Welcome ');
        cy.validate_asertion('validate_text', '.skip-account > .label', 'text', 'Account');
        cy.validate_asertion('validate_text', '.header-minicart > .skip-link > .label', 'text', 'Cart');
        cy.validate_asertion('component_exist_DOM', '.skip-account > .icon');
        cy.validate_asertion('component_exist_DOM', '.header-minicart > .skip-link > .icon');
        cy.validate_asertion('component_exist_DOM', '#search');
        cy.validate_asertion('component_exist_DOM', '.large');
    });

    context(`Ingresar y validar el menu y sub-menu`, () => {

        component.nav.forEach((frist_nav, index_nav) => {

            it(`Se valida el menú: ${frist_nav.text}`, () => {

                cy.validate_asertion('validate_text', `.nav-${index_nav + 1} > .has-children`, 'text', frist_nav.text);

                frist_nav.sub_nav.forEach((nav, index) => {

                    cy.log(`Se valida el submenú: ${nav.text} de ${frist_nav.text}`);
                    cy.validate_asertion('validate_text', `li[class="level1 nav-${index_nav + 1}-${index + 1}${nav.type}"]`, 'text', nav.text).click({ force: true }).click();

                    cy.log(`Se valida posicionamiento en la miga de pan: ${nav.text}`);
                    cy.validate_asertion('validate_text', `.category${nav.category} > strong`, 'text', nav.text);

                    cy.log(`Se valida Título de subsección: ${nav.text}`);
                    cy.validate_asertion('validate_text', 'h1', 'text', nav.text);

                    cy.log(`Regresa al home, por medio del logo`);
                    cy.validate_asertion('component_exist_DOM', '.large').click();
                });
            });
        });
    });
});