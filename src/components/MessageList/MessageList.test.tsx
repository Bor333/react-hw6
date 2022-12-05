import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MessageList } from './MessageList';

describe('MessageList', () => {
  it('render component', () => {
    render(<MessageList messages={[]} />);
  });

  // it('messages list is empty', () => {
  //   render(<MessageList messages={[]} />);
  //   expect(screen.queryAllByRole('li').length).toBe(0);
  // });

  // it('messages list length is 2', () => {
  //   const messages: Messages = [
  //     {
  //       author: AUTHOR.USER,
  //       value: 'first',
  //     },
  //     {
  //       author: AUTHOR.USER,
  //       value: 'second',
  //     },
  //   ];
  //   render(<MessageList messages={messages} />);
  //   expect(screen.getAllByTestId('li').length).toBe(2);
  //   expect(screen.getAllByTestId('li')[0].innerHTML).toBe('USER: first');
  // });
});
