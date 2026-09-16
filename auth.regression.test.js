const { login } = require('./auth');

describe('Regression Test Suite - Auth Module', () => {
  test('Sai mật khẩu', () => {
    expect(login('admin', 'wrong_pass')).toBe(false);
  });

  test('Username rỗng', () => {
    expect(login('', '123')).toBe(false);
  });

  test('Mật khẩu chứa ký tự đặc biệt', () => {
    expect(login('admin', '123@#$')).toBe(false);
  });

  test('Tài khoản không tồn tại', () => {
    expect(login('user_fake', '123')).toBe(false);
  });
});
