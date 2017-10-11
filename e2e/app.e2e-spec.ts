import { AngularDay11Page } from './app.po';

describe('angular-day11 App', function() {
  let page: AngularDay11Page;

  beforeEach(() => {
    page = new AngularDay11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
