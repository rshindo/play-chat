import { PlayChatClientPage } from './app.po';

describe('play-chat-client App', function() {
  let page: PlayChatClientPage;

  beforeEach(() => {
    page = new PlayChatClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
