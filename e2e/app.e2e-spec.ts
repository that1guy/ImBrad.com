import { ImbradPage } from './app.po';

describe('imbrad App', () => {
  let page: ImbradPage;

  beforeEach(() => {
    page = new ImbradPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
