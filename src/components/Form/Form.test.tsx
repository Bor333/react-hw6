import { Form } from './Form';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Form', () => {
  // let addMessage: jest.Mock<any, any>;
  // beforeEach(() => {
  //   addMessage = jest.fn();
  //   render(<Form addMessage={addMessage} />);
  // });
  it('render component', () => {
    const addMessage = jest.fn();
    render(<Form addMessage={addMessage} />);
  });
  // it('input change with fireevent', () => {
  //   const input = screen.getByTestId<HTMLInputElement>('input');

  //   fireEvent.change(input, { target: { value: 'new value' } });
  //   expect(input.value).toBe('new value');
  // });

  // it('input change with userevent', async () => {
  //   const input = screen.getByTestId<HTMLInputElement>('input');

  //   await userEvent.type(input, 'Hello world');
  //   expect(input.value).toBe('Hello world');
  // });

  // it('button click with fireEvent', () => {
  //   const input = screen.getByTestId<HTMLInputElement>('input');
  //   fireEvent.change(input, { target: { value: 'new value' } });
  //   expect(input.value).toBe('new value');

  //   const button = screen.getByTestId('button');
  //   // fireEvent.submit(getByRole(div, "my-form"));
  //   fireEvent.click(button);
  //   expect(addMessage).toHaveBeenCalledTimes(1);
  // });

  //TODO написать тест для tohavebeencalledwith
});
