//import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const { Then, When } = require("../../../lib/resolveStepDefinition");

//Navigate to URl
const SignIn = '.rd-ui-button_primary';
const GuestCheckIn = '.rd-ui-button_secondary';
const FullName = '#ember280';
const Email = '#ember284';
const Phone = '.fde-phone-number-control_input';
const StartOrdering = '#ember297';
const headerGuestName = 'h1.fde-restaurant-header_title';
const firstOption = '.fde-restaurant-menu-item_options';
const addButtonToAddOrder = '.fde-customize-order-item-button';
const placeOrderButton = '[id="fde-checkout-button"]';
const cutleryHeading = '[id="ember349"]';
const doneButton = '[id="ember454"]';
const editOrderButton = '.fde-group-checkout-confirmation_edit-order button';

Given('I Navigate to {string}', (url) => {
  cy.visit(url);
});

Given("I've signed in a guest", () => {
  cy.get(headerGuestName).should('contains.text', 'Test Order');
});

When('Presented with the signing modal', () => {
  cy.get(SignIn).should('be.visible');
  cy.get(GuestCheckIn).should('be.visible');
});

Then('I sign select sign in as a guest', () => {
  cy.get(GuestCheckIn).click();
});

When('I select an item with no options', () => {
  cy.get(firstOption).first().click();
  cy.get(addButtonToAddOrder).click();
});

When("I've finished ordering and checkout", () => {
  cy.get(placeOrderButton).click();
});

Then("I am able to select guest or sign in", () => {
  cy.get(SignIn).should('be.enabled');
  cy.get(GuestCheckIn).should('be.enabled');
});

When("I am able to sign in as a guest", () => {
  cy.get(GuestCheckIn).click();
  cy.get(FullName).type('FIrstTest Name');
  cy.get(Email).type('testGuest@order.com');
  cy.get(StartOrdering).click();
  cy.get(headerGuestName).should('contains.text', 'Test Order');
});


Then('I am prompted for cutlery', () => {
  cy.get(cutleryHeading).should('contains.text', 'ADD CUTLERY');
});

Then("I'm able to accept and finish the checkout proces", () => {
  cy.get(doneButton).click();
});

Then('Order is placed successfully', () => {
  cy.get(editOrderButton).should('be.visible');
});


