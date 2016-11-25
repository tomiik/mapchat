import { MapchatPage } from './app.po';

describe('mapchat App', function() {
  let page: MapchatPage;

  beforeEach(() => {
    page = new MapchatPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
