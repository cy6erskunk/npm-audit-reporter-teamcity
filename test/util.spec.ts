import { debug } from '../src/util';

describe('util', () => {
  beforeEach(() => {
    process.env.DEBUG = '';
  });

  it('does not call console in normal mode', () => {
    const mockedLog = jest.spyOn(console, 'log');
    debug('Alert!', 123);
    expect(console.log).not.toHaveBeenCalled();
    mockedLog.mockRestore();
  });

  it('calls console in DEBUG mode', () => {
    const args = ['Alert!', 123];
    const mockedLog = jest.spyOn(console, 'log').mockImplementation();
    process.env.DEBUG = 'true';
    debug(...args);
    expect(console.log).toHaveBeenCalledTimes(1);
    expect(console.log).toHaveBeenCalledWith(...args);
    mockedLog.mockRestore();
  });
});
