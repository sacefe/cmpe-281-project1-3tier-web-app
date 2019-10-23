const app = require('../../src/app');

describe('\'user-files\' service', () => {
  it('registered the service', () => {
    const service = app.service('user-files');
    expect(service).toBeTruthy();
  });
});
