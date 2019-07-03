import { MedGloAppPage } from './app.po';

describe('med-glo-app App', () => {
  let page: MedGloAppPage;

  beforeEach(() => {
    page = new MedGloAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
