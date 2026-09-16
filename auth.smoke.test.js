const { login } = require('./auth');

test('Smoke Test: Đăng nhập đúng thông tin (admin/123)', () => {
  expect(login('admin', '123')).toBe(false);
});
