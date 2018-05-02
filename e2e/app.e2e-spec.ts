import { MmtSimpleBloggingPage } from './app.po';

describe('mmt-simple-blogging App', function() {
  let page: MmtSimpleBloggingPage;

  beforeEach(() => {
    page = new MmtSimpleBloggingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
