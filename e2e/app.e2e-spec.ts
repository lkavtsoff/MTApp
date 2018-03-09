import { MtappPage } from './app.po';

describe('mtapp App', () => {
  let page: MtappPage;

  beforeEach(() => {
    page = new MtappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
