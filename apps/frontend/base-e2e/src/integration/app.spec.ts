import { getGreeting } from '../support/app.po';

describe('frontend-base', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to frontend-base!');
  });
});
