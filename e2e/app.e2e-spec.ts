import { HelloTodolistPage } from './app.po';

describe('hello-todolist App', () => {
  let page: HelloTodolistPage;

  beforeEach(() => {
    page = new HelloTodolistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
