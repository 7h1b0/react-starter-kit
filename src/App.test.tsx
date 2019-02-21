import * as React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import App from './App';

describe('<App />', () => {
  afterEach(cleanup);

  it('should render Hello Word and increment counter', () => {
    const { getByText } = render(<App />);

    expect(getByText('Hello World')).toBeDefined();
    expect(getByText('0')).toBeDefined();

    fireEvent.click(getByText('Click Me'));
    expect(getByText('1')).toBeDefined();
  });
});
