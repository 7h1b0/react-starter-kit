import * as React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

describe('<App />', () => {
  it('should render Hello Word and increment counter', () => {
    const { getByText } = render(<App />);

    expect(getByText('Hello World')).toBeVisible();
    expect(getByText('0')).toBeVisible();

    fireEvent.click(getByText('Click Me'));
    expect(getByText('1')).toBeVisible();
  });
});
