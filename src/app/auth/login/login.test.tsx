import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  AppRouterContext,
  AppRouterInstance
} from 'next/dist/shared/lib/app-router-context.shared-runtime';

import Login from './page';

jest.mock('../../../Provider/auth', () => ({
  useAuth: jest.fn(() => ({
    isLoggedIn: false,
    login: jest.fn()
  }))
}));

jest.mock('next/navigation', () => ({
  __esModule: true,
  useRouter: jest.fn()
}));

const mockRouter: AppRouterInstance = {
  push: jest.fn(),
  back: jest.fn(),
  forward: jest.fn(),
  refresh: jest.fn(),
  prefetch: jest.fn(),
  replace: jest.fn()
};

describe('Login component', () => {
  it('renders the login form', () => {
    render(
      <AppRouterContext.Provider value={mockRouter}>
        <Login />
      </AppRouterContext.Provider>
    );

    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const loginButton = screen.getByRole('button', { name: /log in/i });

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('shows error message on failed login', async () => {
    render(
      <AppRouterContext.Provider value={mockRouter}>
        <Login />
      </AppRouterContext.Provider>
    );
    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);
    const loginButton = screen.getByRole('button', { name: /log in/i });

    userEvent.type(emailInput, 'te1234');
    userEvent.type(passwordInput, 'Wrong@123');
    fireEvent.click(loginButton);

    const mockedLogin = jest.fn(() => Promise.reject(new Error('Invalid credentials')));
    mockedLogin.mockRejectedValue(new Error('Invalid credentials'));

  });
});
