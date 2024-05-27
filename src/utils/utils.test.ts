import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { loginAuth, registerAuth } from './auth';
import { classOptions, sectionOptions } from './options';

const mockAxios = new MockAdapter(axios);

test('loginAuth success', async () => {
  mockAxios.onGet('/users').reply(200, [
    {
      id: 1,
      fname: 'Joey',
      lname: 'Tribbiani',
      class: 10,
      section: 'A',
      email: 'ts1234@srmist.edu.in',
      password: 'Password@123'
    }
  ]);

  const result = await loginAuth('ts1234@srmist.edu.in', 'Password@123');
  expect(result).toBe(true);
});

test('loginAuth incorrect credentials', async () => {
  mockAxios.onGet('/users').reply(200, []);

  await expect(loginAuth('ts1234@srmist.edu.in', 'Wrong@123')).rejects.toThrow(
    'Incorrect credentials or No user found!!!'
  );
});

test('registers a new user successfully', async () => {
  mockAxios.onPost('/users').reply(201);

  const userData = {
    fname: 'Joey',
    lname: 'Tribbiani',
    class: 10,
    section: 'A',
    email: 'ts1234@srmist.edu.in',
    password: 'Password@123'
  };
  const result = await registerAuth(userData);

  expect(result).toBe(true);
});

describe('Options Tests', () => {
  test('classOptions length should be 12', () => {
    expect(classOptions).toHaveLength(12);
  });

  test('sectionOptions length should be 26', () => {
    expect(sectionOptions).toHaveLength(26);
  });
});
