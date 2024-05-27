import { AttendanceView, UserDetails } from '@/components';
import { render, screen } from '@testing-library/react';

// Mocking getCookie
jest.mock('cookies-next', () => ({
  getCookie: jest.fn()
}));

// Mocking getUserDetails
jest.mock('@/utils/auth', () => ({
  getUserDetails: jest.fn()
}));

// Mocking checkAttendance
jest.mock('@/utils/attendance', () => ({
  checkAttendance: jest.fn()
}));

describe('UserDetails component', () => {
  it('renders user details correctly', () => {
    const handleAttendanceMock = jest.fn();
    render(<UserDetails handleAttendance={handleAttendanceMock} />);
    expect(screen.getByText('Student Details')).toBeInTheDocument();
    expect(screen.getByText('Mark Attendance for today')).toBeInTheDocument();
  });

  it('calls handleAttendance when mark attendance button is clicked', () => {
    const history = [
      {
        user_id: 103,
        date: '3/16/2024',
        status: 1,
        id: 2
      },
      {
        user_id: 103,
        date: '3/15/2024',
        status: 0,
        id: 1
      }
    ];
    render(<AttendanceView history={history} />);
    expect(screen.getByText('Attendance History')).toBeInTheDocument();
  });
});
