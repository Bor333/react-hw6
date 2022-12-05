import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { MemoryRouter } from 'react-router-dom';

import { App } from './App';

describe('App', () => {
  it('wrong url', () => {
    render(
      <MemoryRouter initialEntries={['/wrong-url']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText('404 page')).toBeInTheDocument();
  });
  // it('send user message', async () => {
  //   render(<App />);

  //   const input = screen.getByTestId<HTMLInputElement>('input');
  //   await userEvent.type(input, 'Hello, world!');

  //   const button = screen.getByTestId('button');
  //   await userEvent.click(button);

  //   expect(screen.getAllByTestId('li').length).toBe(1);
  // });

  // it('bot answer', async () => {
  //   render(<App />);

  //   const input = screen.getByTestId<HTMLInputElement>('input');
  //   await userEvent.type(input, 'Hello, world!');

  //   const button = screen.getByTestId('button');
  //   await userEvent.click(button);

  //   // Вариант 1
  //   expect(
  //     await screen.findByText(/Im BOT/, undefined, { timeout: 1600 })
  //   ).toBeInTheDocument();

  //   // Вариант 2

  //   await waitFor(
  //     () => expect(screen.getByText(/Im BOT/)).toBeInTheDocument(),
  //     {
  //       timeout: 1600,
  //     }
  //   );

  //   //https://jestjs.io/ru/docs/timer-mocks
  // });
});
