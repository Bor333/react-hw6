import { Button } from './Button';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

describe('Button', () => {
  it('render component', () => {
    render(<Button>test</Button>);
  });

  // it('render with snapshot', () => {
  //   const { asFragment } = render(<Button label="test" />);

  //   expect(asFragment()).toMatchSnapshot();
  // });

  // it('render component with text', () => {
  //   render(<Button>test</Button>);

  //   expect(screen.getByText(/test/)).toBeInTheDocument();
  // });

  // it('render multiply components', () => {
  //   render(
  //     <>
  //       <Button>test</Button>
  //       <Button>test</Button>
  //     </>
  //   );

  //   expect(screen.queryAllByRole('button').length).toBe(2);
  // });

  // it('button is disabled', () => {
  //   render(<Button disabled>test</Button>);

  //   expect(screen.getByText(/test/)).toBeDisabled();
  // });

  // // it('button have style color red', () => {
  // //   render(<Button label="test" />);

  // //   expect(screen.getByText(/test/)).toHaveStyle({ color: 'red' });
  // // });

  // it('button click with userEvent', async () => {
  //   const mockHandler = jest.fn();
  //   render(<Button click={mockHandler}>test</Button>);

  //   await userEvent.click(screen.getByText(/test/));

  //   expect(mockHandler).toHaveBeenCalledTimes(1);
  // });

  // it('button async click', async () => {
  //   const mockHandler = jest.fn();
  //   render(<Button click={() => setTimeout(mockHandler, 1500)}>test</Button>);

  //   await userEvent.click(screen.getByText(/test/));

  //   await waitFor(() => expect(mockHandler).toHaveBeenCalledTimes(1), {
  //     timeout: 1600,
  //   });

  //   // await screen.findByText('Clicked twice', { timeout: 1000 });
  // });

  // it('test example', async () => {
  //   const onChange = jest.fn();
  //   render(<input type="checkbox" onChange={onChange} />);

  //   const checkbox = screen.getByRole('checkbox');

  //   await userEvent.dblClick(checkbox);
  //   expect(onChange).toHaveBeenCalledTimes(2);
  //   expect(checkbox).not.toBeChecked();
  // });
});
