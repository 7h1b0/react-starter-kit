import * as React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

describe('<App />', () => {
  it('should render Hello Word and increment counter', () => {
    render(<App />);

    expect(screen.getByText('Hello World')).toBeVisible();
    expect(screen.getByText('0')).toBeVisible();
    expect(screen.queryByText('1')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('Click Me'));
    expect(screen.getByText('1')).toBeVisible();
    expect(screen.queryByText('0')).not.toBeInTheDocument();
  });
});
