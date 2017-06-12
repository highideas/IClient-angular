import { IClientAngularPage } from './app.po';

describe('iclient-angular App', () => {
  let page: IClientAngularPage;

  beforeEach(() => {
    page = new IClientAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
