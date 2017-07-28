import { LazyloadPage } from './app.po';

describe('lazyload App', () => {
  let page: LazyloadPage;

  beforeEach(() => {
    page = new LazyloadPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
