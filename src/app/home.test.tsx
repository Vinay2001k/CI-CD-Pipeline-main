import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './page';

describe('Home Component', () => {
  test('renders the main elements', () => {
    render(<Home />);

    const title = screen.getByText('RollSync');
    expect(title).toBeInTheDocument();

    const subtitle = screen.getByText('Simplify Student Attendance Tracking');
    expect(subtitle).toBeInTheDocument();

    const getStartedButton = screen.getByRole('button', { name: /Get Started/i });
    expect(getStartedButton).toBeInTheDocument();
    expect(getStartedButton).toHaveAttribute('href', '/auth/register');
  });
});
